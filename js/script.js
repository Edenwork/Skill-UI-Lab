const creativityRange = document.querySelector("#creativityRange");
const creativityValue = document.querySelector("#creativityValue");
const densityRange = document.querySelector("#densityRange");
const densityValue = document.querySelector("#densityValue");
const mobileCreativityRange = document.querySelector("#mobileCreativityRange");
const mobileCreativityValue = document.querySelector("#mobileCreativityValue");
const mobileDensityRange = document.querySelector("#mobileDensityRange");
const mobileDensityValue = document.querySelector("#mobileDensityValue");
const generatedUi = document.querySelector("#generatedUi");
const confidenceValue = document.querySelector("#confidenceValue");
const confidenceNote = document.querySelector("#confidenceNote");
const hitMetric = document.querySelector("#hitMetric");
const qualityMetric = document.querySelector("#qualityMetric");
const riskMetric = document.querySelector("#riskMetric");
const complianceScore = document.querySelector("#complianceScore");
const complianceBar = document.querySelector("#complianceBar");
const evaluationList = document.querySelector("#evaluationList");
const summaryText = document.querySelector("#summaryText");
const generationOverlay = document.querySelector("#generationOverlay");
const generationStep = document.querySelector("#generationStep");
const runButton = document.querySelector("#runButton");
const runTopButton = document.querySelector("#runTopButton");
const skillFile = document.querySelector("#skillFile");
const skillText = document.querySelector("#skillText");
const designFile = document.querySelector("#designFile");
const designText = document.querySelector("#designText");
const designImportState = document.querySelector("#designImportState");
const designSummary = document.querySelector("#designSummary");
const designSummaryMeta = document.querySelector("#designSummaryMeta");
const applyDesignButton = document.querySelector("#applyDesignButton");
const designUpdateState = document.querySelector("#designUpdateState");
const designHelper = document.querySelector("#designHelper");
const designTabs = [...document.querySelectorAll("[data-design-tab]")];
const designViews = [...document.querySelectorAll("[data-design-view]")];
const designUnderstandingGrid = document.querySelector("#designUnderstandingGrid");
const designTokenCount = document.querySelector("#designTokenCount");
const designTokenLedger = document.querySelector("#designTokenLedger");
const designImpactList = document.querySelector("#designImpactList");
const primarySwatch = document.querySelector("#primarySwatch");
const secondarySwatch = document.querySelector("#secondarySwatch");
const canvasSwatch = document.querySelector("#canvasSwatch");
const primaryToken = document.querySelector("#primaryToken");
const secondaryToken = document.querySelector("#secondaryToken");
const canvasToken = document.querySelector("#canvasToken");
const referenceFile = document.querySelector("#referenceFile");
const referenceDrop = document.querySelector("#referenceDrop");
const referenceChoose = document.querySelector("#referenceChoose");
const referenceList = document.querySelector("#referenceList");
const referenceCount = document.querySelector("#referenceCount");
const referenceReady = document.querySelector("#referenceReady");
const referenceConflict = document.querySelector("#referenceConflict");
const referenceInsights = document.querySelector("#referenceInsights");
const previewFrame = document.querySelector("#previewFrame");
const previewWorkbench = document.querySelector("#previewWorkbench");
const toastEl = document.querySelector("#labToast");
const historyList = document.querySelector("#historyList");
const readingState = document.querySelector("#readingState");
const readingSteps = [...document.querySelectorAll(".reading-step")];
const evidenceList = document.querySelector("#evidenceList");
const riskNoteList = document.querySelector("#riskNoteList");
const readingSourceCount = document.querySelector("#readingSourceCount");
const readingRuleCount = document.querySelector("#readingRuleCount");
const readingEvidenceCount = document.querySelector("#readingEvidenceCount");
const readingSummary = document.querySelector("#readingSummary");
const ruleTabs = [...document.querySelectorAll("[data-rule-tab]")];
const ruleViews = [...document.querySelectorAll("[data-rule-view]")];
const skillTabs = [...document.querySelectorAll("[data-skill-tab]")];
const skillViews = [...document.querySelectorAll("[data-skill-view]")];
const skillAiSummary = document.querySelector("#skillAiSummary");
const skillComplexity = document.querySelector("#skillComplexity");
const skillSections = document.querySelector("#skillSections");
const skillRules = document.querySelector("#skillRules");
const skillReferences = document.querySelector("#skillReferences");
const outlineCount = document.querySelector("#outlineCount");
const skillOutlineList = document.querySelector("#skillOutlineList");
const skillWorkflowList = document.querySelector("#skillWorkflowList");
const constraintCount = document.querySelector("#constraintCount");
const skillConstraintList = document.querySelector("#skillConstraintList");
const referenceMentionCount = document.querySelector("#referenceMentionCount");
const skillParsedReferences = document.querySelector("#skillParsedReferences");
const profileRuleCount = document.querySelector("#profileRuleCount");
const profileReferenceCount = document.querySelector("#profileReferenceCount");
const sourceSkillRuleCount = document.querySelector("#sourceSkillRuleCount");
const sourceSkillParseState = document.querySelector("#sourceSkillParseState");
const sourceDesignTokenCount = document.querySelector("#sourceDesignTokenCount");
const sourceDesignParseState = document.querySelector("#sourceDesignParseState");
const sourceReferenceCount = document.querySelector("#sourceReferenceCount");
const sourceReferenceParseState = document.querySelector("#sourceReferenceParseState");
const parsedSummaryState = document.querySelector("#parsedSummaryState");
const parsedStructureCount = document.querySelector("#parsedStructureCount");
const parsedRuleCount = document.querySelector("#parsedRuleCount");
const parsedTokenCount = document.querySelector("#parsedTokenCount");
const parsedReferenceCount = document.querySelector("#parsedReferenceCount");
const parsingWarningList = document.querySelector("#parsingWarningList");
const sourceDetailTitle = document.querySelector("#sourceDetailTitle");
const sourceDetailContent = document.querySelector("#sourceDetailContent");
const sourceOpenButton = document.querySelector("#sourceOpenButton");
const sourceDetailTabs = [...document.querySelectorAll("[data-source-detail-tab]")];
const sourceFileItems = [...document.querySelectorAll("[data-source-key]")];
const topImportStatus = document.querySelector("#topImportStatus");
const topParseStatus = document.querySelector("#topParseStatus");
const topApplyStatus = document.querySelector("#topApplyStatus");
const topApplyCount = document.querySelector("#topApplyCount");
const topIssueCount = document.querySelector("#topIssueCount");
const importVerificationText = document.querySelector("#importVerificationText");
const parseVerificationText = document.querySelector("#parseVerificationText");
const applyVerificationText = document.querySelector("#applyVerificationText");
const parsingCoverageMetric = document.querySelector("#parsingCoverageMetric");
const applicationCoverageMetric = document.querySelector("#applicationCoverageMetric");
const previewComplianceMetric = document.querySelector("#previewComplianceMetric");
const verificationFlowSummary = document.querySelector("#verificationFlowSummary");
const verificationFlowSteps = document.querySelector("#verificationFlowSteps");
const verificationFlowDetail = document.querySelector("#verificationFlowDetail");
const inspectorTabs = [...document.querySelectorAll("[data-inspector-tab]")];
const inspectorViews = [...document.querySelectorAll("[data-inspector-view]")];
const inspectorEvidenceList = document.querySelector("#inspectorEvidenceList");
const inspectorIssueList = document.querySelector("#inspectorIssueList");
const testPrompt = document.querySelector("#testPrompt");
const promptShortcutButtons = [...document.querySelectorAll("[data-prompt-template]")];
const trySkillStatus = document.querySelector("#trySkillStatus");
const mockReadResult = document.querySelector("#mockReadResult");
const mockOutputResult = document.querySelector("#mockOutputResult");
const mockScoreResult = document.querySelector("#mockScoreResult");
const traceMap = document.querySelector("#traceMap");
const copyReportButton = document.querySelector("#copyReportButton");
const exportReportButton = document.querySelector("#exportReportButton");
const reportSummaryGrid = document.querySelector("#reportSummaryGrid");
const ruleHitSummary = document.querySelector("#ruleHitSummary");
const ruleHitList = document.querySelector("#ruleHitList");
const scoreBreakdownSummary = document.querySelector("#scoreBreakdownSummary");
const scoreBreakdownList = document.querySelector("#scoreBreakdownList");
const recommendationSummary = document.querySelector("#recommendationSummary");
const recommendationList = document.querySelector("#recommendationList");
const managementScore = document.querySelector("#managementScore");
const generationScore = document.querySelector("#generationScore");
const traceScore = document.querySelector("#traceScore");
const skillRunNote = document.querySelector("#skillRunNote");

let generationCount = 0;
let activeGenerationId = null;
let currentSnapshot = null;
let activeDesignTokens = {
  primary: "#111111",
  secondary: "#23237B",
  canvas: "#F9FBFF",
  radius: 8,
  density: "compact"
};
let designApplyCount = 0;
let appliedDesignText = designText?.value || "";
let activeSourceKey = "skill";
let activeSourceDetailTab = "raw";
let activeVerificationStep = "apply";
const generationHistory = [];
const referenceImages = new Map();

const promptTemplates = {
  medical: "建立一個醫療照護 AI agent 工作台，讓藥師審查病患用藥、交互作用、臨床證據與覆核決策，需呈現高風險警示、照護路徑與證據引用。",
  security: "建立一個資安事件調查 AI agent 工作台，讓資安分析師追蹤事件影響路徑、資產風險、政策命中與處置決策，需呈現證據鏈與告警優先級。",
  finance: "建立一個金融風控 AI agent 工作台，讓風控主管審查交易異常、曝險比對、稽核證據與核准條件，需符合高密度後台、風險矩陣與合規追溯。",
  support: "建立一個客服營運 AI agent 工作台，讓客服主管管理工單分流、SLA 風險、對話摘要與 AI 回覆草稿，需保留佇列、優先級與回覆審查。"
};

const uiVariants = [
  {
    key: "pipeline",
    name: "生成 Pipeline",
    className: "variant-pipeline",
    title: "任務執行監控台",
    label: "AgentOps",
    nodes: ["讀取 Skill", "生成 UI", "規則檢查", "版本封存"],
    tasks: ["產生 AI agent dashboard", "套用 DESIGN.md tokens", "輸出檢查報告"],
    summary: "此版本以生成流程為核心，讓使用者先理解 Skill、Reference、Prompt 如何轉換成 UI 預覽。"
  },
  {
    key: "matrix",
    name: "規則命中矩陣",
    className: "variant-matrix",
    title: "Skill 規則審查台",
    label: "RuleGrid",
    nodes: ["語言規則", "版型規則", "元件規則", "風險規則"],
    tasks: ["檢查台灣繁中用語", "比對後台 UI 規範", "標示創新度偏移"],
    summary: "此版本把規則命中放到畫面中央，適合檢查 Skill 是否穩定約束 AI 輸出。"
  },
  {
    key: "radar",
    name: "風險雷達",
    className: "variant-radar",
    title: "UI 偏移風險雷達",
    label: "RiskScope",
    nodes: ["規範", "創意", "可讀性", "一致性"],
    tasks: ["定位高風險區塊", "評估創意幅度", "回推 Prompt 調整"],
    summary: "此版本強調創意與規範之間的張力，適合高創新度生成後進行快速風險判讀。"
  },
  {
    key: "review",
    name: "審查佇列",
    className: "variant-review",
    title: "生成版本審查佇列",
    label: "ReviewDesk",
    nodes: ["待審查", "需修正", "可採用", "已封存"],
    tasks: ["比較不同 UI 版本", "回復歷史生成", "建立評估摘要"],
    summary: "此版本把生成結果視為審查物件，適合連續產生多個方向後比較與回看。"
  }
];

const evaluationModes = {
  conservative: {
    title: "保守模式：規則優先",
    confidence: "92%",
    note: "遵守 Skill 規則，版型穩定但探索性較低。",
    hit: "14/14",
    quality: "8.1",
    risk: "極低",
    score: 96,
    summary: "此版本採用標準分割工作台，重點在穩定執行 skill 規則、清楚呈現任務狀態與操作序列。",
    items: [
      ["ok", "台灣繁中命中", "介面標籤、說明與評估文字皆使用台灣繁中。"],
      ["ok", "企業後台密度", "資訊排列緊湊，適合反覆掃描與操作。"],
      ["warn", "創意不足", "版型接近標準 dashboard，較不容易形成產品記憶點。"]
    ]
  },
  balanced: {
    title: "平衡模式：規範內探索",
    confidence: "86%",
    note: "規則穩定，創意與規範保持平衡。",
    hit: "12/14",
    quality: "8.8",
    risk: "低",
    score: 93,
    summary: "此版本採用分割式工作台，保留足夠操作密度，並用流程節點呈現 Skill 到 UI 的生成關係。",
    items: [
      ["ok", "Skill 流程可視化", "中間流程節點讓生成、檢查、輸出關係更明確。"],
      ["ok", "DESIGN.md 已納入", "主色、圓角與密度設定有反映在預覽中。"],
      ["ok", "Reference 證據可追溯", "每個參考來源皆對應至畫面決策與風險判讀。"]
    ]
  },
  exploratory: {
    title: "探索模式：高創新輸出",
    confidence: "74%",
    note: "版型更有識別度，但有偏離部分規則的可能。",
    hit: "9/14",
    quality: "8.9",
    risk: "中",
    score: 78,
    summary: "此版本放大生成流程圖與評估儀表，適合探索 signature interaction，但需回頭檢查是否仍符合 Skill 限制。",
    items: [
      ["ok", "產品識別較強", "預覽更像一個 Skill 實驗工具，而不是通用 dashboard。"],
      ["warn", "規範自由度提高", "部分視覺比例與動線可能需要人工審核。"],
      ["risk", "潛在偏移", "高創新度可能讓 UI 過度關注展示，而忽略實際操作效率。"]
    ]
  }
};

