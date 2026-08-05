(() => {
  const domainRules = [
    {
      key: "medical",
      label: "醫療照護",
      user: "藥師 / 臨床審查者",
      task: "藥物與照護路徑驗證",
      workflow: "sequential",
      risk: "high",
      density: "high",
      dataTypes: ["Patient", "Drug", "Evidence", "Timeline"],
      match: /medical|clinical|patient|drug|pharmacist|care|hospital|醫療|臨床|病患|病人|藥物|藥師|照護|醫院|健康/i
    },
    {
      key: "crm",
      label: "CRM / 客戶營運",
      user: "客戶成功 / 業務主管",
      task: "商機、客戶與活動追蹤",
      workflow: "queue",
      risk: "medium",
      density: "medium",
      dataTypes: ["Customer", "Deal", "Activity", "SLA"],
      match: /crm|sales|lead|deal|pipeline|customer|客戶|商機|銷售|業務|活動|成交/i
    },
    {
      key: "support",
      label: "客服營運",
      user: "客服主管 / 一線客服",
      task: "工單分流與回覆審查",
      workflow: "queue",
      risk: "medium",
      density: "high",
      dataTypes: ["Ticket", "Conversation", "Priority", "Reply"],
      match: /support|ticket|service|reply|sla|客服|工單|回覆|服務|升級/i
    },
    {
      key: "finance",
      label: "金融風控",
      user: "風控主管 / 稽核人員",
      task: "交易風險、曝險與合規證據審查",
      workflow: "approval",
      risk: "high",
      density: "high",
      dataTypes: ["Transaction", "Exposure", "Rule", "Audit"],
      match: /finance|bank|trading|transaction|revenue|cost|audit|risk|金融|銀行|交易|曝險|營收|成本|稽核|風控/i
    },
    {
      key: "esg",
      label: "ESG / 合規治理",
      user: "永續管理 / 稽核人員",
      task: "揭露資料、證據與核准流程檢查",
      workflow: "approval",
      risk: "high",
      density: "high",
      dataTypes: ["Disclosure", "Evidence", "Approval", "Audit"],
      match: /esg|sustainability|carbon|audit|compliance|永續|碳|稽核|合規|揭露/i
    },
    {
      key: "security",
      label: "安全治理",
      user: "資安分析師",
      task: "事件風險、證據鏈與處置決策",
      workflow: "investigation",
      risk: "high",
      density: "high",
      dataTypes: ["Incident", "Policy", "Evidence", "Asset"],
      match: /security|incident|permission|policy|guardrail|資安|安全|事件|權限|政策|告警/i
    },
    {
      key: "developer",
      label: "開發工具",
      user: "工程主管 / 開發者",
      task: "版本、測試與部署檢查",
      workflow: "inspection",
      risk: "medium",
      density: "medium",
      dataTypes: ["Repo", "Build", "Test", "Deploy"],
      match: /developer|code|repo|deploy|api|sdk|工程|開發|程式|部署|版本|測試/i
    },
    {
      key: "ai-skill",
      label: "AI Skill 規劃",
      user: "Skill Designer",
      task: "Skill、Reference 與生成品質驗證",
      workflow: "orchestration",
      risk: "medium",
      density: "medium",
      dataTypes: ["Skill", "Reference", "Generation", "Evaluation"],
      match: /skill|reference|generation|evaluation|prompt|agent|生成|評估|規則|參考/i
    }
  ];

  function matches(text, pattern) {
    return pattern.test(text || "");
  }

  function extractSignals(text) {
    const signals = [];
    if (/timeline|sequence|step|flow|workflow|歷程|時間線|流程|步驟|路徑/i.test(text)) signals.push("timeline");
    if (/evidence|citation|source|proof|reference|證據|引用|來源|參考/i.test(text)) signals.push("evidence");
    if (/approval|review|verify|核准|審查|驗證|覆核/i.test(text)) signals.push("approval");
    if (/risk|alert|warning|guardrail|風險|警示|告警|控管/i.test(text)) signals.push("risk");
    if (/chat|conversation|reply|assistant|對話|回覆|客服/i.test(text)) signals.push("conversation");
    if (/table|list|record|ledger|表格|清單|紀錄|台帳/i.test(text)) signals.push("table");
    if (/chart|metric|trend|score|圖表|指標|趨勢|分數/i.test(text)) signals.push("metrics");
    if (/editor|compose|draft|編輯|草稿|撰寫/i.test(text)) signals.push("editor");
    if (/graph|dependency|relationship|map|關聯|依賴|地圖|網絡/i.test(text)) signals.push("graph");
    return [...new Set(signals)];
  }

  function analyzeContext({ skillText = "", designText = "", prompt = "", references = [], generationCount = 0 } = {}) {
    const combined = `${skillText}\n${designText}\n${prompt}\n${references.map((item) => item.name || item).join("\n")}`;
    const domain = domainRules.find((rule) => matches(combined, rule.match)) || domainRules[domainRules.length - 1];
    const signals = extractSignals(combined);
    const hasImageReference = references.some((item) => item.type === "image");
    const risk = /high|critical|高風險|稽核|醫療|資安|合規/i.test(combined) ? "high" : domain.risk;
    const density = /compact|dense|table|大量|高密度|表格|緊湊/i.test(combined) ? "high" : domain.density;
    const workflow = signals.includes("timeline")
      ? "sequential"
      : signals.includes("approval")
        ? "approval"
        : signals.includes("graph")
          ? "relationship"
          : domain.workflow;

    return {
      id: `${domain.key}-${generationCount}`,
      domain: domain.key,
      domainLabel: domain.label,
      primaryUser: domain.user,
      mainTask: domain.task,
      workflow,
      risk,
      informationDensity: density,
      interactionMode: workflow === "approval" ? "review" : workflow === "relationship" ? "explore" : domain.workflow,
      dataTypes: [...new Set([...domain.dataTypes, ...signals.map((item) => item[0].toUpperCase() + item.slice(1))])].slice(0, 6),
      signals,
      referenceWeight: references.length + (hasImageReference ? 1 : 0),
      promptLength: prompt.trim().length,
      reason: `依據 Prompt、Skill 規則與 ${references.length} 組 Reference，判讀為 ${domain.label} / ${workflow} 工作流。`
    };
  }

  window.SkillPlanningLab = {
    ...(window.SkillPlanningLab || {}),
    analyzeContext
  };
})();
