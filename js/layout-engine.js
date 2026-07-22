(() => {
  function esc(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function zoneForLayout(layout, widgets) {
    const [first, second, third, fourth, fifth] = widgets;
    const zones = {
      workbench: { primary: [first, second, third], inspector: [fourth, fifth] },
      split: { primary: [first, second], inspector: [third, fourth, fifth] },
      console: { primary: [first, second, third, fourth], inspector: [fifth] },
      sidebar: { primary: [second, third, fourth], inspector: [first, fifth] },
      canvas: { primary: [first, second, third], inspector: [fourth, fifth] },
      inspector: { primary: [first, second], inspector: [third, fourth, fifth] },
      timeline: { primary: [first, second, third, fourth], inspector: [fifth] }
    };
    return zones[layout] || zones.workbench;
  }

  function renderLayout(snapshot) {
    const plan = snapshot.plan;
    const zones = zoneForLayout(plan.layout, plan.widgets).primary.filter(Boolean);
    const inspector = zoneForLayout(plan.layout, plan.widgets).inspector.filter(Boolean);

    return `
      <div class="gen-header planned-preview-header">
        <div><span class="mini-label">${snapshot.label}</span><h3>${snapshot.title}</h3></div>
        <button class="btn btn-outline-dark btn-sm" type="button">鎖定規劃</button>
      </div>
      <nav class="planned-nav" aria-label="AI 規劃導覽">${plan.navigation.map((item) => `<span>${item}</span>`).join("")}</nav>
      ${renderTemplate(snapshot, zones, inspector)}
      <div class="planned-summary-row">
        <article><span>IA</span><strong>${plan.iaPattern}</strong></article>
        <article><span>Widgets</span><strong>${plan.widgets.length}</strong></article>
        <article><span>Risk</span><strong id="riskMetric">${snapshot.risk}</strong></article>
        <article><span>Score</span><strong id="qualityMetric">${snapshot.quality}</strong></article>
      </div>
      <p class="planned-summary" id="summaryText">${snapshot.summary}</p>
    `;
  }

  function renderTemplate(snapshot, zones, inspector) {
    const plan = snapshot.plan;
    const signature = renderSignatureSurface(snapshot);
    const inspectorSummary = `<div class="planning-signature"><span>${plan.innovationLabel}</span><strong>${snapshot.planningContext.domainLabel}</strong><p>${snapshot.planningContext.reason}</p></div>`;
    const widgets = (items, offset = 0) => items.map((widget, index) => window.SkillPlanningLab.renderWidget(widget, snapshot, index + offset)).join("");

    if (plan.innovationMode === "conservative") {
      return `<div class="planned-layout planned-layout-ledger">
        <aside class="ledger-index" aria-label="審查順序">
          <span>REVIEW ORDER</span>
          ${["規則", "證據", "風險", "決策"].map((item, index) => `<b class="${index === 2 ? "active" : ""}">${String(index + 1).padStart(2, "0")} ${item}</b>`).join("")}
        </aside>
        <section class="ledger-main" aria-label="主要審查工作物件">${signature}</section>
        <aside class="ledger-decision" aria-label="決策資訊">${inspectorSummary}</aside>
        <section class="ledger-records" aria-label="審查記錄">${widgets([...zones.slice(0, 1), ...inspector.slice(0, 1)], 0)}</section>
      </div>`;
    }

    if (plan.innovationMode === "exploratory") {
      return `<div class="planned-layout planned-layout-canvas">
        <section class="canvas-workspace" aria-label="探索決策畫布">
          ${signature}
          <div class="canvas-axis canvas-axis-x"><span>已知證據</span><span>待驗證假設</span></div>
          <div class="canvas-axis canvas-axis-y"><span>局部</span><span>全域影響</span></div>
        </section>
        <aside class="canvas-decision-dock" aria-label="決策停靠區">
          ${inspectorSummary}
          ${widgets(inspector.slice(0, 1), zones.length)}
        </aside>
        <section class="canvas-tray" aria-label="探索素材">${widgets(zones.slice(0, 1), 0)}</section>
      </div>`;
    }

    return `<div class="planned-layout planned-layout-split">
      <section class="planned-primary" aria-label="主要生成元件">
        ${signature}
        ${widgets(zones.slice(0, 1), 0)}
      </section>
      <aside class="planned-inspector" aria-label="規劃檢查">
        ${inspectorSummary}
        ${widgets(inspector.slice(0, 2), zones.length)}
      </aside>
    </div>`;
  }

  function renderSignatureSurface(snapshot) {
    const context = snapshot.planningContext;
    const plan = snapshot.plan;
    const mode = snapshot.modeKey || "balanced";
    if (context.domain === "medical") return renderMedicalSurface(snapshot, mode);
    if (context.domain === "crm") return renderPipelineSurface(snapshot, mode);
    if (context.domain === "support") return renderSupportSurface(snapshot, mode);
    if (context.domain === "esg") return renderEvidenceGateSurface(snapshot, mode);
    if (context.domain === "security") return renderSecuritySurface(snapshot, mode);
    if (context.domain === "developer") return renderConsoleSurface(snapshot, mode);
    return renderPlanningCanvasSurface(snapshot, mode, plan);
  }

  function renderMedicalSurface(snapshot, mode) {
    const density = mode === "exploratory" ? "wide" : "dense";
    return `<section class="signature-surface signature-medical signature-${density} signature-mode-${mode}">
      <div class="signature-head"><span>Clinical Work Object</span><strong>病患用藥驗證路徑</strong><small>${esc(snapshot.plan.iaPattern)}</small></div>
      <div class="care-trajectory">
        ${["病患摘要", "用藥比對", "交互作用", "證據引用", "覆核決策"].map((stage, index) => `
          <button class="care-stage ${index === 2 ? "active" : ""} ${index === 3 ? "evidence" : ""}" type="button">
            <b>0${index + 1}</b><span>${stage}</span><i>${index === 2 ? "高風險" : index < 2 ? "已讀取" : "待確認"}</i>
          </button>
        `).join("")}
      </div>
      <div class="dose-lanes">
        <span>腎功能劑量</span><i style="--level:76%"></i>
        <span>禁忌證</span><i style="--level:42%"></i>
        <span>來源可信度</span><i style="--level:88%"></i>
      </div>
    </section>`;
  }

  function renderPipelineSurface(snapshot, mode) {
    const stages = mode === "exploratory"
      ? ["Signal", "Fit", "Value", "Decision", "Expansion"]
      : ["Lead", "Customer", "Deal", "Activity", "Next Step"];
    return `<section class="signature-surface signature-pipeline signature-mode-${mode}">
      <div class="signature-head"><span>Pipeline Work Object</span><strong>客戶關係推進軌</strong><small>${esc(snapshot.planningContext.primaryUser)}</small></div>
      <div class="pipeline-river">
        ${stages.map((stage, index) => `<div class="pipeline-stage stage-${index + 1}"><span>${stage}</span><strong>${index === 2 ? "AI 建議" : `${12 - index * 2} items`}</strong></div>`).join("")}
      </div>
    </section>`;
  }

  function renderSupportSurface(snapshot, mode) {
    return `<section class="signature-surface signature-support signature-mode-${mode}">
      <div class="signature-head"><span>Queue Work Object</span><strong>客服工單分流檯</strong><small>${mode === "exploratory" ? "reply-first" : "sla-first"}</small></div>
      <div class="ticket-flow">
        ${["新進", "需升級", "等待客戶", "可回覆"].map((lane, index) => `<div><b>${lane}</b><span>${index === 1 ? "P1" : `P${index + 2}`}</span><i></i><i></i></div>`).join("")}
      </div>
    </section>`;
  }

  function renderEvidenceGateSurface(snapshot, mode) {
    return `<section class="signature-surface signature-evidence-gate signature-mode-${mode}">
      <div class="signature-head"><span>Governance Work Object</span><strong>證據到核准閘門</strong><small>${esc(snapshot.planningContext.risk)} risk</small></div>
      <div class="evidence-gates">
        ${["揭露資料", "來源證據", "稽核衝突", "核准條件"].map((gate, index) => `<button class="${index === 2 ? "blocked" : ""}" type="button"><span>${gate}</span><b>${index === 2 ? "Check" : "Pass"}</b></button>`).join("")}
      </div>
      <div class="gate-impact"><span>缺口會阻擋核准</span><strong>${snapshot.score}%</strong></div>
    </section>`;
  }

  function renderSecuritySurface(snapshot, mode) {
    return `<section class="signature-surface signature-security signature-mode-${mode}">
      <div class="signature-head"><span>Investigation Work Object</span><strong>事件影響路徑</strong><small>${mode === "exploratory" ? "relationship map" : "containment map"}</small></div>
      <div class="attack-path">
        ${["Identity", "Device", "Service", "Data", "Action"].map((node, index) => `<span class="${index === 3 ? "risk" : index === 4 ? "action" : ""}">${node}</span>`).join("")}
      </div>
    </section>`;
  }

  function renderConsoleSurface(snapshot, mode) {
    return `<section class="signature-surface signature-console signature-mode-${mode}">
      <div class="signature-head"><span>Delivery Work Object</span><strong>部署檢查序列</strong><small>${esc(snapshot.plan.iaPattern)}</small></div>
      <div class="deploy-ledger">
        ${["Change", "Test", "Policy", "Deploy"].map((row, index) => `<div><span>${row}</span><b>${index === 2 ? "Hold" : "Pass"}</b><i style="--level:${58 + index * 10}%"></i></div>`).join("")}
      </div>
    </section>`;
  }

  function renderPlanningCanvasSurface(snapshot, mode, plan) {
    const scale = mode === "exploratory" ? "expanded" : mode === "conservative" ? "compact" : "balanced";
    return `<section class="signature-surface signature-planning-canvas signature-${scale} signature-mode-${mode}">
      <div class="signature-head"><span>Planning Work Object</span><strong>Skill 到 UI 的決策地圖</strong><small>${esc(plan.layoutLabel)}</small></div>
      <div class="planning-map">
        ${["Skill", "Intent", "IA", "Widget", "Preview"].map((node, index) => `
          <button class="planning-node node-${index + 1}" type="button">
            <b>${node}</b><span>${esc(plan.navigation[index] || plan.widgets[index] || "Decision")}</span>
          </button>
        `).join("")}
      </div>
    </section>`;
  }

  window.SkillPlanningLab = {
    ...(window.SkillPlanningLab || {}),
    renderLayout
  };
})();