const domainProfiles = [
  {
    key: "medical",
    match: /medical|clinical|patient|care|health|hospital|醫療|臨床|病患|照護|醫院|健康/i,
    label: "CareOps",
    title: "臨床任務協作台",
    domain: "醫療照護",
    nodes: ["病患摘要", "照護路徑", "風險提醒", "交班紀錄"],
    tasks: ["彙整病患照護狀態", "標示高風險事件", "輸出交班與追蹤建議"],
    summary: "此版本把 Skill 轉成照護路徑與風險節點，讓 AI 生成結果更像臨床工作流檢視，而不是一般 dashboard。",
    recommendation: "補上病患資料欄位、交班規則與高風險警示範例，可讓 demo 更貼近醫療工作情境。"
  },
  {
    key: "finance",
    match: /finance|bank|risk|trading|revenue|cost|audit|金融|銀行|交易|營收|成本|稽核|風控/i,
    label: "FinScope",
    title: "風控決策監控台",
    domain: "金融風控",
    nodes: ["交易訊號", "風險分層", "稽核證據", "決策建議"],
    tasks: ["比對交易與風險規則", "整理稽核證據鏈", "輸出風控處置建議"],
    summary: "此版本把生成結果導向風控判讀與證據鏈，讓分數與規則命中更像金融場景的合規審查。",
    recommendation: "補上交易類型、風險門檻與稽核輸出格式，可讓報告更有決策力。"
  },
  {
    key: "support",
    match: /support|ticket|customer|service|cs|客服|工單|客戶|服務|回覆/i,
    label: "SupportDesk",
    title: "客服工單處理台",
    domain: "客服營運",
    nodes: ["工單分類", "意圖判讀", "回覆草稿", "滿意度追蹤"],
    tasks: ["整理客戶問題意圖", "產生回覆與升級建議", "追蹤 SLA 與滿意度"],
    summary: "此版本把 Skill 轉成工單處理與回覆品質檢查，預覽會更偏向客服隊列與處理效率。",
    recommendation: "補上工單狀態、SLA 規則與回覆語氣範例，可讓 Try Skill 更有差異。"
  },
  {
    key: "developer",
    match: /developer|code|api|sdk|repo|deploy|log|工程|開發|程式|部署|日誌|版本/i,
    label: "DevFlow",
    title: "開發流程審查台",
    domain: "開發工具",
    nodes: ["需求解析", "程式變更", "測試狀態", "部署檢查"],
    tasks: ["追蹤程式變更脈絡", "檢查測試與部署條件", "輸出工程審查摘要"],
    summary: "此版本把生成方向拉到工程審查與部署流程，適合展示 skill 如何管理開發者工具 UI。",
    recommendation: "補上 repo 規則、測試標準與部署 gate，可讓合規報告更接近工程實務。"
  },
  {
    key: "security",
    match: /security|permission|policy|guardrail|incident|安全|權限|資安|政策|事件|告警/i,
    label: "GuardOps",
    title: "安全政策檢查台",
    domain: "安全治理",
    nodes: ["政策讀取", "權限比對", "告警分級", "處置紀錄"],
    tasks: ["比對權限與政策規則", "標示安全事件風險", "輸出處置與審計摘要"],
    summary: "此版本把 UI 生成轉成安全政策與風險處置檢查，讓 Compliance Report 更有治理感。",
    recommendation: "補上權限矩陣、事件分級與審計輸出格式，可提高規則追溯可信度。"
  },
  {
    key: "marketing",
    match: /marketing campaign|campaign dashboard|landing page|brand guide|hero section|conversion|行銷活動|活動頁|品牌行銷|品牌首頁|轉換率/i,
    label: "BrandLab",
    title: "內容活動審查台",
    domain: "內容行銷",
    nodes: ["受眾意圖", "品牌語氣", "內容區塊", "轉換檢查"],
    tasks: ["整理活動訴求與受眾", "檢查品牌語氣一致性", "輸出內容版型建議"],
    summary: "此版本偵測到行銷傾向，因此預覽會轉為內容審查台，並標示與企業工具定位的偏移風險。",
    recommendation: "若 Sprint 3 仍以管理工具為主，建議把行銷需求改成內容審查或活動管理後台。"
  }
];

const fallbackDomain = {
  key: "operations",
  label: "AgentOps",
  title: "任務執行監控台",
  domain: "AI 營運管理",
  nodes: ["讀取 Skill", "生成 UI", "規則檢查", "版本封存"],
  tasks: ["產生 AI agent dashboard", "套用 DESIGN.md tokens", "輸出檢查報告"],
  summary: "此版本以生成流程為核心，讓使用者先理解 Skill、Reference、Prompt 如何轉換成 UI 預覽。",
  recommendation: "補上更明確的使用者角色、資料種類與主要決策，預覽會產生更鮮明的差異。"
};

function modeFromValue(value) {
  if (value <= 30) return "conservative";
  if (value >= 71) return "exploratory";
  return "balanced";
}

function densityFromValue(value) {
  if (value <= 30) return ["density-compact", "緊湊"];
  if (value >= 71) return ["density-comfortable", "寬鬆"];
  return ["density-standard", "標準"];
}

function currentContextProfile() {
  const source = `${skillText.value}\n${designText.value}\n${testPrompt.value}`;
  const skill = parseSkillContext(skillText.value);
  const design = parseDesignUnderstanding(designText.value);
  const matched = domainProfiles.find((profile) => profile.match.test(source)) || fallbackDomain;
  const creativity = Number(creativityRange.value);
  const designSignals = design.cards.filter((card) => !/預設|基本/.test(card.title)).length;
  const ruleDensity = skill.bullets.length >= 10 ? "規則密集" : skill.bullets.length >= 5 ? "規則適中" : "規則偏少";
  const innovation = creativity >= 71 ? "探索型" : creativity <= 30 ? "保守型" : "平衡型";

  return {
    ...matched,
    skill,
    design,
    source,
    ruleDensity,
    innovation,
    designSignals,
    hasCustomSkill: !/company-design|AI agent dashboard/i.test(skillText.value) || matched.key !== "operations",
    hasCustomDesign: !/Eden Skill Lab|Quiet design studio/i.test(designText.value) || designSignals >= 3
  };
}

function contentHash(value) {
  return [...String(value)].reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 0);
}

function rotateItems(items, offset) {
  if (!items.length) return items;
  const safeOffset = ((offset % items.length) + items.length) % items.length;
  return [...items.slice(safeOffset), ...items.slice(0, safeOffset)];
}

function contextSeed(context, seed = generationCount) {
  return Math.abs(contentHash(`${context.key}:${context.source}`)) + seed;
}

const templateRoutes = {
  operations: {
    layouts: ["balanced", "matrix", "review", "radar", "conservative", "exploratory"],
    variants: [0, 1, 3, 2],
    labels: ["Flow Map", "Rule Matrix", "Review Queue", "Risk Radar", "Ops Table", "Canvas Map"]
  },
  medical: {
    layouts: ["review", "balanced", "radar", "matrix", "conservative", "exploratory"],
    variants: [3, 0, 2, 1],
    labels: ["Care Queue", "Care Flow", "Risk Radar", "Rule Matrix", "Shift Table", "Canvas Map"]
  },
  finance: {
    layouts: ["matrix", "radar", "review", "balanced", "conservative", "exploratory"],
    variants: [1, 2, 3, 0],
    labels: ["Rule Matrix", "Risk Radar", "Review Queue", "Flow Map", "Ops Table", "Canvas Map"]
  },
  support: {
    layouts: ["review", "conservative", "balanced", "matrix", "radar", "exploratory"],
    variants: [3, 0, 1, 2],
    labels: ["Ticket Queue", "SLA Table", "Intent Flow", "Reply Matrix", "Risk Radar", "Canvas Map"]
  },
  developer: {
    layouts: ["balanced", "review", "matrix", "exploratory", "radar", "conservative"],
    variants: [0, 3, 1, 2],
    labels: ["Dev Flow", "Review Queue", "Gate Matrix", "Canvas Map", "Risk Radar", "Ops Table"]
  },
  security: {
    layouts: ["radar", "matrix", "review", "balanced", "conservative", "exploratory"],
    variants: [2, 1, 3, 0],
    labels: ["Risk Radar", "Policy Matrix", "Incident Queue", "Audit Flow", "Ops Table", "Canvas Map"]
  },
  marketing: {
    layouts: ["radar", "matrix", "balanced", "review", "exploratory", "conservative"],
    variants: [2, 1, 0, 3],
    labels: ["Risk Radar", "Brand Matrix", "Content Flow", "Review Queue", "Canvas Map", "Ops Table"]
  }
};

function routeForContext(context) {
  return templateRoutes[context.key] || templateRoutes.operations;
}

function modeRouteOffset(modeKey) {
  return { conservative: 0, balanced: 1, exploratory: 2 }[modeKey] || 0;
}

function generationStepFor(seed = generationCount) {
  return Math.max(0, Number(seed) || 0);
}

function variationIndexFor(context, modeKey, seed = generationCount) {
  const route = routeForContext(context);
  const stableContentOffset = Math.abs(contentHash(`${context.key}:${context.domain}`)) % route.layouts.length;
  return (stableContentOffset + generationStepFor(seed) + modeRouteOffset(modeKey)) % route.layouts.length;
}

function variantIndexFor(context, modeKey, seed = generationCount) {
  const route = routeForContext(context);
  return variationIndexFor(context, modeKey, seed) % route.variants.length;
}

function routeLabelFor(context, modeKey, seed = generationCount) {
  const route = routeForContext(context);
  return route.labels[variationIndexFor(context, modeKey, seed)] || templateName(route.layouts[0]);
}

function templateName(layoutKey) {
  const names = {
    conservative: "Ops Table",
    balanced: "Flow Map",
    matrix: "Rule Matrix",
    review: "Review Queue",
    exploratory: "Canvas Map",
    radar: "Risk Radar"
  };
  return names[layoutKey] || "Preview";
}

function adaptVariantToContext(baseVariant, context, modeKey) {
  const labelSuffix = modeKey === "exploratory" ? " Explore" : modeKey === "conservative" ? " Stable" : "";
  return {
    ...baseVariant,
    name: context.domain,
    title: context.title,
    label: `${context.label}${labelSuffix}`,
    nodes: context.nodes,
    tasks: context.tasks,
    summary: context.summary
  };
}

function contextScoreAdjustment(context) {
  let adjustment = 0;
  if (context.hasCustomSkill) adjustment += 3;
  if (context.hasCustomDesign) adjustment += 2;
  if (context.skill.bullets.length <= 2) adjustment -= 8;
  if (context.key === "marketing") adjustment -= 8;
  if (context.designSignals >= 4) adjustment += 2;
  return adjustment;
}

function parseDesignTokens(text) {
  const readHex = (key, fallback) => {
    const pattern = new RegExp(`(?:${key})\\s*:\\s*["']?(#[0-9a-fA-F]{3,6})["']?`, "i");
    return text.match(pattern)?.[1] || fallback;
  };
  const radiusMatch = text.match(/card\s*:\s*([0-9]{1,2})px/i);
  const densityMatch = text.match(/density\s*:\s*(compact|standard|comfortable)/i);

  return {
    primary: readHex("primary", activeDesignTokens.primary),
    secondary: readHex("secondary", activeDesignTokens.secondary),
    canvas: readHex("canvas|content|background", activeDesignTokens.canvas),
    radius: radiusMatch ? Math.max(4, Math.min(16, Number(radiusMatch[1]))) : activeDesignTokens.radius,
    density: densityMatch ? densityMatch[1].toLowerCase() : activeDesignTokens.density
  };
}

function parseDesignPresentation(text, tokens = parseDesignTokens(text)) {
  const source = text.toLowerCase();
  const matches = (pattern) => pattern.test(source);
  let key = "flow";

  if (matches(/audit|ledger|table|review|dense|稽核|台帳|表格|審查|高密度/)) key = "ledger";
  if (matches(/command|control|monitor|console|dark|控制|監控|指揮|控制台|深色/)) key = "command";
  if (matches(/canvas workspace|spatial canvas|spatial|map|experimental|creative|studio|畫布|空間|探索|創意|實驗/)) key = "studio";
  if (matches(/flow|path|stage|journey|pipeline|流程|路徑|階段|旅程/)) key = "flow";

  if (!matches(/canvas workspace|spatial canvas|spatial|map|experimental|creative|studio|畫布|空間|探索|創意|實驗|audit|ledger|table|review|dense|稽核|台帳|表格|審查|高密度|command|control|monitor|console|dark|控制|監控|指揮|控制台|深色|flow|path|stage|journey|pipeline|流程|路徑|階段|旅程/)) {
    key = tokens.density === "comfortable" ? "studio" : tokens.density === "compact" ? "ledger" : "flow";
  }

  const profiles = {
    flow: { label: "流程導向", note: "以連續階段、狀態轉換與決策節點建立閱讀路徑。" },
    ledger: { label: "審查台帳", note: "提高資訊密度，強調規則、證據與覆核順序。" },
    studio: { label: "設計工作室", note: "放大主要工作物件，使用更開放的節奏呈現探索關係。" },
    command: { label: "控制中心", note: "以高對比狀態面與監控訊號凸顯即時決策。" }
  };

  return { key, ...profiles[key] };
}

