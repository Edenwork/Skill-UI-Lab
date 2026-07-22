(() => {
  function esc(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function widgetTitle(key) {
    return {
      "patient-summary": "Patient Summary",
      "drug-card": "Drug Verification",
      timeline: "Workflow Timeline",
      "evidence-panel": "Evidence Panel",
      citation: "Citation Trace",
      "risk-matrix": "Risk Matrix",
      pipeline: "Pipeline",
      "customer-profile": "Customer Profile",
      "activity-feed": "Activity Feed",
      "approval-card": "Approval Card",
      "metrics-strip": "Metrics",
      "ticket-queue": "Ticket Queue",
      conversation: "Conversation",
      "priority-matrix": "Priority Matrix",
      "reply-editor": "Reply Draft",
      "sla-panel": "SLA Panel",
      "audit-ledger": "Audit Ledger",
      "risk-graph": "Risk Graph",
      "policy-table": "Policy Table",
      "deployment-console": "Deployment Console",
      "test-table": "Test Table",
      "log-stream": "Log Stream",
      "skill-reader": "Skill Reader",
      "reference-map": "Reference Map",
      "planning-board": "Planning Board",
      "evaluation-panel": "Evaluation Panel",
      "preview-inspector": "Preview Inspector"
    }[key] || key;
  }

  function renderWidget(key, snapshot, index = 0) {
    const context = snapshot.planningContext;
    const title = widgetTitle(key);
    const domain = esc(context.domainLabel);
    const score = Math.max(64, Math.min(98, snapshot.score - index * 3));
    const data = context.dataTypes[index % context.dataTypes.length] || "Data";

    if (key.includes("timeline")) {
      return `<article class="planned-widget widget-timeline"><div class="widget-head"><span>${title}</span><strong>${domain}</strong></div>
        ${["Context", "Review", "Decision"].map((item, step) => `<div class="timeline-row ${step === 1 ? "active" : ""}"><b>0${step + 1}</b><p>${esc(item)} · ${esc(context.workflow)}</p><small>${step === 2 ? "待確認" : "已建立"}</small></div>`).join("")}</article>`;
    }

    if (key.includes("evidence") || key.includes("citation") || key.includes("reference")) {
      return `<article class="planned-widget widget-evidence"><div class="widget-head"><span>${title}</span><strong>${snapshot.references.length || context.referenceWeight} sources</strong></div>
        <div class="evidence-chain"><span>Skill</span><i></i><span>Prompt</span><i></i><span>Reference</span><i></i><span>UI</span></div>
        <p>${esc(snapshot.plan.reason)}</p></article>`;
    }

    if (key.includes("risk") || key.includes("priority")) {
      return `<article class="planned-widget widget-risk"><div class="widget-head"><span>${title}</span><strong>${esc(context.risk)}</strong></div>
        <div class="risk-cells">${["Data", "Workflow", "Decision", "Source"].map((item, cell) => `<span class="${cell === 1 && context.risk === "high" ? "risk" : ""}">${item}</span>`).join("")}</div>
        <p>${esc(context.mainTask)}</p></article>`;
    }

    if (key.includes("approval")) {
      return `<article class="planned-widget widget-approval"><div class="widget-head"><span>${title}</span><strong>Review Gate</strong></div>
        <div class="approval-actions"><button type="button">需修正</button><button type="button">可採用</button></div>
        <p>${esc(context.primaryUser)} 需確認 ${esc(data)} 後才能進入下一步。</p></article>`;
    }

    if (key.includes("conversation") || key.includes("reply") || key.includes("editor")) {
      return `<article class="planned-widget widget-chat"><div class="widget-head"><span>${title}</span><strong>Draft</strong></div>
        <div class="chat-lines"><span>客戶訊號已整理</span><span>AI 建議回覆草稿</span></div>
        <p>${esc(context.mainTask)}</p></article>`;
    }

    if (key.includes("graph") || key.includes("map") || key.includes("canvas")) {
      return `<article class="planned-widget widget-map"><div class="widget-head"><span>${title}</span><strong>${esc(data)}</strong></div>
        <div class="map-track"><span></span><span class="active"></span><span></span><span class="warn"></span></div>
        <p>${esc(context.reason)}</p></article>`;
    }

    if (key.includes("table") || key.includes("ledger") || key.includes("queue") || key.includes("pipeline")) {
      return `<article class="planned-widget widget-table"><div class="widget-head"><span>${title}</span><strong>${score}%</strong></div>
        ${["待審查", "處理中", "可採用"].map((item, row) => `<div class="table-line"><span>${item}</span><strong>${esc(context.dataTypes[row] || data)}</strong><small>${row === 0 ? "高" : "中"}</small></div>`).join("")}</article>`;
    }

    return `<article class="planned-widget"><div class="widget-head"><span>${title}</span><strong>${score}%</strong></div>
      <p>${esc(context.mainTask)}</p><div class="mini-meter"><i style="width:${score}%"></i></div></article>`;
  }

  window.SkillPlanningLab = {
    ...(window.SkillPlanningLab || {}),
    renderWidget,
    widgetTitle
  };
})();
