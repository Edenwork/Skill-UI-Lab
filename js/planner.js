(() => {
  const innovationTemplates = {
    conservative: {
      layout: "ledger",
      label: "Review Ledger",
      iaPattern: "evidence-ledger",
      description: "先讀證據與規則，再做單一決策的審查台帳。"
    },
    balanced: {
      layout: "split",
      label: "Split Workspace",
      iaPattern: "work-object-detail",
      description: "主工作物件與決策檢查並列的雙欄工作區。"
    },
    exploratory: {
      layout: "canvas",
      label: "Decision Canvas",
      iaPattern: "spatial-decision-map",
      description: "以關係、路徑與影響範圍為主的全幅決策畫布。"
    }
  };

  const widgetRules = {
    medical: ["patient-summary", "drug-card", "timeline", "evidence-panel", "citation", "risk-matrix"],
    crm: ["pipeline", "customer-profile", "activity-feed", "approval-card", "metrics-strip"],
    support: ["ticket-queue", "conversation", "priority-matrix", "reply-editor", "sla-panel"],
    esg: ["evidence-panel", "approval-card", "audit-ledger", "risk-matrix", "citation"],
    security: ["risk-graph", "evidence-panel", "approval-card", "timeline", "policy-table"],
    developer: ["deployment-console", "test-table", "timeline", "approval-card", "log-stream"],
    "ai-skill": ["skill-reader", "reference-map", "planning-board", "evaluation-panel", "preview-inspector"]
  };

  const signalWidgets = {
    timeline: ["timeline"],
    evidence: ["evidence-panel", "citation"],
    approval: ["approval-card"],
    risk: ["risk-matrix"],
    conversation: ["conversation", "reply-editor"],
    table: ["policy-table", "audit-ledger"],
    metrics: ["metrics-strip"],
    editor: ["reply-editor"],
    graph: ["risk-graph", "reference-map"]
  };

  const navigationRules = {
    medical: ["Patient", "Drug", "Evidence", "Citation", "History"],
    crm: ["Pipeline", "Customer", "Deal", "Activity", "AI Assist"],
    support: ["Ticket", "Customer", "Reply", "SLA", "History"],
    esg: ["Disclosure", "Evidence", "Approval", "Audit", "Risk"],
    security: ["Incident", "Policy", "Evidence", "Impact", "Action"],
    developer: ["Repo", "Change", "Test", "Deploy", "Log"],
    "ai-skill": ["Skill", "Reference", "Planning", "Preview", "Evaluation"]
  };

  function rotate(items, offset) {
    if (!items.length) return items;
    const safe = ((offset % items.length) + items.length) % items.length;
    return [...items.slice(safe), ...items.slice(0, safe)];
  }

  function unique(items) {
    return [...new Set(items)].filter(Boolean);
  }

  function planUi(context, { creativity = 52, generationCount = 1 } = {}) {
    const innovationMode = creativity <= 30 ? "conservative" : creativity >= 71 ? "exploratory" : "balanced";
    const template = innovationTemplates[innovationMode];
    const layout = template.layout;
    const signalSelected = context.signals.flatMap((signal) => signalWidgets[signal] || []);
    const widgets = unique([...signalSelected, ...(widgetRules[context.domain] || widgetRules["ai-skill"])]);
    const selectedWidgets = rotate(widgets, generationCount).slice(0, context.informationDensity === "high" ? 5 : 4);
    const iaPattern = template.iaPattern;
    const priority = unique([
      context.risk === "high" ? "risk" : null,
      context.signals.includes("evidence") ? "evidence" : null,
      context.workflow,
      context.dataTypes[0]
    ]).slice(0, 4);

    const decisions = [
      `偵測到 ${context.domainLabel} 情境，因此導航改為 ${navigationRules[context.domain]?.slice(0, 3).join(" / ")}。`,
      `創新度 ${creativity} 對應 ${innovationLabel(innovationMode)}，採用 ${template.label} 版型與 ${iaPattern} IA。`,
      `Workflow 為 ${context.workflow}，${template.description}`,
      selectedWidgets.includes("timeline") ? "Skill / Prompt 出現流程訊號，因此加入 Timeline。": "",
      selectedWidgets.includes("evidence-panel") ? "偵測到 Evidence / Reference 訊號，因此加入 Evidence Panel。": "",
      selectedWidgets.includes("citation") ? "高可信度場景需要來源追溯，因此加入 Citation。": "",
      selectedWidgets.includes("approval-card") ? "偵測到審查或核准需求，因此加入 Approval Card。": "",
      context.risk === "high" ? "風險層級偏高，Preview 會提高風險與決策元件權重。": ""
    ].filter(Boolean);

    return {
      layout,
      layoutLabel: template.label,
      innovationMode,
      innovationLabel: innovationLabel(innovationMode),
      navigation: navigationRules[context.domain] || navigationRules["ai-skill"],
      iaPattern,
      widgets: selectedWidgets,
      priority,
      rejectedLayouts: Object.values(innovationTemplates).filter((item) => item.layout !== layout).map((item) => item.label),
      decisions,
      reason: decisions[1]
    };
  }

  function layoutLabel(layout) {
    return {
      ledger: "Review Ledger",
      workbench: "Workbench",
      split: "Split Workspace",
      console: "Console",
      sidebar: "Sidebar Workspace",
      canvas: "Canvas",
      inspector: "Inspector",
      timeline: "Timeline"
    }[layout] || "Workbench";
  }

  function innovationLabel(mode) {
    return {
      conservative: "保守型",
      balanced: "平衡型",
      exploratory: "探索型"
    }[mode] || "平衡型";
  }

  window.SkillPlanningLab = {
    ...(window.SkillPlanningLab || {}),
    planUi,
    layoutLabel,
    innovationLabel
  };
})();