function parseDesignSummary(text) {
  const tokens = parseDesignTokens(text);
  const name = text.match(/^name\s*:\s*["']?([^\n"']+)/im)?.[1]?.trim();
  const proseLines = text
    .replace(/^---[\s\S]*?---/m, "")
    .split(/\r?\n/)
    .map((line) => line.replace(/^#+\s+|^[-*]\s+/, "").trim())
    .filter((line) => line && !/^[\w.-]+\s*:/.test(line));
  const colorCount = new Set(text.match(/#[0-9a-fA-F]{3,6}\b/g) || []).size;
  const detectedGroups = [
    colorCount ? `${colorCount} 組色彩` : null,
    `${tokens.radius}px 圓角`,
    `${tokens.density} 密度`
  ].filter(Boolean);

  return {
    summary: proseLines[0] || (name ? `${name} 的設計規則與介面方向。` : "已讀取設計設定，等待補上用途或視覺方向說明。"),
    meta: detectedGroups.join(" / ")
  };
}

function parseDesignUnderstanding(text) {
  const tokens = parseDesignTokens(text);
  const hexValues = [...new Set(text.match(/#[0-9a-fA-F]{3,6}\b/g) || [tokens.primary, tokens.secondary, tokens.canvas])];
  const hasTypography = /font|type|typography|Noto|Roboto|字體|文字|行高/i.test(text);
  const hasSpacing = /spacing|space|gap|padding|margin|密度|間距|留白/i.test(text);
  const hasComponents = /button|card|panel|table|modal|toast|sidebar|元件|卡片|面板|按鈕|表格/i.test(text);
  const hasInteraction = /hover|focus|active|selected|disabled|state|互動|狀態|滑桿|切換/i.test(text);
  const densityLabel = tokens.density === "compact" ? "緊湊" : tokens.density === "comfortable" ? "寬鬆" : "標準";
  const radiusLabel = tokens.radius <= 8 ? "企業工具小圓角" : tokens.radius >= 13 ? "較柔和圓角" : "中性圓角";
  const summary = parseDesignSummary(text);

  return {
    summary,
    tokens,
    cards: [
      {
        label: "Color",
        title: `${hexValues.length} 組色彩訊號`,
        body: `主色 ${tokens.primary}，強調色 ${tokens.secondary}，畫布 ${tokens.canvas}。`,
        meta: hexValues.slice(0, 4)
      },
      {
        label: "Typography",
        title: hasTypography ? "已偵測字體規則" : "使用系統預設字體",
        body: hasTypography ? "文字規則會影響標題層級、長文可讀性與數字呈現。" : "Demo 先以 Noto Sans TC 與系統字體維持台灣繁中可讀性。",
        meta: ["Noto Sans TC", "Readable"]
      },
      {
        label: "Spacing",
        title: `${densityLabel}密度`,
        body: hasSpacing ? "間距描述會同步到預覽密度與工作台資訊量。" : "目前依 density token 調整操作密度。",
        meta: [tokens.density, "4/8/12 rhythm"]
      },
      {
        label: "Radius",
        title: radiusLabel,
        body: `卡片與面板圓角套用 ${tokens.radius}px，讓預覽保持管理工具的俐落感。`,
        meta: [`${tokens.radius}px`]
      },
      {
        label: "Components",
        title: hasComponents ? "已偵測元件語彙" : "套用基本工作台元件",
        body: hasComponents ? "按鈕、卡片、面板或表格等描述會進入 UI 生成判讀。" : "預設以工作台、指標、流程節點與審查面板呈現。",
        meta: hasComponents ? ["Controls", "Panels"] : ["Workspace", "Metrics"]
      },
      {
        label: "Interaction",
        title: hasInteraction ? "已偵測互動狀態" : "保留基本狀態",
        body: hasInteraction ? "互動規則會影響 hover、focus、selected 與生成控制回饋。" : "Demo 先保留可操作、可掃描、狀態清楚的預設互動。",
        meta: hasInteraction ? ["Focus", "Selected"] : ["Default", "Active"]
      }
    ],
    impacts: [
      `Preview 主色會改為 ${tokens.primary}，強調色會改為 ${tokens.secondary}。`,
      `生成面板圓角會套用 ${tokens.radius}px，避免與設計規則不一致。`,
      `版面密度會切到「${densityLabel}」，影響指標、流程與摘要間距。`,
      hasComponents ? "偵測到元件規則，生成摘要會偏向可操作工作台。" : "未偵測明確元件規則，先使用 Skill UI Lab 預設工作台結構。"
    ]
  };
}

function renderDesignAiView() {
  const parsed = parseDesignUnderstanding(designText.value);
  designUnderstandingGrid.innerHTML = parsed.cards
    .map((card) => `
      <article class="design-understanding-card">
        <span>${card.label}</span>
        <strong>${escapeHtml(card.title)}</strong>
        <p>${escapeHtml(card.body)}</p>
        <div>${card.meta.map((item) => `<small>${escapeHtml(item)}</small>`).join("")}</div>
      </article>
    `)
    .join("");
  const ledger = [
    ["Primary", parsed.tokens.primary],
    ["Sovereign", parsed.tokens.secondary],
    ["Canvas", parsed.tokens.canvas],
    ["Radius", `${parsed.tokens.radius}px`],
    ["Density", parsed.tokens.density]
  ];
  designTokenCount.textContent = `${ledger.length} signals`;
  designTokenLedger.innerHTML = ledger
    .map(([label, value]) => `<article><span>${label}</span><strong>${escapeHtml(value)}</strong></article>`)
    .join("");
  designImpactList.innerHTML = parsed.impacts
    .map((item, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><p>${escapeHtml(item)}</p></article>`)
    .join("");
}

function renderDesignSummary() {
  const parsed = parseDesignSummary(designText.value);
  designSummary.textContent = parsed.summary;
  designSummaryMeta.textContent = parsed.meta;
  renderDesignAiView();
}

function applyDesignTokens(tokens, options = {}) {
  activeDesignTokens = tokens;
  syncPreviewTokenVars(tokens);
  previewFrame.classList.add("design-live");

  primarySwatch.style.setProperty("--swatch", tokens.primary);
  secondarySwatch.style.setProperty("--swatch", tokens.secondary);
  canvasSwatch.style.setProperty("--swatch", tokens.canvas);
  primaryToken.textContent = tokens.primary;
  secondaryToken.textContent = tokens.secondary;
  canvasToken.textContent = tokens.canvas;

  const densityValues = { compact: 18, standard: 52, comfortable: 82 };
  if (densityValues[tokens.density] !== undefined) {
    densityRange.value = densityValues[tokens.density];
    renderDensity();
  }

  designUpdateState.textContent = options.initial ? "已套用預設值" : "已更新預覽";
  designHelper.textContent = `目前套用：主色 ${tokens.primary}、強調色 ${tokens.secondary}、圓角 ${tokens.radius}px、密度 ${tokens.density}。`;
  if (options.refresh) refreshPreviewFromControls();
}

function syncPreviewTokenVars(tokens = activeDesignTokens) {
  const targets = [
    generatedUi,
    previewFrame,
    ...generatedUi.querySelectorAll(".planned-preview-shell")
  ].filter(Boolean);
  targets.forEach((target) => {
    target.style.setProperty("--preview-primary", tokens.primary);
    target.style.setProperty("--preview-secondary", tokens.secondary);
    target.style.setProperty("--preview-canvas", tokens.canvas);
    target.style.setProperty("--preview-radius", `${tokens.radius}px`);
  });
}

function applyDesignPreviewUpdate() {
  appliedDesignText = designText.value;
  const tokens = parseDesignTokens(appliedDesignText);
  designApplyCount += 1;
  renderDesignSummary();
  applyDesignTokens(tokens, { refresh: false });

  const modeKey = modeFromValue(Number(creativityRange.value));
  const snapshot = buildSnapshot(chooseVariant(modeKey), modeKey, {
    id: Date.now(),
    seed: generationCount
  });
  renderEvaluation(modeKey);
  applySnapshot(snapshot);
  renderDensity();
  previewFrame.classList.remove("design-refreshing");
  void previewFrame.offsetWidth;
  previewFrame.classList.add("design-refreshing");
  window.setTimeout(() => previewFrame.classList.remove("design-refreshing"), 520);

  if (designImportState) designImportState.textContent = "設計內容已套用至目前預覽。";
  if (designUpdateState) designUpdateState.textContent = `已依 DESIGN.md 重建預覽 v${designApplyCount}`;
}

function parseSkillContext(text) {
  const lines = text.split(/\r?\n/);
  const headings = lines
    .filter((line) => /^#{1,3}\s+/.test(line.trim()))
    .map((line) => line.replace(/^#{1,3}\s+/, "").trim())
    .filter(Boolean);
  const bullets = lines
    .filter((line) => /^\s*[-*]\s+/.test(line))
    .map((line) => line.replace(/^\s*[-*]\s+/, "").trim())
    .filter(Boolean);
  const references = [...text.matchAll(/\((references\/[^)]+)\)|\b([\w-]+\.md)\b/g)]
    .map((match) => match[1] || match[2])
    .filter((item, index, list) => item && list.indexOf(item) === index);
  const description = text.match(/description:\s*(.+)/i)?.[1]?.replace(/^["']|["']$/g, "").trim();
  const workflowStart = headings.findIndex((heading) => /workflow|流程/i.test(heading));
  const workflowItems = workflowStart >= 0 ? bullets.slice(0, 5) : bullets.slice(0, 5);
  const constraints = bullets
    .filter((item) => /do not|never|always|must|avoid|使用|避免|必須|不要|需/i.test(item))
    .slice(0, 6);
  const complexity = bullets.length >= 18 || headings.length >= 10 ? "Ultra" : bullets.length >= 9 || headings.length >= 5 ? "High" : "Medium";
  const sections = [];
  let currentSection = null;
  lines.forEach((line) => {
    const headingMatch = line.trim().match(/^#{1,3}\s+(.+)/);
    if (headingMatch) {
      currentSection = { heading: headingMatch[1].trim(), items: [] };
      sections.push(currentSection);
      return;
    }
    const bulletMatch = line.match(/^\s*[-*]\s+(.+)/);
    if (bulletMatch && currentSection) currentSection.items.push(bulletMatch[1].trim());
  });

  return {
    summary: description || bullets[0] || "尚未取得明確 summary，請補上 description 或第一段用途說明。",
    headings: headings.length ? headings : ["Workflow"],
    bullets,
    references,
    workflowItems: workflowItems.length ? workflowItems : ["Inspect context", "Map rules", "Generate UI", "Validate output"],
    constraints: constraints.length ? constraints : bullets.slice(0, 4),
    sections,
    complexity
  };
}

function renderSkillAiView() {
  const parsed = parseSkillContext(skillText.value);
  skillAiSummary.textContent = parsed.summary;
  skillComplexity.textContent = parsed.complexity;
  skillSections.textContent = parsed.headings.length;
  skillRules.textContent = parsed.bullets.length;
  skillReferences.textContent = parsed.references.length;
  outlineCount.textContent = `${parsed.headings.length} sections`;
  constraintCount.textContent = `${parsed.constraints.length} rules`;
  referenceMentionCount.textContent = `${parsed.references.length} files`;
  profileRuleCount.textContent = `${Math.max(parsed.bullets.length, 1)} 條`;

  skillOutlineList.innerHTML = parsed.headings
    .slice(0, 8)
    .map((heading, index) => {
      const section = parsed.sections.find((item) => item.heading === heading);
      const items = section?.items || [];
      return `<div class="outline-item">
        <button type="button" aria-expanded="false" aria-controls="outline-detail-${index}" data-outline-toggle="${index}">
          <span></span><b>${escapeHtml(heading)}</b><small>${items.length} items</small>
        </button>
        <div class="outline-detail" id="outline-detail-${index}" hidden>${items.length
          ? items.map((item) => `<p>${escapeHtml(item)}</p>`).join("")
          : "<p>此段落目前沒有條列內容。</p>"}</div>
      </div>`;
    })
    .join("");

  skillWorkflowList.innerHTML = parsed.workflowItems
    .slice(0, 5)
    .map((item, index) => `
      <article>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${workflowLabel(item, index)}</strong>
      </article>
    `)
    .join("");

  skillConstraintList.innerHTML = parsed.constraints
    .slice(0, 6)
    .map((item) => `<article><span></span><p>${item}</p></article>`)
    .join("");

  skillParsedReferences.innerHTML = parsed.references.length
    ? parsed.references.slice(0, 8).map((item) => `<button type="button">${item}</button>`).join("")
    : '<div class="parsed-empty">尚未偵測到 reference 檔案。</div>';
  updateVerificationStatus();
}

function parseVerificationWarnings(skill, design, active) {
  const warnings = [];
  if (!skillText.value.trim()) warnings.push(["SKILL.md", "尚未載入內容，無法抽取規則。"]);
  if (!designText.value.trim()) warnings.push(["DESIGN.md", "尚未載入內容，無法抽取設計 tokens。"]);
  if (skill.bullets.length === 0) warnings.push(["Rules", "未偵測到條列規則，Parsed View 只能顯示文件結構。"]);
  if (skill.headings.length <= 1 && !/^#\s+/m.test(skillText.value)) warnings.push(["Structure", "文件標題層級不足，建議補上 Workflow、Rules 或 References。"]);
  if (design.cards.filter((card) => !/預設|基本/.test(card.title)).length < 3) warnings.push(["Tokens", "DESIGN.md 可解析 token 偏少，Preview 套用證據會較弱。"]);
  if (active.length === 0) warnings.push(["References", "尚未選取 reference，證據來源只剩 SKILL.md 與 DESIGN.md。"]);
  return warnings.slice(0, 4);
}

function markdownLineItems(text) {
  let inFrontmatter = false;
  return text.split(/\r?\n/).map((line, index) => {
    const trimmed = line.trim();
    if (index === 0 && trimmed === "---") inFrontmatter = true;
    const item = {
      line: index + 1,
      raw: line,
      text: trimmed,
      kind: "unrecognized",
      section: "Root"
    };
    if (!trimmed) item.kind = "blank";
    else if (trimmed === "---") item.kind = "frontmatter";
    else if (inFrontmatter && /^[\w.-]+\s*:/.test(trimmed)) item.kind = "metadata";
    else if (/^#{1,6}\s+/.test(trimmed)) item.kind = "heading";
    else if (/^[-*]\s+/.test(trimmed)) item.kind = "rule";
    else if (/^\|.+\|$/.test(trimmed)) item.kind = "table";
    else if (/^```/.test(trimmed)) item.kind = "code";
    else if (/^\[.+\]\(.+\)/.test(trimmed) || /\((references\/[^)]+)\)/.test(trimmed)) item.kind = "reference";
    else if (/^[A-Z0-9_-]+:/i.test(trimmed)) item.kind = "property";
    if (index > 0 && trimmed === "---") inFrontmatter = false;
    return item;
  });
}

function buildSkillRuleLedger(text) {
  let currentHeading = "Root";
  return markdownLineItems(text).flatMap((item) => {
    if (item.kind === "heading") {
      currentHeading = item.text.replace(/^#{1,6}\s+/, "");
      return [];
    }
    if (item.kind !== "rule") return [];
    const ruleText = item.text.replace(/^[-*]\s+/, "");
    const lower = ruleText.toLowerCase();
    const category = /color|token|visual|設計|色彩|圓角|字體/.test(lower) ? "Design"
      : /layout|workspace|dashboard|版型|工作台|畫面/.test(lower) ? "Layout"
        : /reference|evidence|source|參考|證據/.test(lower) ? "Evidence"
          : /do not|avoid|never|不要|避免|禁止/.test(lower) ? "Constraint"
            : "Workflow";
    const target = /sidebar|left|左欄|source/i.test(ruleText) ? "Sources"
      : /preview|生成|畫面|workspace/i.test(ruleText) ? "Workspace"
        : /inspector|evidence|risk|驗證|檢查/i.test(ruleText) ? "Inspector"
          : "Global";
    return [{
      id: `Rule ${String(item.line).padStart(2, "0")}`,
      type: category,
      target,
      constraint: ruleText,
      source: `SKILL.md L${item.line}`,
      section: currentHeading
    }];
  });
}

function buildDesignTokenLedger(text) {
  const tokens = parseDesignTokens(text);
  const tokenRows = [
    ["color.primary", tokens.primary, "Primary brand"],
    ["color.secondary", tokens.secondary, "Sovereign emphasis"],
    ["color.canvas", tokens.canvas, "Content background"],
    ["radius.card", `${tokens.radius}px`, "Card radius"],
    ["density", tokens.density, "Workspace density"]
  ];
  return tokenRows.map(([name, value, role]) => {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const match = text.split(/\r?\n/).findIndex((line) => new RegExp(escaped.split(".").pop(), "i").test(line));
    return { name, value, role, source: `DESIGN.md L${Math.max(1, match + 1)}` };
  });
}

function buildUnrecognizedItems(text, fileName) {
  return markdownLineItems(text)
    .filter((item) => item.text && item.kind === "unrecognized")
    .slice(0, 8)
    .map((item) => ({
      title: `${fileName} L${item.line}`,
      note: item.text.length > 92 ? `${item.text.slice(0, 92)}...` : item.text
    }));
}

function currentSourceModel() {
  const skill = parseSkillContext(skillText.value);
  const design = parseDesignUnderstanding(designText.value);
  const active = activeReferences();
  const warnings = parseVerificationWarnings(skill, design, active);
  return {
    skill,
    design,
    active,
    warnings,
    skillRules: buildSkillRuleLedger(skillText.value),
    designTokens: buildDesignTokenLedger(designText.value),
    skillUnknown: buildUnrecognizedItems(skillText.value, "SKILL.md"),
    designUnknown: buildUnrecognizedItems(designText.value, "DESIGN.md")
  };
}

function sourceModelForKey(key) {
  const model = currentSourceModel();
  if (key === "design") {
    return {
      title: "DESIGN.md",
      raw: designText.value,
      parsed: model.designTokens.map((item) => ({
        title: item.name,
        meta: `${item.value} / ${item.role}`,
        source: item.source
      })),
      outline: model.design.cards.map((card) => ({
        title: card.label,
        meta: card.title,
        source: "DESIGN.md parser"
      })),
      warnings: model.warnings.filter(([label]) => ["DESIGN.md", "Tokens"].includes(label)).concat(model.designUnknown.map((item) => [item.title, item.note]))
    };
  }
  if (key === "references") {
    return {
      title: "References",
      raw: model.active.map((item) => `${item.kind}: ${item.name}`).join("\n") || "尚未選取 reference。",
      parsed: model.active.map((item, index) => ({
        title: item.name,
        meta: `${item.kind} / ${item.type}`,
        source: `Reference ${String(index + 1).padStart(2, "0")}`
      })),
      outline: model.active.map((item) => ({ title: item.kind, meta: item.name, source: item.type })),
      warnings: model.warnings.filter(([label]) => label === "References")
    };
  }
  return {
    title: "SKILL.md",
    raw: skillText.value,
    parsed: model.skillRules.map((item) => ({
      title: item.id,
      meta: `${item.type} / ${item.target}`,
      source: `${item.source} / ${item.constraint}`
    })),
    outline: model.skill.sections.map((section) => ({
      title: section.heading,
      meta: `${section.items.length} items`,
      source: "SKILL.md outline"
    })),
    warnings: model.warnings.filter(([label]) => ["SKILL.md", "Rules", "Structure"].includes(label)).concat(model.skillUnknown.map((item) => [item.title, item.note]))
  };
}

function detailListMarkup(items, emptyText) {
  if (!items.length) return `<div class="source-detail-empty">${escapeHtml(emptyText)}</div>`;
  return items.map((item) => `
    <article>
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.meta || "")}</span>
      <small>${escapeHtml(item.source || "")}</small>
    </article>
  `).join("");
}

function renderSourceDetail() {
  if (!sourceDetailContent || !sourceDetailTitle) return;
  const source = sourceModelForKey(activeSourceKey);
  sourceDetailTitle.textContent = source.title;
  if (sourceOpenButton) sourceOpenButton.textContent = activeSourceKey === "references" ? "Open Sources" : "Open Raw";
  if (activeSourceDetailTab === "raw") {
    sourceDetailContent.innerHTML = `<pre>${escapeHtml(source.raw || "尚未載入內容。")}</pre>`;
    return;
  }
  if (activeSourceDetailTab === "parsed") {
    sourceDetailContent.innerHTML = `<div class="source-detail-ledger">${detailListMarkup(source.parsed, "目前沒有可顯示的 Parsed 資料。")}</div>`;
    return;
  }
  if (activeSourceDetailTab === "outline") {
    sourceDetailContent.innerHTML = `<div class="source-detail-ledger">${detailListMarkup(source.outline, "目前沒有可顯示的 Outline。")}</div>`;
    return;
  }
  const warnings = source.warnings.map(([title, note]) => ({ title, meta: note, source: "Parser warning" }));
  sourceDetailContent.innerHTML = `<div class="source-detail-ledger warning">${detailListMarkup(warnings, "此來源目前沒有 parsing warning。")}</div>`;
}

function renderInspectorPanels(snapshot = currentSnapshot) {
  const model = currentSourceModel();
  if (inspectorEvidenceList) {
    const rows = [
      ...model.skillRules.slice(0, 4).map((item) => ({ title: item.id, meta: item.constraint, source: item.source })),
      ...model.designTokens.slice(0, 4).map((item) => ({ title: item.name, meta: item.value, source: item.source })),
      ...model.active.slice(0, 3).map((item, index) => ({ title: item.name, meta: item.kind, source: `Reference ${index + 1}` }))
    ];
    inspectorEvidenceList.innerHTML = detailListMarkup(rows, "尚未建立可追溯 evidence。");
  }
  if (inspectorIssueList) {
    const warnings = model.warnings.map(([title, note]) => ({ title, meta: note, source: "Parsing warning" }));
    const unknown = [...model.skillUnknown, ...model.designUnknown].map((item) => ({ title: item.title, meta: item.note, source: "Unrecognized content" }));
    inspectorIssueList.innerHTML = detailListMarkup([...warnings, ...unknown], "目前沒有 parsing issue 或未辨識內容。");
  }
  renderSourceDetail();
}

function setVerificationStepState(element, state, label) {
  if (!element) return;
  element.classList.remove("complete", "warning", "active");
  element.classList.add(state);
  const strong = element.querySelector("strong");
  if (strong) strong.textContent = label;
}

function buildVerificationFlow({ skill, design, active, warnings, tokenCount, appliedRules, partialRules, applicableRules, ruleTotal, previewPassed, previewChecks, snapshot }) {
  const referenceNames = active.map((item) => item.name || item.text || String(item)).filter(Boolean);
  const designSignals = design.cards.filter((card) => !/預設|基本/.test(card.title)).map((card) => card.label);
  const widgets = snapshot?.plan?.widgets?.map((item) => window.SkillPlanningLab.widgetTitle(item)) || ["Preview", "Verification", "Evaluation"];
  const appliedText = `${appliedRules} 已套用 / ${partialRules} 部分套用 / ${Math.max(0, ruleTotal - applicableRules)} 不適用`;
  const warningText = warnings.length ? `${warnings.length} 則待確認` : "無待確認";

  return [
    {
      key: "import",
      index: "01",
      title: "讀取來源",
      status: active.length || skill.bullets.length || tokenCount ? "complete" : "warning",
      metric: `${[skillText.value.trim(), designText.value.trim(), active.length].filter(Boolean).length} 份`,
      summary: `已載入 SKILL.md、DESIGN.md 與 ${active.length} 組 Reference。`,
      detailTitle: "輸入來源",
      details: [
        ["SKILL.md", `${skill.bullets.length} 條工作規則`],
        ["DESIGN.md", `${tokenCount} 個設計訊號`],
        ["References", referenceNames.length ? referenceNames.slice(0, 3).join(" / ") : "尚未加入外部 reference"]
      ],
      impact: ["Source Explorer", "Parsed Summary"]
    },
    {
      key: "parse",
      index: "02",
      title: "規則抽取",
      status: warnings.length ? "warning" : "complete",
      metric: `${skill.bullets.length} 條`,
      summary: `${skill.bullets.length} 條 Skill rules、${tokenCount} 個 DESIGN tokens，${warningText}。`,
      detailTitle: "抽取結果",
      details: [
        ["Skill rules", `${Math.max(0, skill.bullets.length - warnings.length)} 條可直接使用`],
        ["Design tokens", designSignals.length ? designSignals.slice(0, 4).join(" / ") : "使用預設設計訊號"],
        ["Warnings", warnings.length ? warnings.map(([label]) => label).slice(0, 3).join(" / ") : "目前乾淨"]
      ],
      impact: ["Verification", "Issues", "Skill 遵守度"]
    },
    {
      key: "apply",
      index: "03",
      title: "套用到 UI",
      status: "active",
      metric: `${appliedRules}/${ruleTotal}`,
      summary: appliedText,
      detailTitle: "套用狀態",
      details: [
        ["已套用", `${appliedRules} 條規則影響目前 Preview`],
        ["部分套用", `${partialRules} 條規則需人工檢查`],
        ["畫面影響", widgets.slice(0, 3).join(" / ")]
      ],
      impact: ["生成情境", "版型決策", "UI Preview"]
    },
    {
      key: "preview",
      index: "04",
      title: "生成 Preview",
      status: previewPassed >= previewChecks - 1 ? "complete" : "active",
      metric: `${previewPassed}/${previewChecks}`,
      summary: `目前 Preview 通過 ${previewPassed} / ${previewChecks} 項檢查。`,
      detailTitle: "畫面檢查",
      details: [
        ["版型", snapshot?.plan?.layoutLabel || snapshot?.template || "工作台預覽"],
        ["資訊架構", snapshot?.plan?.iaPattern || "規則驅動"],
        ["風險", snapshot?.risk || "待評估"]
      ],
      impact: ["Preview Canvas", "生成紀錄", "Reference Evidence"]
    },
    {
      key: "evaluation",
      index: "05",
      title: "輸出評估",
      status: snapshot?.score >= 88 ? "complete" : "warning",
      metric: `${snapshot?.score || 93}`,
      summary: `Skill 遵守度 ${snapshot?.score || 93}，偏移風險 ${snapshot?.risk || "低"}。`,
      detailTitle: "評估輸出",
      details: [
        ["Skill 遵守度", `${snapshot?.score || 93} / 100`],
        ["UI 完整度", `${snapshot?.quality || "8.8"}`],
        ["Evidence", `${active.length} 組 reference 參與評估`]
      ],
      impact: ["生成評估", "Risk Notes", "本次試跑評分"]
    }
  ];
}

function renderVerificationFlow(steps) {
  if (!verificationFlowSteps || !verificationFlowDetail) return;
  const activeStep = steps.find((step) => step.key === activeVerificationStep) || steps[2] || steps[0];
  activeVerificationStep = activeStep.key;
  if (verificationFlowSummary) verificationFlowSummary.textContent = activeStep.summary;
  verificationFlowSteps.innerHTML = steps
    .map((step) => `
      <button class="verification-flow-step ${step.status} ${step.key === activeStep.key ? "active" : ""}" type="button"
        data-verification-step="${step.key}" role="tab" aria-selected="${step.key === activeStep.key ? "true" : "false"}">
        <span>${step.index}</span>
        <strong>${escapeHtml(step.title)}</strong>
        <small>${escapeHtml(step.metric)}</small>
      </button>
    `)
    .join("");
  verificationFlowDetail.innerHTML = `
    <div class="verification-detail-head">
      <span>${activeStep.index}</span>
      <div>
        <strong>${escapeHtml(activeStep.detailTitle)}</strong>
        <small>${escapeHtml(activeStep.summary)}</small>
      </div>
    </div>
    <div class="verification-detail-grid">
      ${activeStep.details.map(([label, value]) => `<article><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></article>`).join("")}
    </div>
    <div class="verification-impact-list">
      <span>影響區塊</span>
      <div>${activeStep.impact.map((item) => `<b>${escapeHtml(item)}</b>`).join("")}</div>
    </div>
  `;
}

function updateVerificationStatus(snapshot = currentSnapshot) {
  if (!skillText || !designText) return;
  const skill = parseSkillContext(skillText.value);
  const design = parseDesignUnderstanding(designText.value);
  const active = typeof activeReferences === "function" ? activeReferences() : [];
  const tokenCount = Math.max(0, design.cards.filter((card) => !/預設|基本/.test(card.title)).length);
  const warnings = parseVerificationWarnings(skill, design, active);
  const importedCount = [skillText.value.trim(), designText.value.trim(), active.length].filter(Boolean).length;
  const parseState = warnings.length ? "Warning" : "Complete";
  const ruleTotal = Math.max(skill.bullets.length, 1);
  const applicableRules = Math.max(1, ruleTotal - Math.min(warnings.length, Math.max(0, ruleTotal - 1)));
  const appliedRules = Math.max(1, Math.min(applicableRules, Math.round(applicableRules * 0.75) + Math.min(active.length, 2)));
  const partialRules = Math.min(warnings.length + (snapshot?.modeKey === "exploratory" ? 1 : 0), Math.max(0, applicableRules - appliedRules));
  const previewChecks = Math.max(4, applicableRules + tokenCount);
  const previewPassed = Math.max(1, Math.min(previewChecks, previewChecks - Math.min(warnings.length, 3)));

  if (sourceSkillRuleCount) sourceSkillRuleCount.textContent = `${skill.bullets.length} Rules`;
  if (sourceSkillParseState) sourceSkillParseState.textContent = skill.bullets.length ? "已解析" : "需檢查";
  if (sourceDesignTokenCount) sourceDesignTokenCount.textContent = `${tokenCount} Tokens`;
  if (sourceDesignParseState) sourceDesignParseState.textContent = tokenCount ? "已解析" : "需檢查";
  if (sourceReferenceCount) sourceReferenceCount.textContent = `${active.length} Files`;
  if (sourceReferenceParseState) sourceReferenceParseState.textContent = active.length ? "已讀取" : "未選取";
  if (parsedSummaryState) parsedSummaryState.textContent = warnings.length ? `${warnings.length} warnings` : "clean";
  if (parsedStructureCount) parsedStructureCount.textContent = skill.headings.length;
  if (parsedRuleCount) parsedRuleCount.textContent = skill.bullets.length;
  if (parsedTokenCount) parsedTokenCount.textContent = tokenCount;
  if (parsedReferenceCount) parsedReferenceCount.textContent = active.length;
  if (parsingWarningList) {
    parsingWarningList.innerHTML = warnings.length
      ? warnings.map(([label, note]) => `<article><strong>${escapeHtml(label)}</strong><span>${escapeHtml(note)}</span></article>`).join("")
      : '<article class="clean"><strong>Parsed Successfully</strong><span>目前來源結構、規則與 tokens 都可被本地 parser 讀取。</span></article>';
  }

  setVerificationStepState(topImportStatus, importedCount >= 2 ? "complete" : "warning", importedCount >= 2 ? "Complete" : `${importedCount} / 3`);
  setVerificationStepState(topParseStatus, warnings.length ? "warning" : "complete", parseState);
  setVerificationStepState(topApplyStatus, "active", `${appliedRules} / ${ruleTotal}`);
  if (topApplyCount) topApplyCount.textContent = `${appliedRules} / ${ruleTotal}`;
  if (topIssueCount) topIssueCount.textContent = `Issues ${warnings.length}`;

  if (importVerificationText) importVerificationText.textContent = `SKILL.md、DESIGN.md 與 ${active.length} 組 References 已載入`;
  if (parseVerificationText) parseVerificationText.textContent = `${skill.bullets.length} Rules、${tokenCount} Tokens，${warnings.length} 則需檢查`;
  if (applyVerificationText) applyVerificationText.textContent = `${appliedRules} Applied / ${partialRules} Partial / ${Math.max(0, ruleTotal - applicableRules)} Not applicable`;
  if (parsingCoverageMetric) parsingCoverageMetric.textContent = `${Math.max(0, ruleTotal - warnings.length)} / ${ruleTotal}`;
  if (applicationCoverageMetric) applicationCoverageMetric.textContent = `${appliedRules} / ${applicableRules}`;
  if (previewComplianceMetric) previewComplianceMetric.textContent = `${previewPassed} / ${previewChecks}`;
  renderVerificationFlow(buildVerificationFlow({
    skill,
    design,
    active,
    warnings,
    tokenCount,
    appliedRules,
    partialRules,
    applicableRules,
    ruleTotal,
    previewPassed,
    previewChecks,
    snapshot
  }));
  renderInspectorPanels(snapshot);
}

function workflowLabel(item, index) {
  const lower = item.toLowerCase();
  if (lower.includes("read") || item.includes("讀")) return "Inspect";
  if (lower.includes("design") || item.includes("設計")) return "Contract";
  if (lower.includes("build") || lower.includes("implement") || item.includes("生成")) return "Module";
  if (lower.includes("check") || lower.includes("validate") || item.includes("檢查")) return "Validate";
  return ["Inspect", "Contract", "Module", "Validate", "Review"][index] || item;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderEvaluation(modeKey) {
  const mode = evaluationModes[modeKey];
  generatedUi.classList.remove("conservative", "balanced", "exploratory");
  generatedUi.classList.add(modeKey);
  creativityValue.textContent = creativityRange.value;
  updateText("#confidenceValue", mode.confidence);
  updateText("#confidenceNote", mode.note);
  updateText("#hitMetric", mode.hit);
  updateText("#qualityMetric", mode.quality);
  updateText("#riskMetric", mode.risk);
  if (complianceScore) complianceScore.textContent = mode.score;
  if (complianceBar) complianceBar.style.width = `${mode.score}%`;
  updateText("#summaryText", mode.summary);
  evaluationList.innerHTML = mode.items
    .map(([status, title, body]) => `
      <div class="evaluation-item ${status}">
        <strong>${title}</strong>
        <span>${body}</span>
      </div>
    `)
    .join("");
}

function updateText(selector, value) {
  const node = generatedUi.querySelector(selector);
  if (node) node.textContent = value;
}

function buildSnapshot(variant, modeKey, options = {}) {
  const mode = evaluationModes[modeKey];
  const context = currentContextProfile();
  const contextualVariant = adaptVariantToContext(variant, context, modeKey);
  const routeSeed = options.seed ?? generationCount;
  const layoutKey = options.layoutKey || layoutKeyFor(modeKey, routeSeed);
  const seed = contextSeed(context, generationCount);
  const template = routeLabelFor(context, modeKey, routeSeed);
  const density = densityFromValue(Number(densityRange.value))[1];
  const references = [...document.querySelectorAll(".reference-chip.active")].map((chip) => chip.textContent.trim());
  const imageReferences = [...document.querySelectorAll('.reference-chip.active[data-reference-type="image"]')]
    .map((chip) => referenceImages.get(chip.dataset.referenceId))
    .filter(Boolean);
  const drift = generationCount === 0 ? 2 : generationCount % 5;
  const contextAdjustment = contextScoreAdjustment(context);
  const score = Math.max(58, Math.min(98, mode.score + contextAdjustment + (drift - 2) * 2));
  const quality = Math.max(6.8, Math.min(9.4, Number(mode.quality) + contextAdjustment / 30 + (drift - 2) * 0.12)).toFixed(1);
  const hitTotal = Math.max(8, Math.min(18, context.skill.bullets.length + references.length + 6));
  const hitDone = Math.max(5, Math.min(hitTotal, hitTotal - (modeKey === "exploratory" ? drift + 1 : Math.floor(drift / 2)) + Math.floor(contextAdjustment / 5)));
  const risk = context.key === "marketing" ? "中" : mode.risk;

  return {
    id: options.id || Date.now(),
    count: generationCount,
    time: new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" }),
    variantKey: contextualVariant.key,
    variantName: `${context.domain} / ${template}`,
    variantClass: contextualVariant.className,
    layoutKey,
    template,
    modeKey,
    contextKey: context.key,
    domain: context.domain,
    context,
    density,
    references,
    imageReferences,
    refClasses: referenceClasses(references),
    title: contextualVariant.title,
    label: `${contextualVariant.label} · ${template}`,
    nodes: rotateItems(contextualVariant.nodes, seed),
    tasks: rotateItems(contextualVariant.tasks, seed + 1),
    confidence: `${Math.max(68, Number.parseInt(mode.confidence, 10) + drift - 2)}%`,
    note: `${mode.note} 目前判讀為「${context.domain} / ${context.ruleDensity}」。`,
    hit: `${hitDone}/${hitTotal}`,
    quality,
    risk,
    score,
    summary: `${contextualVariant.summary} 本次採用 ${template} 模板，這是第 ${Math.max(1, generationStepFor(routeSeed))} 個內容變化路由，已依 ${context.innovation} 創新度、${density}密度與 ${context.design.summary.meta} 調整。`,
    items: contextualEvaluationItems(mode.items, context, references)
  };
}

function contextualEvaluationItems(items, context, references) {
  const extra = [
    ["ok", `${context.domain} 已影響預覽`, `標題、流程節點與任務清單已依目前 Skill / Prompt 內容改寫。`],
    context.hasCustomDesign
      ? ["ok", "DESIGN.md 訊號已採用", `已偵測 ${context.designSignals} 類設計訊號並映射到預覽與報告。`]
      : ["warn", "DESIGN.md 差異偏弱", "目前設計內容較接近預設值，建議補上字體、間距、元件或互動規則。"],
    references.length
      ? ["ok", "Reference 已納入評估", `目前 ${references.length} 組 reference 會影響證據與分數。`]
      : ["warn", "Reference 不足", "尚未套用 reference，生成差異主要來自文字內容。"]
  ];
  return [...items.slice(0, 2), ...extra].slice(0, 5);
}

function layoutKeyFor(modeKey, seed) {
  const context = currentContextProfile();
  const route = routeForContext(context);
  return route.layouts[variationIndexFor(context, modeKey, seed)];
}

function chooseVariant(modeKey) {
  const references = [...document.querySelectorAll(".reference-chip.active")].map((chip) => chip.textContent.trim());
  const context = currentContextProfile();
  const route = routeForContext(context);
  if (context.key !== "operations") {
    return uiVariants[route.variants[variantIndexFor(context, modeKey)]];
  }
  if (modeKey === "conservative") {
    return references.some((item) => item.includes("Agent")) ? uiVariants[3] : uiVariants[1];
  }
  if (modeKey === "exploratory") {
    return references.some((item) => item.includes("Eden")) ? uiVariants[2] : uiVariants[(generationCount + 1) % uiVariants.length];
  }
  if (references.some((item) => item.includes("Bootstrap"))) return uiVariants[0];
  return uiVariants[route.variants[variantIndexFor(context, modeKey)]];
}

function referenceClasses(references) {
  return [
    references.some((item) => item.includes("Eden")) ? "ref-eden" : "",
    references.some((item) => item.includes("Agent")) ? "ref-agent" : "",
    references.some((item) => item.includes("Bootstrap")) ? "ref-bootstrap" : ""
  ].filter(Boolean);
}

function activeReferences() {
  return [...document.querySelectorAll(".reference-chip.active")].map((chip) => ({
    name: chip.textContent.trim(),
    kind: chip.dataset.kind || "參考資料",
    type: chip.dataset.referenceType || "preset",
    id: chip.dataset.referenceId || ""
  }));
}

function updateReferenceCenter() {
  const allReferences = [...document.querySelectorAll(".reference-chip")];
  const active = activeReferences();
  const parsedSkill = parseSkillContext(skillText.value);
  referenceCount.textContent = active.length;
  referenceReady.textContent = Math.max(0, active.length - (active.some((item) => item.kind === "檔案") ? 1 : 0));
  referenceConflict.textContent = active.some((item) => item.name.includes("Bootstrap")) && creativityRange.value > 70 ? 1 : 0;
  readingSourceCount.textContent = `${active.length + 2} 份`;
  readingEvidenceCount.textContent = `${active.length} 組`;
  readingRuleCount.textContent = `${parsedSkill.bullets.length} 條`;
  profileRuleCount.textContent = `${Math.max(parsedSkill.bullets.length, 1)} 條`;
  profileReferenceCount.textContent = `${active.length} 組`;
  readingSummary.textContent = active.length
    ? `已將 ${active.length} 組 Reference 對應至版型、元件與內容規則，可追溯其對預覽的影響。`
    : "目前僅依 Skill.md 與 DESIGN.md 生成，Reference 證據尚未建立。";

  if (active.length === 0) {
    referenceInsights.innerHTML = '<div class="reference-empty">尚未套用 reference，AI 將只依 Skill.md 與 DESIGN.md 產生預覽。</div>';
    allReferences.forEach((chip) => {
      chip.setAttribute("aria-pressed", chip.classList.contains("active") ? "true" : "false");
    });
    updateVerificationStatus();
    return;
  }

  referenceInsights.innerHTML = active
    .slice(0, 4)
    .map((item, index) => `
      <article>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <div>
          <strong>${item.kind}</strong>
          <small>${item.type === "image" ? imageInsightText(item) : item.name}</small>
        </div>
      </article>
    `)
    .join("");

  allReferences.forEach((chip) => {
    chip.setAttribute("aria-pressed", chip.classList.contains("active") ? "true" : "false");
  });
  updateVerificationStatus();
}

function setReadingProgress(activeIndex, state = "Ready") {
  const stateLabels = { Ready: "待命", Reading: "讀取中", Complete: "已完成" };
  if (readingState) readingState.textContent = stateLabels[state] || state;
  readingSteps.forEach((step, index) => {
    step.classList.toggle("complete", index < activeIndex);
    step.classList.toggle("active", index === activeIndex);
    step.setAttribute("aria-current", index === activeIndex ? "step" : "false");
  });
}

function updateEvidence(snapshot) {
  const active = activeReferences();
  if (active.length === 0) {
    evidenceList.innerHTML = '<div class="evidence-empty">尚未選取 reference。</div>';
  } else {
    evidenceList.innerHTML = active
      .map((item) => `
        <article>
          <strong>${item.type === "image" ? "圖片參考" : item.kind}</strong>
          <span>${escapeHtml(item.name)}</span>
          <small>${item.type === "image" ? escapeHtml(imageInsightText(item)) : evidenceText(item.name)}</small>
        </article>
      `)
      .join("");
  }

  const riskNotes = [
    snapshot.modeKey === "exploratory" ? "高創新度會放大版型變化，需人工確認是否仍符合企業後台效率。" : "目前創新度仍在可控範圍，偏移風險主要來自 reference 解釋深度。",
    snapshot.imageReferences?.length ? `已納入 ${snapshot.imageReferences.length} 張參考圖片，但仍屬 mock 判讀，展示時可說明未接真實影像模型。` : "尚未匯入參考圖片，生成預覽主要依文字 reference 與 DESIGN.md 判斷。",
    active.some((item) => item.name.includes("Bootstrap")) ? "Bootstrap Controls 已套用，元件一致性較高，但視覺辨識度會較保守。" : "尚未套用元件規則 reference，下一步可補上控制項行為規範。",
    snapshot.score < 82 ? "Skill 遵守度低於 82，建議降低創新度或補充更具體的 reference evidence。" : "Skill 遵守度達展示門檻，可作為 Sprint 2 demo 狀態。"
  ];

  riskNoteList.innerHTML = riskNotes
    .map((note, index) => `
      <article>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <p>${note}</p>
      </article>
    `)
    .join("");
}

function promptIntent() {
  const value = testPrompt.value.trim();
  if (!value) {
    return {
      label: "尚未輸入需求",
      output: "等待需求後再建立建議",
      note: "Try Skill 不會保存內容；輸入一段需求後可重新試跑。",
      adjustment: -8
    };
  }
  if (/dashboard|儀表|監控|後台|管理/i.test(value)) {
    return {
      label: "辨識為企業 AI 工作台需求",
      output: "工作台版型、任務流程與評估面板",
      note: "需求與 company-design 的管理工具定位吻合，適合展示規則追溯。",
      adjustment: 4
    };
  }
  if (/landing|首頁|行銷|品牌|hero/i.test(value)) {
    return {
      label: "偵測到行銷頁傾向",
      output: "建議轉回可操作的管理畫面",
      note: "company-design 主要服務企業工具；若做行銷頁，規則命中會降低。",
      adjustment: -12
    };
  }
  return {
    label: "辨識為一般 UI 需求",
    output: "以管理工具結構產生初版建議",
    note: "需求可試跑，但若補上使用者角色、資料種類與主要決策，評分會更穩。",
    adjustment: -2
  };
}

function updateSkillRun(snapshot = currentSnapshot) {
  const intent = promptIntent();
  const active = activeReferences();
  const modeKey = modeFromValue(Number(creativityRange.value));
  const designParsed = parseDesignUnderstanding(designText.value);
  const baseScore = snapshot?.score || evaluationModes[modeKey].score;
  const quality = Number(snapshot?.quality || evaluationModes[modeKey].quality);
  const management = Math.max(62, Math.min(96, Math.round(baseScore - 5 + active.length + intent.adjustment / 2)));
  const generation = Math.max(58, Math.min(94, Math.round(quality * 10 - 4 + intent.adjustment / 3)));
  const trace = Math.max(60, Math.min(98, Math.round(baseScore - 2 + active.length * 2)));

  trySkillStatus.textContent = generationCount > 0 ? `已試跑 ${generationCount} 次` : "尚未試跑";
  mockReadResult.textContent = intent.label;
  mockOutputResult.textContent = intent.output;
  mockScoreResult.textContent = `${Math.round((management + generation + trace) / 3)} / 100`;
  managementScore.textContent = management;
  generationScore.textContent = generation;
  traceScore.textContent = trace;
  skillRunNote.textContent = intent.note;
  traceMap.innerHTML = [
    ["Prompt Intent", intent.label, intent.output],
    ["Skill Rules", `${snapshot?.context?.skill.bullets.length || 12} 條規則`, snapshot?.context ? `${snapshot.context.domain} / ${snapshot.context.ruleDensity}` : "台灣繁中、企業工具、可追溯評估"],
    ["DESIGN.md", designParsed.summary.meta, designParsed.summary.summary],
    ["Reference", `${active.length} 組證據`, active.some((item) => item.type === "image") ? "含圖片視覺參考與文字規則" : "文字規則與預設 reference"],
    ["Score", `${Math.round((management + generation + trace) / 3)} / 100`, `管理 ${management} / 生成 ${generation} / 追溯 ${trace}`]
  ]
    .map(([label, value, note]) => `
      <article>
        <span>${label}</span>
        <strong>${escapeHtml(value)}</strong>
        <small>${escapeHtml(note)}</small>
      </article>
    `)
    .join("");
  renderComplianceReport(snapshot, { management, generation, trace, intent });
}

function renderComplianceReport(snapshot = currentSnapshot, scores = null) {
  if (!reportSummaryGrid || !ruleHitList || !scoreBreakdownList || !recommendationList) return;
  const context = snapshot?.context || currentContextProfile();
  const active = activeReferences();
  const modeKey = snapshot?.modeKey || modeFromValue(Number(creativityRange.value));
  const base = snapshot?.score || evaluationModes[modeKey].score;
  const computedScores = scores || {
    management: Math.max(60, Math.min(96, base - 4 + active.length)),
    generation: Math.max(58, Math.min(94, Math.round(Number(snapshot?.quality || 8.4) * 10 - 3))),
    trace: Math.max(60, Math.min(98, base + active.length))
  };
  const designConsistency = Math.max(58, Math.min(96, 70 + context.designSignals * 5 + (context.hasCustomDesign ? 6 : 0)));
  const referenceAdoption = Math.max(45, Math.min(96, 52 + active.length * 10 + (active.some((item) => item.type === "image") ? 8 : 0)));
  const promptFit = Math.max(50, Math.min(96, 74 + (context.key !== "operations" ? 8 : 0) + (testPrompt.value.length > 30 ? 5 : -4)));
  const overall = Math.round((computedScores.management + designConsistency + referenceAdoption + promptFit + computedScores.generation) / 5);
  const ruleHits = buildRuleHits(context, active, snapshot);
  const passed = ruleHits.filter((item) => item.status === "pass").length;

  reportSummaryGrid.innerHTML = [
    ["Overall", `${overall}`, overall >= 85 ? "Demo ready" : "需補強"],
    ["Domain", context.domain, context.innovation],
    ["Skill", `${context.skill.bullets.length} rules`, context.ruleDensity],
    ["Reference", `${active.length} sources`, active.some((item) => item.type === "image") ? "含圖片" : "文字/預設"]
  ]
    .map(([label, value, note]) => `<article><span>${label}</span><strong>${escapeHtml(value)}</strong><small>${escapeHtml(note)}</small></article>`)
    .join("");

  ruleHitSummary.textContent = `${passed} / ${ruleHits.length}`;
  ruleHitList.innerHTML = ruleHits
    .map((item) => `
      <article class="${item.status}">
        <span>${item.status === "pass" ? "Pass" : item.status === "warn" ? "Check" : "Risk"}</span>
        <div><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.note)}</small></div>
      </article>
    `)
    .join("");

  const breakdown = [
    ["Skill 遵守度", computedScores.management, "依規則數量與風險調整"],
    ["Design 一致性", designConsistency, "依 DESIGN.md 訊號完整度調整"],
    ["Reference 採用度", referenceAdoption, "依來源數與圖片參考調整"],
    ["Prompt Fit", promptFit, "依需求與領域吻合度調整"],
    ["UI 完整度", computedScores.generation, "依生成品質與創新度調整"]
  ];
  scoreBreakdownSummary.textContent = `${overall} overall`;
  scoreBreakdownList.innerHTML = breakdown
    .map(([label, value, note]) => `
      <article>
        <div><span>${label}</span><strong>${value}</strong></div>
        <div class="score-meter"><i style="width:${value}%"></i></div>
        <small>${note}</small>
      </article>
    `)
    .join("");

  const recommendations = buildRecommendations(context, active, overall);
  recommendationSummary.textContent = `${recommendations.length} items`;
  recommendationList.innerHTML = recommendations
    .map((item, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><p>${escapeHtml(item)}</p></article>`)
    .join("");
}

function buildRuleHits(context, active, snapshot) {
  return [
    {
      status: context.skill.bullets.length >= 4 ? "pass" : "warn",
      title: "Skill 規則足夠生成差異",
      note: context.skill.bullets.length >= 4 ? `已讀到 ${context.skill.bullets.length} 條規則。` : "規則偏少，預覽差異會受限。"
    },
    {
      status: context.hasCustomDesign ? "pass" : "warn",
      title: "DESIGN.md 已提供可解析訊號",
      note: context.hasCustomDesign ? `已偵測 ${context.designSignals} 類設計訊號。` : "目前較接近預設 design，建議補 typography / spacing / components。"
    },
    {
      status: active.length ? "pass" : "warn",
      title: "Reference 已納入生成證據",
      note: active.length ? `${active.length} 組 reference 已進入 Evidence。` : "尚未選取 reference。"
    },
    {
      status: context.key === "marketing" ? "warn" : "pass",
      title: "產品定位與管理工具吻合",
      note: context.key === "marketing" ? "偵測到行銷頁傾向，已轉成內容審查台但仍需人工確認。" : `目前判讀為 ${context.domain}。`
    },
    {
      status: snapshot?.modeKey === "exploratory" && snapshot?.score < 82 ? "risk" : "pass",
      title: "創新度風險可控",
      note: snapshot?.modeKey === "exploratory" ? "探索模式已提高差異，但需檢查是否偏離規則。" : "目前創新度在可控範圍。"
    }
  ];
}

function buildRecommendations(context, active, overall) {
  const items = [context.recommendation];
  if (!context.hasCustomDesign) items.push("補上 Typography、Spacing、Components、Interaction 規則，預覽會更容易產生設計差異。");
  if (!active.length) items.push("至少加入 1-2 張截圖或 reference 文件，讓 Evidence 與 Reference 採用度更像完整產品流程。");
  if (context.key === "operations") items.push("若要測試不同 skill，請在 SKILL.md 加入明確領域詞，例如醫療、金融、客服、開發者或安全治理。");
  if (overall < 85) items.push("降低創新度或補強規則後再生成，可讓合規分數更穩定。");
  items.push("下一階段若串 API，可把目前 JS parser 換成真正的模型解析，保留同一套報告介面。");
  return [...new Set(items)].slice(0, 5);
}

function evidenceText(name) {
  if (name.includes("Eden")) return "套用細線、低彩度、實驗室工作台節奏。";
  if (name.includes("Agent")) return "強化任務流程、狀態節點與執行佇列。";
  if (name.includes("Bootstrap")) return "控制項維持標準狀態與可預期互動。";
  return "已加入本次生成上下文，等待 AI reading process 分析。";
}

function imageInsightText(item) {
  const image = referenceImages.get(item.id);
  if (!image) return `${item.name}：已作為視覺參考納入。`;
  return `${image.name}：${image.insight}`;
}

function createImageInsight(file, index) {
  const sizeKb = Math.max(1, Math.round(file.size / 1024));
  const patterns = [
    "偏向卡片式資訊分組，會提高預覽中的區塊分隔與層級標示。",
    "偏向工作台截圖參考，會強化主預覽區的狀態、任務與控制密度。",
    "偏向品牌或視覺規範參考，會影響色彩、留白與圓角判讀。",
    "偏向元件參考，會讓按鈕、面板與指標區更接近一致化規則。"
  ];
  return {
    insight: patterns[index % patterns.length],
    meta: `${sizeKb} KB / visual reference`
  };
}

function applySnapshot(snapshot) {
  currentSnapshot = snapshot;
  activeGenerationId = snapshot.id;
  generatedUi.classList.remove("variant-pipeline", "variant-matrix", "variant-radar", "variant-review");
  generatedUi.classList.remove("ref-eden", "ref-agent", "ref-bootstrap");
  generatedUi.classList.add(snapshot.variantClass);
  generatedUi.classList.add(...snapshot.refClasses);
  generatedUi.innerHTML = renderGeneratedLayout(snapshot);
  updateText("#confidenceValue", snapshot.confidence);
  updateText("#confidenceNote", snapshot.note);
  updateText("#hitMetric", snapshot.hit);
  updateText("#qualityMetric", snapshot.quality);
  updateText("#riskMetric", snapshot.risk);
  if (complianceScore) complianceScore.textContent = snapshot.score;
  if (complianceBar) complianceBar.style.width = `${snapshot.score}%`;
  updateText("#summaryText", snapshot.summary);
  evaluationList.innerHTML = snapshot.items
    .map(([status, title, body]) => `
      <div class="evaluation-item ${status}">
        <strong>${title}</strong>
        <span>${body}</span>
      </div>
    `)
    .join("");
  updateReferenceCenter();
  updateEvidence(snapshot);
  updateSkillRun(snapshot);
  renderHistory();
}

function renderGeneratedLayout(snapshot) {
  const renderers = {
    conservative: renderConservativeLayout,
    review: renderReviewLayout,
    balanced: renderBalancedLayout,
    matrix: renderMatrixLayout,
    exploratory: renderExploratoryLayout,
    radar: renderRadarLayout
  };
  return renderers[snapshot.layoutKey](snapshot);
}

function referenceBadges(snapshot) {
  if (snapshot.references.length === 0) return '<span class="reference-state">未套用 Reference</span>';
  const visualContext = snapshot.imageReferences?.length
    ? `<div class="generated-reference-context">
        <div class="generated-reference-copy">
          <span>Visual reference</span>
          <strong>已納入 ${snapshot.imageReferences.length} 張參考圖片</strong>
          <small>${escapeHtml(snapshot.imageReferences[0].insight || "作為視覺密度與元件風格參考。")}</small>
        </div>
        <div class="generated-reference-thumbs">${snapshot.imageReferences.map((item) => `<figure><img src="${item.url}" alt="${escapeHtml(item.name)}"><figcaption>${escapeHtml(item.name)}</figcaption></figure>`).join("")}</div>
      </div>`
    : "";
  return `<div class="reference-state-list">${snapshot.references.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>${visualContext}`;
}

function contextSignal(snapshot) {
  return `<div class="context-signal">
    <span>Context Signal</span>
    <strong>${escapeHtml(snapshot.domain)} / ${escapeHtml(snapshot.context.ruleDensity)} / ${escapeHtml(snapshot.context.designSignals)} design signals</strong>
  </div>`;
}

function referenceNote(snapshot) {
  if (snapshot.references.some((item) => item.includes("Eden"))) return "Eden Design Lab 風格讓畫面保留細線、留白與實驗室感。";
  if (snapshot.references.some((item) => item.includes("Bootstrap"))) return "Bootstrap Controls 讓控制項維持標準、可預期的互動。";
  if (snapshot.references.some((item) => item.includes("Agent"))) return "AI Agent Dashboard 讓畫面偏向任務、狀態與執行佇列。";
  return "未選擇特定 reference，使用通用 Skill UI Lab 預設方向。";
}

function renderConservativeLayout(snapshot) {
  return `
    <div class="gen-header">
      <div><span class="mini-label">${snapshot.label}</span><h3>${snapshot.title}</h3></div>
      <button class="btn btn-outline-dark btn-sm" type="button">重新部署</button>
    </div>
    ${contextSignal(snapshot)}
    ${referenceBadges(snapshot)}
    <div class="ops-table-layout">
      <div class="metric-grid">
        ${metricMarkup(snapshot)}
      </div>
      <div class="ops-table">
        ${snapshot.tasks.map((task, index) => `
          <div class="ops-row">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${task}</strong>
            <small>${index === 0 ? "已通過" : "待檢查"}</small>
          </div>
        `).join("")}
      </div>
      <div class="agent-panel">
        <h4>保守生成摘要</h4>
        <p>${snapshot.summary} ${referenceNote(snapshot)}</p>
      </div>
    </div>
  `;
}

function renderReviewLayout(snapshot) {
  return `
    <div class="gen-header">
      <div><span class="mini-label">${snapshot.label}</span><h3>${snapshot.title}</h3></div>
      <button class="btn btn-dark btn-sm" type="button">核准版本</button>
    </div>
    ${contextSignal(snapshot)}
    ${referenceBadges(snapshot)}
    <div class="review-layout">
      <nav class="review-rail" aria-label="審查狀態">
        ${["待審查 04", "需修正 02", "可採用 07", "已封存 12"].map((item, index) => `<button class="${index === 0 ? "active" : ""}" type="button">${item}</button>`).join("")}
      </nav>
      <div class="review-ledger">
        ${snapshot.tasks.map((task, index) => `<article><span>V${snapshot.count}.${index + 1}</span><div><strong>${task}</strong><small>${index === 0 ? "等待人工確認" : "規則檢查完成"}</small></div><b>${index === 0 ? snapshot.risk : "低"}</b></article>`).join("")}
      </div>
      <aside class="review-decision"><span>Skill 遵守度</span><strong>${snapshot.score}</strong><p>${referenceNote(snapshot)}</p></aside>
    </div>`;
}

function renderBalancedLayout(snapshot) {
  return `
    <div class="gen-header">
      <div><span class="mini-label">${snapshot.label}</span><h3>${snapshot.title}</h3></div>
      <button class="btn btn-outline-dark btn-sm" type="button">重新部署</button>
    </div>
    ${contextSignal(snapshot)}
    ${referenceBadges(snapshot)}
    <div class="gen-hero">
      <div class="signal-map" aria-label="代理任務流程圖">
        ${nodeMarkup(snapshot)}
      </div>
      <div class="confidence-card">
        <span>整體信心</span>
        <strong id="confidenceValue">${snapshot.confidence}</strong>
        <small id="confidenceNote">${snapshot.note}</small>
      </div>
    </div>
    <div class="metric-grid">
      ${metricMarkup(snapshot)}
    </div>
    <div class="workspace-strip">
      <div class="task-queue">${taskMarkup(snapshot)}</div>
      <div class="agent-panel">
        <h4>生成摘要</h4>
        <p id="summaryText">${snapshot.summary} ${referenceNote(snapshot)}</p>
        <div class="mini-chart">${chartMarkup(snapshot.count)}</div>
      </div>
    </div>
  `;
}

function renderMatrixLayout(snapshot) {
  return `
    <div class="gen-header">
      <div><span class="mini-label">${snapshot.label}</span><h3>${snapshot.title}</h3></div>
      <button class="btn btn-outline-dark btn-sm" type="button">查看差異</button>
    </div>
    ${contextSignal(snapshot)}
    ${referenceBadges(snapshot)}
    <div class="matrix-layout">
      <div class="matrix-board">
        <div class="matrix-head"><span>規則</span><span>版型</span><span>元件</span><span>內容</span></div>
        ${snapshot.nodes.map((node, row) => `<div class="matrix-row"><strong>${node}</strong>${[0,1,2].map((cell) => `<span class="${(row + cell + snapshot.count) % 4 === 0 ? "warn" : "hit"}">${(row + cell + snapshot.count) % 4 === 0 ? "需確認" : "命中"}</span>`).join("")}</div>`).join("")}
      </div>
      <aside class="matrix-summary">${metricMarkup(snapshot)}<p>${snapshot.summary}</p></aside>
    </div>`;
}

function renderExploratoryLayout(snapshot) {
  return `
    <div class="gen-header">
      <div><span class="mini-label">${snapshot.label}</span><h3>${snapshot.title}</h3></div>
    </div>
    ${contextSignal(snapshot)}
    ${referenceBadges(snapshot)}
    <div class="canvas-layout">
      <div class="canvas-map">
        ${snapshot.nodes.map((node, index) => `
          <div class="canvas-node node-${index + 1}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${node}</strong>
          </div>
        `).join("")}
      </div>
      <div class="canvas-inspector">
        <div class="confidence-card">
          <span>整體信心</span>
          <strong id="confidenceValue">${snapshot.confidence}</strong>
          <small id="confidenceNote">${snapshot.note}</small>
        </div>
        <div class="metric-grid vertical">${metricMarkup(snapshot)}</div>
      </div>
    </div>
    <div class="experiment-strip">
      <div class="task-queue">${taskMarkup(snapshot)}</div>
      <div class="agent-panel">
        <h4>探索生成摘要</h4>
        <p id="summaryText">${snapshot.summary} ${referenceNote(snapshot)}</p>
      </div>
    </div>
  `;
}

function renderRadarLayout(snapshot) {
  return `
    <div class="gen-header">
      <div><span class="mini-label">${snapshot.label}</span><h3>${snapshot.title}</h3></div>
      <button class="btn btn-dark btn-sm" type="button">建立實驗分支</button>
    </div>
    ${contextSignal(snapshot)}
    ${referenceBadges(snapshot)}
    <div class="radar-layout">
      <div class="risk-orbit" aria-label="風險分布圖">
        <div class="orbit-core"><span>創新度</span><strong>${creativityRange.value}</strong></div>
        ${snapshot.nodes.map((node, index) => `<button class="orbit-signal signal-${index + 1}" type="button"><span>0${index + 1}</span>${node}</button>`).join("")}
      </div>
      <aside class="risk-ledger">
        <span>本次判讀</span><strong>${snapshot.risk}風險</strong>
        ${snapshot.tasks.map((task, index) => `<div><b>${index + 1}</b><p>${task}</p></div>`).join("")}
        <small>${referenceNote(snapshot)}</small>
      </aside>
    </div>`;
}

function nodeMarkup(snapshot) {
  return snapshot.nodes
    .map((node, index) => {
      const nodeClass = index === 0 ? "done" : index === 1 ? "active" : index === 2 ? "warn" : "extra-flow";
      const lineClass = index === snapshot.nodes.length - 1 ? "" : '<div class="signal-line"></div>';
      return `<div class="signal-node ${nodeClass}">${node}</div>${lineClass}`;
    })
    .join("");
}

function taskMarkup(snapshot) {
  return snapshot.tasks
    .map((task, index) => `
      <div class="queue-item ${index === 0 ? "active" : ""}">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <div>
          <strong>${task}</strong>
          <small>${index === 0 ? snapshot.variantName : `${snapshot.density}密度生成`}</small>
        </div>
      </div>
    `)
    .join("");
}

function metricMarkup(snapshot) {
  return `
    <article><span>規則命中</span><strong id="hitMetric">${snapshot.hit}</strong></article>
    <article><span>UI 完整度</span><strong id="qualityMetric">${snapshot.quality}</strong></article>
    <article><span>偏移風險</span><strong id="riskMetric">${snapshot.risk}</strong></article>
  `;
}

function chartMarkup(seed) {
  return [58, 76, 68, 88, 72].map((value, index) => `<span style="height:${value + ((seed + index) % 3) * 4}%"></span>`).join("");
}

function renderDensity() {
  const [densityClass, label] = densityFromValue(Number(densityRange.value));
  generatedUi.classList.remove("density-compact", "density-standard", "density-comfortable");
  generatedUi.classList.add(densityClass);
  densityValue.textContent = label;
  mobileDensityRange.value = densityRange.value;
  mobileDensityValue.textContent = label;
}

function syncControlsFromSnapshot(snapshot) {
  const controls = snapshot?.controls;
  if (!controls) return;
  if (controls.prompt != null) {
    testPrompt.value = controls.prompt;
    promptShortcutButtons.forEach((button) => {
      button.classList.toggle("active", promptTemplates[button.dataset.promptTemplate] === controls.prompt);
    });
  }
  if (controls.creativity != null) {
    creativityRange.value = controls.creativity;
    mobileCreativityRange.value = controls.creativity;
    creativityValue.textContent = controls.creativity;
    mobileCreativityValue.textContent = controls.creativity;
  }
  if (controls.density != null) {
    densityRange.value = controls.density;
    mobileDensityRange.value = controls.density;
    renderDensity();
  }
}

function refreshPreviewFromControls() {
  const modeKey = modeFromValue(Number(creativityRange.value));
  const previewSeed = modeKey === currentSnapshot?.modeKey ? currentSnapshot?.generationSeed ?? generationCount : generationCount;
  const snapshot = buildSnapshot(chooseVariant(modeKey), modeKey, {
    id: currentSnapshot?.id || Date.now(),
    seed: previewSeed,
    layoutKey: layoutKeyFor(modeKey, previewSeed)
  });
  renderEvaluation(modeKey);
  applySnapshot(snapshot);
  renderDensity();
  updateSkillRun(snapshot);
}

function renderHistory() {
  if (generationHistory.length === 0) {
    historyList.innerHTML = '<div class="history-empty">按下生成預覽後，這裡會保留最近 8 次 UI 版本。</div>';
    return;
  }
  historyList.innerHTML = generationHistory
    .map((item) => `
      <button class="history-card ${item.id === activeGenerationId ? "active" : ""}" type="button" data-history-id="${item.id}">
        <div class="history-card-top">
          <span>#${String(item.count).padStart(2, "0")}</span>
          <span>${item.time}</span>
        </div>
        <div class="history-thumb" aria-hidden="true">
          <span style="height:${42 + (item.count % 3) * 8}px"></span>
          <span style="height:${32 + (item.count % 4) * 7}px"></span>
          <span></span>
        </div>
        <strong>${item.variantName}</strong>
        <small>${item.density} / 遵守度 ${item.score} / 風險 ${item.risk}</small>
      </button>
    `)
    .join("");
}

function renderReferenceFiles(files) {
  [...files].forEach((file, index) => {
    const referenceId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const isImage = file.type.startsWith("image/");
    const chip = document.createElement("button");
    chip.className = "reference-chip active";
    chip.type = "button";
    chip.dataset.kind = "檔案";
    chip.dataset.referenceId = referenceId;
    chip.dataset.referenceType = isImage ? "image" : "document";
    chip.textContent = file.name;
    chip.title = `${file.name} / ${(file.size / 1024).toFixed(1)} KB`;
    chip.addEventListener("click", () => {
      chip.classList.toggle("active");
      chip.setAttribute("aria-pressed", chip.classList.contains("active") ? "true" : "false");
      refreshPreviewFromControls();
    });
    chip.setAttribute("aria-pressed", "true");
    if (isImage) {
      const url = URL.createObjectURL(file);
      const imageInsight = createImageInsight(file, index);
      referenceImages.set(referenceId, { id: referenceId, name: file.name, url, ...imageInsight });
      const thumbnail = document.createElement("img");
      thumbnail.src = url;
      thumbnail.alt = "";
      chip.prepend(thumbnail);
    }
    referenceList.appendChild(chip);
  });
  if (files.length > 0) {
    updateReferenceCenter();
    showToast();
  }
}

function showToast() {
  if (window.bootstrap?.Toast) {
    window.bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 3200 }).show();
    return;
  }
  toastEl.classList.add("show");
  window.setTimeout(() => toastEl.classList.remove("show"), 3200);
}

function reportText(snapshot = currentSnapshot) {
  const context = snapshot?.context || currentContextProfile();
  const active = activeReferences();
  return [
    "Skill UI Lab Compliance Report",
    `Domain: ${context.domain}`,
    `Skill rules: ${context.skill.bullets.length}`,
    `Design signals: ${context.designSignals}`,
    `References: ${active.length}`,
    `Score: ${mockScoreResult.textContent}`,
    `Risk: ${snapshot?.risk || "待評估"}`,
    `Recommendation: ${context.recommendation}`
  ].join("\n");
}

function runMockGeneration() {
  const steps = [
    "解析 Skill 規則與 reference...",
    "套用 DESIGN.md 輕量設計上下文...",
    "依創新度產生 UI 預覽...",
    "計算規則命中與風險..."
  ];
  let index = 0;
  generationOverlay?.classList.remove("d-none");
  if (generationStep) generationStep.textContent = steps[index];
  setReadingProgress(0, "Reading");
  if (runButton) runButton.disabled = true;
  if (runTopButton) runTopButton.disabled = true;

  const stepTimer = setInterval(() => {
    index += 1;
    if (index < steps.length) {
      if (generationStep) generationStep.textContent = steps[index];
      setReadingProgress(Math.min(index, readingSteps.length - 1), "Reading");
    }
  }, 520);

  setTimeout(() => {
    clearInterval(stepTimer);
    generationCount += 1;
    const modeKey = modeFromValue(Number(creativityRange.value));
    const variant = chooseVariant(modeKey);
    const snapshot = buildSnapshot(variant, modeKey);
    renderEvaluation(modeKey);
    renderDensity();
    generationHistory.unshift(snapshot);
    generationHistory.splice(8);
    applySnapshot(snapshot);
    updateSkillRun(snapshot);
    setReadingProgress(readingSteps.length - 1, "Complete");
    generationOverlay?.classList.add("d-none");
    if (runButton) runButton.disabled = false;
    if (runTopButton) runTopButton.disabled = false;
    showToast();
  }, 2300);
}

creativityRange.addEventListener("input", () => {
  mobileCreativityRange.value = creativityRange.value;
  mobileCreativityValue.textContent = creativityRange.value;
  refreshPreviewFromControls();
});

densityRange.addEventListener("input", () => {
  mobileDensityRange.value = densityRange.value;
  renderDensity();
  mobileDensityValue.textContent = densityValue.textContent;
});

mobileCreativityRange.addEventListener("input", () => {
  creativityRange.value = mobileCreativityRange.value;
  mobileCreativityValue.textContent = mobileCreativityRange.value;
  refreshPreviewFromControls();
});

mobileDensityRange.addEventListener("input", () => {
  densityRange.value = mobileDensityRange.value;
  renderDensity();
  mobileDensityValue.textContent = densityValue.textContent;
});

document.querySelectorAll("[data-viewport]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-viewport]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    previewFrame.classList.remove("desktop", "tablet", "mobile");
    previewFrame.classList.add(button.dataset.viewport);
    previewWorkbench.classList.toggle("mobile-mode", button.dataset.viewport === "mobile");
  });
});

document.querySelectorAll(".reference-chip").forEach((chip) => {
  chip.setAttribute("aria-pressed", chip.classList.contains("active") ? "true" : "false");
  chip.addEventListener("click", () => {
    chip.classList.toggle("active");
    refreshPreviewFromControls();
  });
});

skillFile.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  skillText.value = await file.text();
  renderSkillAiView();
  updateVerificationStatus();
  refreshPreviewFromControls();
});

skillText.addEventListener("input", () => {
  renderSkillAiView();
  updateVerificationStatus();
  refreshPreviewFromControls();
});

designFile.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  try {
    const content = await file.text();
    if (content.includes("\0")) {
      designImportState.textContent = `已選擇 ${file.name}，此檔案不是可解析的文字格式。`;
      designSummary.textContent = `${file.name} 已加入本次設計上下文。`;
      designSummaryMeta.textContent = `${(file.size / 1024).toFixed(1)} KB / 非文字檔案`;
      updateVerificationStatus();
      return;
    }
    designText.value = content;
    designImportState.textContent = `已讀取 ${file.name}，尚未套用至預覽。`;
    renderDesignSummary();
    updateVerificationStatus();
  } catch (error) {
    designImportState.textContent = `無法讀取 ${file.name}，請改用文字格式或直接貼上內容。`;
    updateVerificationStatus();
  }
});

designText.addEventListener("input", () => {
  designImportState.textContent = "內容已變更，尚未套用至預覽。";
  renderDesignSummary();
  updateVerificationStatus();
});

referenceChoose.addEventListener("click", (event) => {
  event.stopPropagation();
  referenceFile.click();
});

referenceDrop.addEventListener("click", () => referenceFile.click());

referenceDrop.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    referenceFile.click();
  }
});

referenceFile.addEventListener("change", (event) => {
  renderReferenceFiles(event.target.files);
  referenceFile.value = "";
  updateVerificationStatus();
});

["dragenter", "dragover"].forEach((eventName) => {
  referenceDrop.addEventListener(eventName, (event) => {
    event.preventDefault();
    referenceDrop.classList.add("drag-active");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  referenceDrop.addEventListener(eventName, (event) => {
    event.preventDefault();
    referenceDrop.classList.remove("drag-active");
  });
});

referenceDrop.addEventListener("drop", (event) => {
  renderReferenceFiles(event.dataTransfer.files);
  updateVerificationStatus();
});

historyList.addEventListener("click", (event) => {
  const card = event.target.closest("[data-history-id]");
  if (!card) return;
  const snapshot = generationHistory.find((item) => String(item.id) === card.dataset.historyId);
  if (snapshot) applySnapshot(snapshot);
});

runButton?.addEventListener("click", runMockGeneration);
runTopButton?.addEventListener("click", runMockGeneration);

ruleTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    ruleTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", selected ? "true" : "false");
    });
    ruleViews.forEach((view) => {
      const visible = view.dataset.ruleView === tab.dataset.ruleTab;
      view.classList.toggle("active", visible);
      view.hidden = !visible;
    });
  });
});

skillTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    skillTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", selected ? "true" : "false");
    });
    skillViews.forEach((view) => {
      const visible = view.dataset.skillView === tab.dataset.skillTab;
      view.classList.toggle("active", visible);
      view.hidden = !visible;
    });
    if (tab.dataset.skillTab === "ai") renderSkillAiView();
  });
});

designTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    designTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", selected ? "true" : "false");
    });
    designViews.forEach((view) => {
      const visible = view.dataset.designView === tab.dataset.designTab;
      view.classList.toggle("active", visible);
      view.hidden = !visible;
    });
    if (tab.dataset.designTab === "ai") renderDesignAiView();
  });
});

sourceFileItems.forEach((button) => {
  button.addEventListener("click", () => {
    activeSourceKey = button.dataset.sourceKey || "skill";
    sourceFileItems.forEach((item) => item.classList.toggle("active", item === button));
    renderSourceDetail();
  });
});

sourceDetailTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeSourceDetailTab = tab.dataset.sourceDetailTab || "raw";
    sourceDetailTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", selected ? "true" : "false");
    });
    renderSourceDetail();
  });
});

sourceOpenButton?.addEventListener("click", () => {
  const targetMap = {
    skill: "skillText",
    design: "designText",
    references: "referenceDrop"
  };
  const target = document.querySelector(`#${targetMap[activeSourceKey] || "skillText"}`);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "center" });
  if (typeof target.focus === "function") target.focus({ preventScroll: true });
});

inspectorTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    inspectorTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", selected ? "true" : "false");
    });
    inspectorViews.forEach((view) => {
      const visible = view.dataset.inspectorView === tab.dataset.inspectorTab;
      view.classList.toggle("active", visible);
      view.hidden = !visible;
    });
    renderInspectorPanels(currentSnapshot);
  });
});

verificationFlowSteps?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-verification-step]");
  if (!button) return;
  activeVerificationStep = button.dataset.verificationStep;
  updateVerificationStatus(currentSnapshot);
});

skillOutlineList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-outline-toggle]");
  if (!button) return;
  const detail = document.querySelector(`#${button.getAttribute("aria-controls")}`);
  const expanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", expanded ? "false" : "true");
  detail.hidden = expanded;
});

function setupSourcePanelCollapse() {
  document.querySelectorAll(".source-panel > .panel-block").forEach((panel, index) => {
    const heading = panel.querySelector(":scope > .section-heading");
    if (!heading) return;
    const body = document.createElement("div");
    body.className = "panel-collapse-body";
    body.id = `source-panel-body-${index}`;
    [...panel.children].filter((child) => child !== heading).forEach((child) => body.appendChild(child));
    panel.appendChild(body);

    const button = document.createElement("button");
    button.className = "panel-collapse-button";
    button.type = "button";
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-controls", body.id);
    button.setAttribute("aria-label", `縮合 ${heading.querySelector("h2")?.textContent || "區域"}`);
    button.title = "縮合區域";
    button.innerHTML = '<span aria-hidden="true"></span>';
    heading.appendChild(button);
    button.addEventListener("click", () => {
      const collapsed = panel.classList.toggle("is-collapsed");
      button.setAttribute("aria-expanded", collapsed ? "false" : "true");
      button.setAttribute("aria-label", `${collapsed ? "展開" : "縮合"} ${heading.querySelector("h2")?.textContent || "區域"}`);
      button.title = collapsed ? "展開區域" : "縮合區域";
      body.hidden = collapsed;
    });

    if (panel.dataset.defaultCollapsed === "true") {
      panel.classList.add("is-collapsed");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", `展開 ${heading.querySelector("h2")?.textContent || "區域"}`);
      button.title = "展開區域";
      body.hidden = true;
    }
  });
}

function setupControlPanelCollapse() {
  document.querySelectorAll(".control-panel .collapsible-control-section").forEach((section, index) => {
    const heading = section.querySelector(":scope > .section-heading");
    if (!heading) return;
    const body = document.createElement("div");
    body.className = "control-collapse-body";
    body.id = `control-panel-body-${index}`;
    [...section.children].filter((child) => child !== heading).forEach((child) => body.appendChild(child));
    section.appendChild(body);

    const button = document.createElement("button");
    button.className = "panel-collapse-button";
    button.type = "button";
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-controls", body.id);
    button.setAttribute("aria-label", `縮合 ${heading.querySelector("h2")?.textContent || "區域"}`);
    button.title = "縮合區域";
    button.innerHTML = '<span aria-hidden="true"></span>';
    heading.appendChild(button);

    button.addEventListener("click", () => {
      const collapsed = section.classList.toggle("is-collapsed");
      button.setAttribute("aria-expanded", collapsed ? "false" : "true");
      button.setAttribute("aria-label", `${collapsed ? "展開" : "縮合"} ${heading.querySelector("h2")?.textContent || "區域"}`);
      button.title = collapsed ? "展開區域" : "縮合區域";
      body.hidden = collapsed;
    });

    if (section.dataset.defaultCollapsed === "true") {
      section.classList.add("is-collapsed");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", `展開 ${heading.querySelector("h2")?.textContent || "區域"}`);
      button.title = "展開區域";
      body.hidden = true;
    }
  });
}

function setupReadingProcessCollapse() {
  const section = document.querySelector(".reading-process");
  const button = document.querySelector("#readingCollapseButton");
  const body = document.querySelector("#readingProcessBody");
  if (!section || !button || !body) return;

  const setCollapsed = (collapsed) => {
    section.classList.toggle("is-collapsed", collapsed);
    button.setAttribute("aria-expanded", collapsed ? "false" : "true");
    button.setAttribute("aria-label", `${collapsed ? "展開" : "縮合"}從規則到畫面的轉譯軌跡`);
    button.title = collapsed ? "展開區域" : "縮合區域";
    body.hidden = collapsed;
  };

  setCollapsed(true);

  button.addEventListener("click", () => {
    setCollapsed(!section.classList.contains("is-collapsed"));
  });
}

function applySourcePanelOrder() {
  const sourcePanel = document.querySelector(".source-panel");
  [...sourcePanel.querySelectorAll(":scope > .panel-block")]
    .sort((a, b) => {
      const orderOf = (panel) => {
        if (panel.classList.contains("source-explorer-panel")) return 0;
        if (panel.classList.contains("skill-profile-panel")) return 90;
        if (panel.classList.contains("rule-viewer-panel")) return 91;
        return Number(panel.dataset.sourceOrder || 99);
      };
      return orderOf(a) - orderOf(b);
    })
    .forEach((panel) => sourcePanel.appendChild(panel));
}

testPrompt.addEventListener("input", () => {
  promptShortcutButtons.forEach((button) => button.classList.remove("active"));
  updateSkillRun();
});

promptShortcutButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const template = promptTemplates[button.dataset.promptTemplate];
    if (!template) return;
    testPrompt.value = template;
    promptShortcutButtons.forEach((item) => item.classList.toggle("active", item === button));
    updateSkillRun(currentSnapshot);
    if (trySkillStatus) trySkillStatus.textContent = `已套用${button.textContent.trim()}情境，按生成預覽`;
  });
});

applyDesignButton.addEventListener("click", () => {
  applyDesignPreviewUpdate();
  updateVerificationStatus(currentSnapshot);
  showToast();
});

copyReportButton?.addEventListener("click", async () => {
  const text = reportText();
  try {
    await navigator.clipboard.writeText(text);
    copyReportButton.textContent = "已複製";
  } catch (error) {
    copyReportButton.textContent = "已建立摘要";
  }
  window.setTimeout(() => {
    copyReportButton.textContent = "複製摘要";
  }, 1800);
  showToast();
});

exportReportButton?.addEventListener("click", () => {
  exportReportButton.textContent = "已準備";
  window.setTimeout(() => {
    exportReportButton.textContent = "匯出報告";
  }, 1800);
  showToast();
});

applySourcePanelOrder();
setupSourcePanelCollapse();
setupControlPanelCollapse();
setupReadingProcessCollapse();
renderEvaluation(modeFromValue(Number(creativityRange.value)));
renderHistory();
updateReferenceCenter();
setReadingProgress(2, "Ready");
renderSkillAiView();
renderDesignSummary();
applyDesignTokens(parseDesignTokens(designText.value), { initial: true });
renderComplianceReport();
updateVerificationStatus();

function planningReferences() {
  return activeReferences().map((item) => ({
    name: item.name,
    kind: item.kind,
    type: item.type,
    id: item.id
  }));
}

function buildPlanningState(options = {}) {
  const creativity = Number(creativityRange.value);
  const generationSeed = options.seed ?? generationCount;
  const references = planningReferences();
  const planningContext = window.SkillPlanningLab.analyzeContext({
    skillText: skillText.value,
    designText: appliedDesignText,
    prompt: testPrompt.value,
    references,
    generationCount: generationSeed
  });
  const plan = window.SkillPlanningLab.planUi(planningContext, {
    creativity,
    generationCount: generationSeed
  });
  return { planningContext, plan, references };
}

function buildSnapshot(variant, modeKey, options = {}) {
  const mode = evaluationModes[modeKey];
  const legacyContext = currentContextProfile();
  const appliedDesign = parseDesignUnderstanding(appliedDesignText);
  const designPresentation = parseDesignPresentation(appliedDesignText, appliedDesign.tokens);
  legacyContext.design = appliedDesign;
  const { planningContext, plan, references } = buildPlanningState(options);
  const routeSeed = options.seed ?? generationCount;
  const density = densityFromValue(Number(densityRange.value))[1];
  const designContract = {
    summary: appliedDesign.summary.summary,
    meta: appliedDesign.summary.meta,
    tokens: appliedDesign.tokens,
    presentation: designPresentation,
    revision: designApplyCount
  };
  const imageReferences = [...document.querySelectorAll('.reference-chip.active[data-reference-type="image"]')]
    .map((chip) => referenceImages.get(chip.dataset.referenceId))
    .filter(Boolean);
  const riskPenalty = planningContext.risk === "high" ? -5 : planningContext.risk === "medium" ? -1 : 2;
  const referenceBonus = Math.min(8, references.length * 2);
  const signalBonus = Math.min(6, planningContext.signals.length * 2);
  const creativityPenalty = modeKey === "exploratory" && planningContext.risk === "high" ? -6 : 0;
  const score = Math.max(62, Math.min(98, mode.score + riskPenalty + referenceBonus + signalBonus + creativityPenalty));
  const quality = Math.max(6.9, Math.min(9.5, Number(mode.quality) + signalBonus / 20 + riskPenalty / 25)).toFixed(1);
  const hitTotal = Math.max(10, legacyContext.skill.bullets.length + plan.widgets.length + references.length + 4);
  const hitDone = Math.max(6, Math.min(hitTotal, hitTotal - (planningContext.risk === "high" ? 2 : 1) + Math.floor(referenceBonus / 3)));
  const risk = planningContext.risk === "high" ? "高" : planningContext.risk === "medium" ? "中" : mode.risk;

  return {
    id: options.id || Date.now(),
    count: generationCount,
    time: new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" }),
    variantKey: "planned",
    variantName: `${planningContext.domainLabel} / ${plan.layoutLabel}`,
    variantClass: "variant-planned",
    layoutKey: plan.layout,
    template: plan.layoutLabel,
    modeKey,
    contextKey: planningContext.domain,
    domain: planningContext.domainLabel,
    context: legacyContext,
    designContract,
    planningContext,
    plan,
    density,
    references: references.map((item) => item.name),
    imageReferences,
    refClasses: referenceClasses(references.map((item) => item.name)),
    title: `${planningContext.mainTask}工作台`,
    label: `${planningContext.domainLabel} · ${plan.iaPattern}`,
    nodes: plan.navigation.slice(0, 4),
    tasks: plan.widgets.map((widget) => window.SkillPlanningLab.widgetTitle(widget)).slice(0, 4),
    confidence: `${Math.max(70, Math.min(96, Number.parseInt(mode.confidence, 10) + signalBonus + riskPenalty))}%`,
    note: `${planningContext.reason} 目前採用 ${plan.layoutLabel} / ${plan.iaPattern}。`,
    hit: `${hitDone}/${hitTotal}`,
    quality,
    risk,
    score,
    summary: "",
    items: contextualEvaluationItems(mode.items, legacyContext, references.map((item) => item.name)),
    generationSeed: routeSeed,
    controls: {
      prompt: testPrompt.value,
      creativity: creativityRange.value,
      density: densityRange.value
    }
  };
}

function renderGeneratedLayout(snapshot) {
  return window.SkillPlanningLab.renderLayout(snapshot);
}

function renderPlanningPanels(snapshot = currentSnapshot) {
  if (!snapshot?.planningContext || !snapshot?.plan) return;
  const context = snapshot.planningContext;
  const plan = snapshot.plan;
  const contextDomain = document.querySelector("#contextDomain");
  const contextFactList = document.querySelector("#contextFactList");
  const planningLayout = document.querySelector("#planningLayout");
  const planningFactList = document.querySelector("#planningFactList");
  const decisionSummary = document.querySelector("#decisionSummary");
  const decisionList = document.querySelector("#decisionList");
  if (contextDomain && contextFactList) {
    contextDomain.textContent = context.domainLabel;
    contextFactList.innerHTML = [
      ["使用者", context.primaryUser],
      ["任務", context.mainTask],
      ["流程", context.workflow],
      ["風險", context.risk],
      ["資料", context.dataTypes.join(" / ")],
      ["密度", context.informationDensity]
    ].map(([label, value]) => `<article><span>${label}</span><strong>${escapeHtml(value)}</strong></article>`).join("");
  }

  if (planningLayout && planningFactList) {
    planningLayout.textContent = plan.layoutLabel;
    planningFactList.innerHTML = [
      ["IA", plan.iaPattern],
      ["Navigation", plan.navigation.slice(0, 4).join(" / ")],
      ["Widgets", plan.widgets.map((item) => window.SkillPlanningLab.widgetTitle(item)).join(" / ")],
      ["Priority", plan.priority.join(" / ") || "standard"]
    ].map(([label, value]) => `<article><span>${label}</span><strong>${escapeHtml(value)}</strong></article>`).join("");
  }

  if (decisionSummary && decisionList) {
    decisionSummary.textContent = `${plan.decisions.length} 項決策`;
    decisionList.innerHTML = plan.decisions
      .map((item, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><p>${escapeHtml(item)}</p></article>`)
      .join("");
  }
}

function applySnapshot(snapshot) {
  syncControlsFromSnapshot(snapshot);
  currentSnapshot = snapshot;
  activeGenerationId = snapshot.id;
  generatedUi.classList.remove("variant-pipeline", "variant-matrix", "variant-radar", "variant-review", "variant-planned");
  generatedUi.classList.remove("ref-eden", "ref-agent", "ref-bootstrap");
  generatedUi.classList.add(snapshot.variantClass);
  generatedUi.classList.add(...snapshot.refClasses);
  generatedUi.innerHTML = renderGeneratedLayout(snapshot);
  syncPreviewTokenVars(snapshot.designContract?.tokens || activeDesignTokens);
  updateText("#confidenceValue", snapshot.confidence);
  updateText("#confidenceNote", snapshot.note);
  updateText("#hitMetric", snapshot.hit);
  updateText("#qualityMetric", snapshot.quality);
  updateText("#riskMetric", snapshot.risk);
  if (complianceScore) complianceScore.textContent = snapshot.score;
  if (complianceBar) complianceBar.style.width = `${snapshot.score}%`;
  updateText("#summaryText", snapshot.summary);
  evaluationList.innerHTML = snapshot.items
    .map(([status, title, body]) => `
      <div class="evaluation-item ${status}">
        <strong>${title}</strong>
        <span>${body}</span>
      </div>
    `)
    .join("");
  renderPlanningPanels(snapshot);
  updateReferenceCenter();
  updateEvidence(snapshot);
  updateSkillRun(snapshot);
  updateVerificationStatus(snapshot);
  renderHistory();
}

function renderHistory() {
  const generationDiff = document.querySelector("#generationDiff");
  if (generationHistory.length === 0) {
    historyList.innerHTML = '<div class="history-empty">按下生成預覽後，這裡會保留最近 8 次 UI 規劃。</div>';
    if (generationDiff) generationDiff.innerHTML = '<div class="diff-empty">產生至少 2 次規劃後，這裡會顯示 Layout / Widget 差異。</div>';
    return;
  }
  historyList.innerHTML = generationHistory
    .map((item) => `
      <button class="history-card planned-history-card ${item.id === activeGenerationId ? "active" : ""}" type="button" data-history-id="${item.id}">
        <div class="history-card-top">
          <span>${item.isDemo ? "Demo" : `#${String(item.count).padStart(2, "0")}`}</span>
          <span>${item.time}</span>
        </div>
        <strong>${escapeHtml(item.planningContext.mainTask || item.planningContext.domainLabel)}</strong>
        <div class="history-widget-tags">
          ${item.plan.widgets.slice(0, 3).map((widget) => `<span>${escapeHtml(window.SkillPlanningLab.widgetTitle(widget))}</span>`).join("")}
        </div>
      </button>
    `)
    .join("");

  if (!generationDiff) return;
  if (generationHistory.length < 2) {
    generationDiff.innerHTML = '<div class="diff-empty">再生成一次即可比較 AI 規劃差異。</div>';
    return;
  }
  const [latest, previous] = generationHistory;
  const added = latest.plan.widgets.filter((widget) => !previous.plan.widgets.includes(widget));
  const removed = previous.plan.widgets.filter((widget) => !latest.plan.widgets.includes(widget));
  generationDiff.innerHTML = `
    <article>
      <span>Diff</span>
      <strong>${escapeHtml(previous.plan.layoutLabel)} → ${escapeHtml(latest.plan.layoutLabel)}</strong>
      <div>
        ${added.map((widget) => `<b>+ ${escapeHtml(window.SkillPlanningLab.widgetTitle(widget))}</b>`).join("")}
        ${removed.map((widget) => `<i>- ${escapeHtml(window.SkillPlanningLab.widgetTitle(widget))}</i>`).join("")}
      </div>
    </article>
  `;
}

function initializePlanningPreview() {
  const modeKey = modeFromValue(Number(creativityRange.value));
  const snapshot = buildSnapshot(chooseVariant(modeKey), modeKey, {
    id: currentSnapshot?.id || Date.now(),
    seed: generationCount
  });
  snapshot.isDemo = true;
  snapshot.time = "Demo";
  renderEvaluation(modeKey);
  if (generationHistory.length === 0) generationHistory.unshift(snapshot);
  applySnapshot(snapshot);
  renderDensity();
  setReadingProgress(2, "Ready");
}

initializePlanningPreview();
