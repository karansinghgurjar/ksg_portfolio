import { researchCopyRules } from "./siteConfig.js";

export const projects = [
  {
    id: "cogniplan",
    slug: "cogniplan",
    title: "CogniPlan — Cognitive Task Planning System",
    shortTitle: "CogniPlan",
    category: "Productivity / System Design / Cross-Platform",
    archiveCategory: "Applications",
    featured: true,
    homepageFeatured: true,
    homepageOrder: 2,
    archiveOrder: 2,
    status: "Active Project",
    year: "2026",
    tags: ["Flutter", "Riverpod", "Isar", "Scheduling"],
    actions: {
      caseStudy: true,
      github: false,
      paper: false,
      liveDemo: false,
    },
    shortDescription:
      "An intelligent workflow planning system that converts high-level goals into structured tasks, milestones, and adaptive schedules.",
    tagline:
      "Built to bridge the gap between planning and execution, CogniPlan combines goal decomposition, scheduling logic, dependency handling, and adaptive recovery in a local-first cross-platform architecture.",
    overview:
      "CogniPlan is a cross-platform intelligent planning system designed to transform abstract goals into actionable workflows. The platform emphasizes execution through decomposition, scheduling, monitoring, and adaptation, rather than functioning as a simple task storage interface.",
    problem:
      "Traditional task managers mostly store tasks, but they do not intelligently transform goals into executable plans or adapt well to missed sessions and changing availability.",
    problemStatement:
      "Most task managers are CRUD-centric: they help users record tasks, but they do not deeply support turning goals into executable plans or adapting those plans when real-life schedules change. This creates friction between intention and consistent execution.",
    solution:
      "CogniPlan combines goal decomposition, dependency-aware scheduling, adaptive rescheduling, focus tracking, analytics, and AI-assisted planning into one execution-oriented workflow system.",
    solutionSummary:
      "CogniPlan addresses this by combining goal decomposition, time-aware scheduling, dependency-aware task planning, adaptive rescheduling, focus monitoring, and local-first reliability. The result is a system oriented toward actual progress rather than static task storage.",
    impact: [
      "Transforms goals into milestones, tasks, and feasible schedules",
      "Adapts automatically to missed sessions and time changes",
      "Demonstrates system design beyond basic CRUD productivity apps",
    ],
    highlights: [
      "Transforms goals into milestones, tasks, and feasible schedules.",
      "Adapts automatically to missed sessions and time changes.",
      "Demonstrates system design beyond basic CRUD productivity apps.",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Isar Database",
      "Cross-platform Development",
      "Scheduling Algorithms",
      "Offline-first Architecture",
      "Sync Architecture",
    ],
    features: [
      {
        title: "Streaming",
        description:
          "Real-time screen streaming, region-based updates, and multi-monitor support are treated as core transport behaviors.",
        symbol: "01",
      },
      {
        title: "Control",
        description:
          "Remote input injection and gesture mapping connect client interaction cleanly back to host execution.",
        symbol: "02",
      },
      {
        title: "Data",
        description:
          "File transfer and clipboard sync extend the session beyond basic video transport.",
        symbol: "03",
      },
      {
        title: "Audio",
        description:
          "Loopback capture and jitter buffering support more complete remote-session fidelity.",
        symbol: "04",
      },
      {
        title: "Session",
        description:
          "Reconnect logic and state handling are designed to keep remote sessions stable across interruptions.",
        symbol: "05",
      },
      {
        title: "Safety",
        description:
          "Panic hotkey support and view-only mode provide control boundaries for safer remote operation.",
        symbol: "06",
      },
    ],
    featureGroups: [
      {
        title: "Streaming",
        points: ["Real-time screen streaming", "Region-based updates", "Multi-monitor support"],
      },
      {
        title: "Control",
        points: ["Input injection", "Gesture mapping"],
      },
      {
        title: "Data",
        points: ["File transfer", "Clipboard sync"],
      },
      {
        title: "Audio",
        points: ["Loopback capture", "Jitter buffering"],
      },
      {
        title: "Session",
        points: ["Reconnect logic", "State handling"],
      },
      {
        title: "Safety",
        points: ["Panic hotkey", "View-only mode"],
      },
    ],
    technicalHighlights: [
      "Modular architecture with clear feature separation",
      "Offline-first data management using Isar",
      "Scalable reactive state management using Riverpod",
      "Scheduling engine handling constraints, dependencies, and time windows",
      "Synchronization layer with conflict handling and offline queue",
      "AI-assisted planning module for natural-language goal structuring",
      "Backup/restore system with validation and safe recovery",
      "Stabilization and testing passes for runtime reliability",
    ],
    engineeringGroups: [
      {
        title: "Architecture",
        summary: "System boundaries were designed for maintainability rather than a single-feature app structure.",
        points: [
          "Modular architecture with clear separation of concerns",
          "Feature-based organization with maintainable system boundaries",
        ],
      },
      {
        title: "Data Layer",
        summary: "Persistence was built around offline reliability, safe recovery, and long-running workflow continuity.",
        points: [
          "Offline-first data management using Isar database",
          "Safe recovery, backup, and restore strategy with validation",
        ],
      },
      {
        title: "State + Logic",
        summary: "Reactive application state supports planning workflows, schedule generation, and dependency-aware execution.",
        points: [
          "Scalable state management using Riverpod",
          "Scheduling engine for constraints, dependencies, and time windows",
          "AI-assisted planning module for natural-language goal structuring",
        ],
      },
      {
        title: "Reliability + Sync",
        summary: "The system is designed to remain usable under offline conditions and recover cleanly across sync scenarios.",
        points: [
          "Synchronization layer with conflict handling and offline queue",
          "Runtime stability improvements through stabilization and testing passes",
        ],
      },
    ],
    workflowSteps: [
      "User Goal",
      "Goal Decomposition Engine",
      "Milestones and Tasks",
      "Dependency + Constraint Processing",
      "Adaptive Scheduling Engine",
      "Focus Sessions and Progress Tracking",
      "Analytics + Rescheduling + Recovery",
    ],
    workflowSystems: [
      "AI-assisted Planning",
      "Local Database",
      "Sync / Backup Layer",
    ],
    media: {
      coverImage: {
        title: "Cover Image",
        caption: "Hero-quality product visual for the CogniPlan dashboard or planning workspace.",
        asset: "",
        placeholder: "Dashboard Cover",
      },
      architectureDiagram: {
        title: "Architecture Diagram",
        caption: "System architecture visual showing planning, scheduling, data, and sync layers.",
        asset: "",
        placeholder: "Architecture Diagram",
      },
      screenshots: [
        {
          title: "Dashboard Screenshot",
          caption: "Primary planning overview with goals, milestones, and execution progress.",
          asset: "",
          placeholder: "Dashboard",
        },
        {
          title: "Goal Creation Screen",
          caption: "Goal setup flow for decomposition, milestones, and structured planning inputs.",
          asset: "",
          placeholder: "Goal Creation",
        },
        {
          title: "Scheduling / Timetable Screen",
          caption: "Adaptive scheduling view based on user availability and time constraints.",
          asset: "",
          placeholder: "Scheduling",
        },
        {
          title: "Analytics Screen",
          caption: "Performance tracking, productivity analytics, and execution insights.",
          asset: "",
          placeholder: "Analytics",
        },
        {
          title: "Task Breakdown Screen",
          caption: "Detailed milestone and task hierarchy with dependency-aware execution structure.",
          asset: "",
          placeholder: "Task Breakdown",
        },
      ],
      mockups: [
        {
          type: "Desktop",
          title: "Desktop Mockup",
          caption: "Windows-oriented product view for the main workflow planning experience.",
          asset: "",
          placeholder: "Desktop Mockup",
        },
        {
          type: "Mobile",
          title: "Mobile Mockup",
          caption: "Android-oriented product view for on-the-go planning and execution tracking.",
          asset: "",
          placeholder: "Mobile Mockup",
        },
      ],
    },
    architecture: [
      "Feature-based Flutter architecture with separate planning, scheduling, execution, analytics, and sync modules.",
      "Reactive state management through Riverpod to keep planning flows, focus tracking, and derived schedule state predictable.",
      "Offline-first persistence with Isar for local reliability, fast reads, and recovery-safe workflow storage.",
      "A scheduling layer that evaluates constraints, dependencies, time windows, and missed sessions before regenerating plans.",
      "An optional sync and backup path designed to support cross-device continuity with conflict-aware recovery.",
    ],
    notableReason:
      "This project goes beyond a standard task manager by integrating intelligent planning, scheduling, recovery, and adaptation into a real-world execution system.",
    notableStatement:
      "CogniPlan stands out because it moves beyond standard CRUD-based productivity software and focuses on intelligent execution. It integrates planning, decomposition, scheduling, adaptation, and workflow recovery into a cohesive real-world system, demonstrating both software architecture and applied intelligence.",
    whyThisProjectMatters:
      "CogniPlan represents the kind of systems work that goes beyond shipping screens. It combines product thinking, workflow design, offline-first engineering, and adaptive logic into a practical execution engine. For recruiters, it demonstrates capability in architecture, state management, scheduling systems, and user-oriented problem solving.",
    role: "Product architect and full-stack workflow systems builder",
    duration: "2026 · Active build",
    githubUrl: "",
    codeUrl: "",
    liveUrl: "",
    privateCode: false,
    metrics: [
      "Goal decomposition engine",
      "Adaptive rescheduling",
      "Cross-platform workflow system",
    ],
    thumbnail: "CogniPlan",
    outcome:
      "Designed an execution-focused planning system that moves beyond task storage into intelligent workflow generation, adaptation, and recovery.",
    whatIBuilt: [
      "Goal decomposition and milestone generation flows that turn broad objectives into structured execution plans.",
      "A scheduling engine that works with user availability, dependencies, time windows, and missed-session recovery.",
      "Cross-platform architecture for Android and Windows with local-first persistence, optional sync, and backup flows.",
    ],
    challenges: [
      "Balancing intelligent automation with user control so planning feels adaptive without becoming opaque.",
      "Designing scheduling and recovery logic that remains reliable under changing availability and incomplete execution.",
      "Structuring a modular architecture that can support AI-assisted planning, sync, and analytics without becoming tightly coupled.",
    ],
    actionLabels: {
      live: "Active Project",
      code: "Source Code",
    },
    ctaTitle: "Discuss the system design or implementation",
    ctaCopy:
      "This project is a strong example of how I approach architecture, intelligent workflows, and product-oriented engineering. I am happy to discuss the planning engine, the state model, or how the system can evolve into a production collaboration product.",
    gridClass: "md:col-span-3 md:row-span-2",
  },
  {
    slug: "behavioral-authentication-app",
    archiveCategory: "Applications",
    archiveOrder: 4,
    title: "Real-time Behavioral Biometric Authentication App",
    category: "Security",
    shortDescription:
      "Android authentication prototype using keystroke dynamics to validate user identity in real time.",
    problem:
      "Traditional mobile login flows add friction and still fail to verify whether the active user is actually the registered account holder after login.",
    solution:
      "Built an Android app that captures behavioral typing signals, stores interaction data locally, and evaluates user patterns as an additional authentication layer during usage.",
    techStack: ["Java", "SQLite", "XML", "Android Studio"],
    highlights: [
      "Designed registration and authentication flows for collecting consistent typing behavior signals.",
      "Implemented local persistence for behavioral samples and user session data with SQLite.",
      "Packaged the prototype as a research-oriented mobile security concept with a working UI.",
    ],
    role: "Product designer, Android developer, and data capture workflow builder",
    duration: "Academic project",
    status: "Research Prototype",
    liveUrl: "#/projects/sar-project?section=manuscript-note-heading",
    codeUrl: "",
    featured: false,
    metrics: ["Behavioral biometrics", "On-device data capture", "Android prototype"],
    thumbnail: "Behavioral Auth",
    outcome:
      "Demonstrated how passive behavioral biometrics can complement explicit login systems in a mobile environment.",
    whatIBuilt: [
      "User onboarding, registration, and repeated typing-sample collection screens.",
      "Authentication UI that compares live typing interactions against stored user behavior.",
      "SQLite-backed local data layer for capturing and organizing biometric interaction samples.",
    ],
    challenges: [
      "Creating a UX flow that collected enough behavioral data without overwhelming the user.",
      "Structuring mobile-side data capture so samples could be stored and reused consistently.",
      "Balancing research experimentation goals with a functional Android product experience.",
    ],
    actionLabels: {
      live: "Research Prototype",
      code: "Private Repository",
    },
    gridClass: "md:col-span-3",
  },
  {
    id: "sar-project",
    slug: "sar-project",
    legacySlugs: ["avian-vocalization-classification"],
    title: "Task-Aware SAR-to-RGB Translation Using Transformer-Guided Conditional Diffusion",
    shortTitle: "Task-Aware SAR-to-RGB Translation",
    category: researchCopyRules.sarManuscript.categoryLabel,
    archiveCategory: "Research",
    featured: true,
    homepageFeatured: true,
    homepageOrder: 1,
    archiveOrder: 1,
    homepagePriority: 120,
    signature: true,
    actions: {
      caseStudy: true,
      github: false,
      paper: true,
      liveDemo: false,
    },
    tags: ["Diffusion", "Transformers", "Computer Vision", "Remote Sensing"],
    shortDescription:
      "A task-aware SAR image colorization framework integrating semantic land-cover guidance, transformer-based global context modeling, spatial-frequency interaction, and conditional diffusion-based RGB synthesis.",
    tagline:
      "Research manuscript on semantically guided SAR image colorization for Earth observation.",
    homepageBadgeLabel: "Research Manuscript",
    homepageBullets: [
      "Semantic land-cover guided colorization",
      "Transformer-based global context modeling",
      "Conditional diffusion with spatial-frequency interaction",
    ],
    homepageTags: ["Diffusion", "Computer Vision", "Remote Sensing", "Transformers"],
    overview:
      "This project addresses SAR-to-RGB translation for Earth observation, where synthetic optical imagery is generated from SAR input to improve interpretability and downstream usability. The proposed framework emphasizes not only visual quality, but also semantic consistency, structural preservation, and task relevance.",
    problem:
      "SAR imagery is robust to weather and illumination changes, but it is hard to interpret because of speckle noise, geometric distortions, and the absence of natural color cues.",
    problemStatement:
      "Most task-relevant remote sensing workflows still depend on optical-style interpretability, but SAR data is difficult for humans to read directly. Earlier translation methods often oversmooth structure, hallucinate textures, or rely on weak conditioning signals, which limits semantic consistency and downstream usefulness.",
    solution:
      "The framework combines local SAR feature extraction, global transformer context, land-cover semantic fusion, spatial-frequency interaction, and conditional diffusion-based synthesis to generate more coherent RGB outputs.",
    solutionSummary:
      "The proposed system combines an Attention U-Net for local feature extraction and despeckling, a Swin Transformer for global context modeling, land-cover semantic fusion, a wavelet-based spatial-frequency interaction module, conditional diffusion for RGB synthesis, and a lightweight refinement stage for final output quality.",
    techStack: [
      "Python",
      "PyTorch",
      "Attention U-Net",
      "Swin Transformer",
      "Conditional Diffusion",
      "Wavelet Features",
      "Remote Sensing",
      "Semantic Conditioning",
    ],
    impact: [
      "Combines local SAR feature modeling with global transformer context",
      "Introduces semantic and spectral conditioning for task-aware RGB synthesis",
      "Shows research depth across architecture design, conditioning strategy, and generative modeling",
    ],
    highlights: [
      "Attention U-Net and Swin Transformer are combined to preserve local structure while modeling global scene context.",
      "Land-cover semantics and Sentinel-2 spectral cues strengthen conditioning for more task-aware synthesis.",
      "Conditional diffusion and lightweight refinement are used to improve consistency beyond standard translation baselines.",
    ],
    features: [
      {
        title: "Local SAR Feature Extraction",
        description:
          "An Attention U-Net extracts localized SAR structure while suppressing speckle-heavy noise patterns.",
        symbol: "01",
      },
      {
        title: "Global Context Modeling",
        description:
          "A Swin Transformer encoder captures long-range dependencies and broader scene relationships.",
        symbol: "02",
      },
      {
        title: "Semantic Fusion",
        description:
          "Land-cover maps and spectral priors provide stronger conditioning than image-only translation.",
        symbol: "03",
      },
      {
        title: "Spatial-frequency Interaction",
        description:
          "Wavelet-based interaction helps preserve structure and useful detail across frequency bands.",
        symbol: "04",
      },
      {
        title: "Conditional Diffusion Synthesis",
        description:
          "Diffusion-based generation improves output realism while keeping conditioning grounded in SAR content.",
        symbol: "05",
      },
      {
        title: "Refinement Stage",
        description:
          "A lightweight refinement module sharpens the final RGB output and stabilizes visual coherence.",
        symbol: "06",
      },
    ],
    methodologyCards: [
      {
        title: "SAR Feature Extraction and Despeckling",
        description:
          "Attention U-Net extracts multi-scale SAR features while suppressing irrelevant regions through attention gates.",
        symbol: "M1",
      },
      {
        title: "Global Context Modeling",
        description:
          "Swin Transformer captures long-range spatial dependencies such as rivers, agricultural layouts, and urban structures.",
        symbol: "M2",
      },
      {
        title: "Semantic Land-Cover Fusion",
        description:
          "Land-cover labels are embedded and fused to guide semantically coherent color assignment.",
        symbol: "M3",
      },
      {
        title: "Spatial-Frequency Interaction",
        description:
          "Wavelet-based decomposition preserves edges and fine-scale details that standard diffusion models may oversmooth.",
        symbol: "M4",
      },
      {
        title: "Conditional Diffusion-Based RGB Generation",
        description:
          "A conditional denoising diffusion model predicts noise under fused conditioning, with FiLM-based conditioning injection and DDIM inference.",
        symbol: "M5",
      },
      {
        title: "Refinement Module",
        description:
          "Shallow convolutional post-processing sharpens local contrast and boundaries.",
        symbol: "M6",
      },
    ],
    technicalHighlights: [
      "Attention U-Net for local SAR feature extraction and despeckling",
      "Swin Transformer encoder for global context representation",
      "Land-cover semantic fusion with Sentinel-2 spectral conditioning paths",
      "Spatial-frequency interaction module using wavelet representations",
      "Conditional diffusion model for guided RGB synthesis",
      "Lightweight refinement module for final-output enhancement",
      "Research framing focused on semantic consistency, structural preservation, and task relevance",
      "System design positioned for both visual quality and downstream interpretability",
    ],
    engineeringGroups: [
      {
        title: "Architecture",
        summary: "The pipeline is built as a staged research architecture rather than a single black-box image translator.",
        points: [
          "Attention U-Net for localized SAR feature extraction and despeckling",
          "Swin Transformer encoder for global context modeling across the scene",
        ],
      },
      {
        title: "Conditioning",
        summary: "The model uses richer guidance than simple image-to-image translation.",
        points: [
          "Land-cover semantic fusion for scene-aware conditioning",
          "Sentinel-2 spectral data used as an additional conditioning path",
        ],
      },
      {
        title: "Generation",
        summary: "The synthesis path is designed to preserve structure while improving realism and task relevance.",
        points: [
          "Wavelet-based spatial-frequency interaction to preserve useful detail",
          "Conditional diffusion model for semantically guided RGB generation",
          "Lightweight refinement module for final-output cleanup",
        ],
      },
      {
        title: "Research Value",
        summary: "The project is positioned as a serious research system rather than a model demo.",
        points: [
          "Targets semantic consistency, structural preservation, and interpretability together",
          "Demonstrates architectural reasoning beyond standard GAN-style translation baselines",
        ],
      },
    ],
    workflowTitle: "Architecture Diagram",
    workflowIntro:
      "The web-native diagram below mirrors the manuscript pipeline: SAR input is processed through local feature extraction, transformer context encoding, semantic conditioning, frequency-aware interaction, diffusion-based synthesis, and final refinement.",
    workflowSteps: [
      "SAR Input (VV, VH)",
      "Attention U-Net",
      "Swin Transformer Encoder",
      "Land-Cover Semantic Fusion",
      "Spatial-Frequency Interaction",
      "Conditional Diffusion Model",
      "Refinement Module",
      "Final RGB Output",
    ],
    workflowSystems: [
      "Land-cover Map",
      "Sentinel-2 Spectral Conditioning Path",
      "Semantic Guidance Path",
    ],
    experimentalSetup: [
      {
        label: "Dataset",
        value: "SEN12MS dataset",
      },
      {
        label: "Inputs / Outputs",
        value:
          "Dual-polarization SAR (VV/VH) as input, Sentinel-2 optical imagery with RGB bands 3, 2, 1 as target, and land-cover labels as semantic input.",
      },
      {
        label: "Spatial Configuration",
        value:
          "256 x 256 sample size with 128 x 128 random training crops and non-overlapping geographic splits.",
      },
      {
        label: "Training Setup",
        value:
          "Diffusion training configured with T = 1000 timesteps on an RTX 4090 RunPod instance.",
      },
      {
        label: "Inference Setup",
        value: "DDIM inference, with inference time reported per 256 x 256 patch in Table I.",
      },
      {
        label: "Compute Environment",
        value: "Training reported on an RTX 4090 RunPod environment.",
      },
    ],
    resultsSummary:
      "Manuscript-reported evaluation compares the proposed task-aware diffusion framework against U-Net, Pix2Pix, Vanilla Diffusion, and Transformer Regression baselines, with ablations covering Swin Transformer removal, land-cover fusion removal, spatial-frequency interaction removal, and auxiliary L1 loss removal.",
    resultsMetrics: [
      {
        label: "Image Fidelity",
        value: "PSNR + SSIM",
        note: "Manuscript-reported evaluation tracks reconstruction fidelity and structural similarity.",
      },
      {
        label: "Perceptual Quality",
        value: "LPIPS",
        note: "Perceptual distance is reported to reflect visual realism beyond pixel-space error.",
      },
      {
        label: "Downstream Utility",
        value: "Task-aware comparison",
        note: "Evaluation also considers whether the outputs remain useful for downstream interpretation.",
      },
    ],
    baselineComparisons: [
      {
        model: "U-Net",
        psnr: "Reported in manuscript",
        ssim: "Reported in manuscript",
        lpips: "Reported in manuscript",
        downstream: "Convolutional baseline for structural reconstruction",
      },
      {
        model: "Pix2Pix",
        psnr: "Reported in manuscript",
        ssim: "Reported in manuscript",
        lpips: "Reported in manuscript",
        downstream: "GAN baseline for paired image translation",
      },
      {
        model: "Vanilla Diffusion",
        psnr: "Reported in manuscript",
        ssim: "Reported in manuscript",
        lpips: "Reported in manuscript",
        downstream: "Diffusion baseline without the full task-aware conditioning stack",
      },
      {
        model: "Transformer Regression",
        psnr: "Reported in manuscript",
        ssim: "Reported in manuscript",
        lpips: "Reported in manuscript",
        downstream: "Transformer-based regression comparison",
      },
      {
        model: "Proposed Task-Aware Diffusion",
        psnr: "Reported in manuscript",
        ssim: "Reported in manuscript",
        lpips: "Reported in manuscript",
        downstream: "Strongest overall manuscript-reported tradeoff across visual and task-aware objectives",
      },
    ],
    ablationCards: [
      {
        title: "Without Swin Transformer",
        description:
          "Table III indicates that removing the transformer context module weakens global scene reasoning and harms the final quality tradeoff.",
      },
      {
        title: "Without Land-Cover Fusion",
        description:
          "The ablation supports the value of semantic guidance for more coherent and task-relevant color assignment.",
      },
      {
        title: "Without SFI Module",
        description:
          "Removing spatial-frequency interaction reduces the model’s ability to preserve detail and edge-aware structure.",
      },
      {
        title: "Without Auxiliary L1 Loss",
        description:
          "The manuscript reports that auxiliary reconstruction guidance still contributes to output stability and quality.",
      },
    ],
    qualitativeGallery: [],
    qualitativeOutputs: [
      {
        title: "SAR Input",
        caption: "Representative SAR input sample used for qualitative visual comparison.",
        asset: "",
        placeholder: "SAR Input",
      },
      {
        title: "Ground-Truth RGB",
        caption: "Reference Sentinel-2 RGB target used as the qualitative comparison baseline.",
        asset: "",
        placeholder: "Ground-Truth RGB",
      },
      {
        title: "Generated Output",
        caption: "Model-generated RGB output from the proposed task-aware diffusion framework.",
        asset: "",
        placeholder: "Generated Output",
      },
    ],
    architecture: [
      "SAR input is first processed by an Attention U-Net to extract local features and reduce speckle-heavy noise.",
      "A Swin Transformer encoder then models broader spatial context and long-range dependencies across the scene.",
      "Land-cover semantic fusion injects task-aware priors so synthesis is aligned with scene semantics rather than visual plausibility alone.",
      "A spatial-frequency interaction module uses wavelet representations to preserve detail across structural and textural bands.",
      "The conditioned diffusion model generates RGB outputs, followed by a lightweight refinement module for improved final quality.",
    ],
    role: "Author / Researcher / Developer",
    duration: "2026 · Research project",
    status: researchCopyRules.sarManuscript.statusLabel,
    authorCredit: researchCopyRules.sarManuscript.authorCredit,
    liveUrl: "",
    codeUrl: "",
    featured: true,
    metrics: ["Semantic conditioning", "Conditional diffusion", "Transformer-guided synthesis"],
    thumbnail: "SAR-to-RGB Research",
    outcome:
      "Developed a recruiter-facing research case study that demonstrates generative modeling depth, conditioning strategy design, and system-level reasoning for remote sensing translation.",
    whatIBuilt: [
      "A manuscript-derived research architecture for semantically guided SAR-to-RGB translation.",
      "A staged pipeline combining local feature extraction, transformer context modeling, conditioning fusion, diffusion synthesis, and output refinement.",
      "A research framing centered on interpretability, structural fidelity, and downstream usability for Earth observation workflows.",
    ],
    challenges: [
      "Designing a translation pipeline that improves realism without sacrificing structural or semantic fidelity.",
      "Conditioning diffusion-based synthesis strongly enough to avoid visually plausible but task-irrelevant outputs.",
      "Framing the system as both a research contribution and a clear engineering architecture for recruiters to understand.",
    ],
    media: {},
    notableReason:
      "AetherLink demonstrates the design of a full remote desktop system from the ground up, combining systems programming, networking, real-time streaming, and secure communication. Unlike typical application-level projects, it operates at a lower level of abstraction, highlighting expertise in protocol design, performance optimization, and cross-platform system architecture.",
    notableStatement:
      "AetherLink demonstrates the design of a full remote desktop system from the ground up, combining systems programming, networking, real-time streaming, and secure communication. Unlike typical application-level projects, it operates at a lower level of abstraction, highlighting expertise in protocol design, performance optimization, and cross-platform system architecture.",
    whyThisProjectMatters:
      "For recruiters, this project signals strong research taste and technical depth. It shows the ability to reason about model architecture, conditioning design, multimodal fusion, and downstream usability in a difficult computer vision domain.",
    researchContext:
      "SAR works under cloud cover and illumination constraints, but its outputs are difficult for humans to interpret directly. Optical-like translation can improve usability, yet many earlier methods trade off realism, structural consistency, and downstream usefulness. This work is notable because it approaches SAR-to-RGB translation as a task-aware remote sensing problem rather than only a visual image-translation problem. The framework combines semantic conditioning, global context modeling, and frequency-aware processing to improve both interpretability and downstream analytical usefulness.",
    manuscriptNote: researchCopyRules.sarManuscript.manuscriptNote,
    authorshipPanel: {
      role: "Author / Researcher / Developer",
      affiliation: "Department of Computer Science and Engineering, REVA University, Bengaluru",
      manuscriptStatus: researchCopyRules.sarManuscript.statusLabel,
      researchAreas: [
        "Computer Vision",
        "Remote Sensing",
        "Diffusion Models",
        "Transformer Architectures",
      ],
    },
    actionLabels: {
      live: researchCopyRules.sarManuscript.manuscriptCtaLabel,
      code: "Code on Request",
    },
    gridClass: "md:col-span-3 md:row-span-2",
  },
  {
    id: "aetherlink",
    slug: "aetherlink",
    title: "AetherLink",
    subtitle: "Secure Cross-Platform Remote Desktop & Control System",
    category: "Systems Engineering / Networking / Security",
    archiveCategory: "Systems",
    featured: true,
    homepageFeatured: false,
    homepageOrder: 3,
    archiveOrder: 3,
    signature: false,
    homepagePriority: 110,
    priority: 2,
    status: "In Development",
    projectType: "Systems Project",
    year: "2026",
    tags: ["Systems", "Networking", "Security", "Cross-Platform"],
    actions: {
      caseStudy: true,
      github: false,
      paper: false,
      liveDemo: false,
    },
    shortDescription:
      "A secure, low-latency remote desktop system enabling real-time screen streaming and control between Windows and Android devices.",
    tagline:
      "Custom protocol, low-latency streaming, and end-to-end secure remote control built from scratch.",
    overview:
      "AetherLink is a secure, low-latency remote desktop system designed for real-time screen streaming and device control between Windows and Android platforms. Built using Rust and Flutter, the system focuses on performance, modular architecture, and end-to-end security through a custom communication protocol and optimized streaming pipeline.",
    problem:
      "Existing tools such as TeamViewer and AnyDesk are closed systems with opaque protocols and limited control over performance and security decisions.",
    problemStatement:
      "Building a remote desktop stack from scratch means solving for real-time streaming, low latency, secure communication, cross-platform input handling, and bandwidth efficiency without relying on a black-box platform.",
    solution:
      "AetherLink uses a custom binary protocol, asynchronous Rust networking, secure TLS communication, and platform-specific integrations to support real-time screen streaming and control across Windows and Android devices.",
    solutionSummary:
      "The system combines a custom transport layer, low-latency screen streaming, secure communication, and cross-platform client control into one engineering-focused remote access stack. It is positioned as a systems project first, with product polish layered on top of protocol and runtime decisions.",
    impact: [
      "Designed a full remote desktop system from scratch",
      "Built a custom binary protocol for efficient real-time communication",
      "Implemented secure communication with TLS, certificate pinning, and device trust",
    ],
    highlights: [
      "Designed a full remote desktop system from scratch across transport, streaming, control, and trust boundaries.",
      "Built a custom binary protocol for efficient real-time communication rather than relying on generic app-layer messaging.",
      "Implemented secure communication with TLS, certificate pinning, and device trust for safer remote control sessions.",
    ],
    techStack: [
      "Rust",
      "Tokio",
      "Flutter",
      "Dart",
      "Windows APIs",
      "TCP/TLS Networking",
      "Systems Programming",
      "Concurrency",
      "Custom Protocol Design",
    ],
    caseStudyTags: ["Systems", "Networking", "Security", "Cross-Platform"],
    engineeringSectionTitle: "Core Engineering Areas",
    workflowTitle: "System Architecture",
    workflowIntro:
      "AetherLink is structured as a secure remote-control pipeline: Android connects over TLS to a Rust host runtime, which captures, encodes, and streams frames while also receiving and executing remote input.",
    workflowSteps: [
      "Android Client",
      "Secure TLS Connection",
      "Host Server (Rust)",
      "Capture -> Encode -> Stream",
      "Client Decode -> Render",
      "User Input -> Host Execution",
    ],
    workflowSystems: [
      "File Transfer",
      "Clipboard Sync",
      "Audio Streaming",
      "Auth + Device Trust",
    ],
    architectureBreakdownTitle: "Architecture Breakdown",
    architectureBreakdown: [
      {
        title: "Host (Rust - Windows)",
        summary:
          "The Windows host runtime owns capture, encoding, streaming, execution, and trusted session control.",
        points: [
          "Desktop capture via Desktop Duplication API",
          "JPEG encoding for efficient frame transport",
          "Async streaming with Tokio",
          "Input handling through SendInput",
          "Authentication and encryption for trusted sessions",
          "File, clipboard, and audio subsystems",
        ],
      },
      {
        title: "Client (Flutter - Android)",
        summary:
          "The Android client manages secure connectivity, rendering, remote interaction, and device-level session control.",
        points: [
          "TLS connection to the host runtime",
          "Stream decoding and rendering on the client",
          "Gesture-to-input translation for remote control",
          "Host management and connection lifecycle handling",
          "File transfer and clipboard interaction support",
        ],
      },
    ],
    protocolDesign: {
      title: "Custom Protocol Design",
      frameFormat: [
        "[1 byte message type]",
        "[4 bytes payload length]",
        "[payload]",
      ],
      overview:
        "AetherLink uses a compact binary framing format to keep transport overhead low while preserving explicit control over parsing, routing, and future protocol growth.",
      principles: [
        "Low overhead for real-time communication",
        "Precise control over framing and transport behavior",
        "Extensibility for additional message families without redesigning the wire format",
      ],
      messageTypes: [
        "Video Frames",
        "Input Events",
        "Clipboard",
        "File Transfer",
        "Audio Packets",
      ],
    },
    performanceOptimizations: [
      {
        title: "Region-based Updates",
        description:
          "Dirty-rectangle style updates reduce unnecessary frame transmission by focusing on changed screen regions.",
      },
      {
        title: "Adjustable FPS / Resolution",
        description:
          "Streaming settings can be tuned to balance responsiveness, clarity, and available bandwidth.",
      },
      {
        title: "Adaptive Streaming",
        description:
          "The pipeline can respond to runtime conditions instead of pushing a fixed transport strategy under all network states.",
      },
      {
        title: "JPEG Compression Tuning",
        description:
          "Compression settings are treated as a practical latency and bandwidth control point rather than a fixed default.",
      },
      {
        title: "Idle-mode Optimization",
        description:
          "When the desktop is relatively static, the system can reduce unnecessary work to preserve efficiency.",
      },
    ],
    securityModel: [
      {
        title: "TLS Encryption",
        description:
          "Transport security is enforced at the connection layer so control traffic and streamed data are protected in transit.",
      },
      {
        title: "Certificate Pinning",
        description:
          "Pinned certificates reduce the risk of trusting an unexpected endpoint during remote-session setup.",
      },
      {
        title: "Token Authentication",
        description:
          "Session access is gated through explicit authentication rather than assuming network reachability implies trust.",
      },
      {
        title: "Device Pairing",
        description:
          "Public-key-based device pairing provides a stronger trust relationship between known clients and the host.",
      },
      {
        title: "MITM Prevention",
        description:
          "The trust model is designed to make man-in-the-middle interference materially harder during connection establishment.",
      },
    ],
    roadmap: [
      "Expand streaming resilience under variable network conditions",
      "Refine multi-monitor coordination and session management",
      "Deepen file, clipboard, and audio subsystem integration",
      "Harden trust onboarding and device-pairing workflows",
    ],
    engineeringGroups: [
      {
        title: "Systems Programming",
        summary:
          "The runtime core is built around low-level control, predictable performance, and safe concurrency.",
        points: [
          "Rust for systems-level implementation with strong memory-safety guarantees",
          "Performance-oriented design for long-running remote-control sessions",
          "Async runtime built on Tokio for concurrent networking and session handling",
        ],
      },
      {
        title: "Networking & Protocols",
        summary:
          "Communication is designed around a custom transport layer rather than generic app messaging.",
        points: [
          "Custom binary protocol for efficient real-time communication",
          "Message framing for structured transport and control events",
          "TCP/TLS communication across secure remote sessions",
        ],
      },
      {
        title: "Real-Time Streaming",
        summary:
          "Screen delivery is optimized around responsiveness and practical remote-control latency.",
        points: [
          "JPEG encoding for efficient frame transport",
          "Frame streaming pipeline for continuous remote display updates",
          "Latency optimization across capture, transport, and rendering flow",
        ],
      },
      {
        title: "Security",
        summary:
          "Trust and transport protection are treated as core system behavior, not optional add-ons.",
        points: [
          "TLS encryption for session-level transport security",
          "Certificate pinning for stronger endpoint verification",
          "Token authentication and a device trust model for controlled access",
        ],
      },
      {
        title: "Cross-Platform Design",
        summary:
          "The system is structured to support Windows hosting and Android control from a shared protocol foundation.",
        points: [
          "Windows host runtime integration",
          "Android client behavior for remote viewing and control",
          "Protocol abstraction to keep platform-specific concerns separate from core transport logic",
        ],
      },
    ],
    role: "Systems engineer responsible for protocol design, secure networking, and cross-platform runtime integration",
    duration: "2026 · In development",
    githubUrl: "",
    codeUrl: "",
    liveUrl: "",
    privateCode: false,
    metrics: [
      "Custom protocol design",
      "Low-latency streaming",
      "Secure remote control",
    ],
    thumbnail: "AetherLink Systems",
    outcome:
      "Positions low-level engineering ability across networking, concurrency, security, and platform integration in a real remote-control system.",
    whatIBuilt: [
      "A custom binary protocol for session control, streaming coordination, and efficient message exchange.",
      "A Rust and Tokio networking core for concurrent communication, transport handling, and secure session management.",
      "Cross-platform client behavior for Windows and Android remote viewing and control workflows.",
    ],
    challenges: [
      "Balancing low-latency streaming goals with secure communication and stable transport behavior.",
      "Designing a protocol that stays efficient while still supporting trust establishment, control events, and cross-platform evolution.",
      "Integrating platform-specific screen/control paths into one coherent systems architecture.",
    ],
    actionLabels: {
      live: "In Development",
      code: "Source Code",
    },
    caseStudyActions: {
      primary: "View Case Study",
      showManuscriptSummary: false,
      showArchitecture: false,
      contactLabel: "Contact",
    },
    gridClass: "md:col-span-3",
  },
  {
    slug: "vault-box-web-app",
    archiveCategory: "Applications",
    archiveOrder: 5,
    title: "Vault Box Web App",
    category: "Full Stack",
    shortDescription:
      "Secure web app for storing sensitive information with account-based access and deployment-ready architecture.",
    problem:
      "People often save sensitive data in fragmented notes or spreadsheets without structured access control or a purpose-built security-oriented workflow.",
    solution:
      "Built a React and Next.js web app with authentication, protected storage flows, PostgreSQL data persistence, and deployment through Supabase and Vercel.",
    techStack: ["React.js", "Next.js", "PostgreSQL", "Supabase", "Vercel"],
    highlights: [
      "Implemented end-to-end email-based authentication and protected storage workflows.",
      "Connected frontend UI with backend data persistence using PostgreSQL and Supabase.",
      "Deployed the app to Vercel as a product-style full stack delivery.",
    ],
    role: "Full stack developer responsible for product implementation and deployment",
    duration: "Independent build",
    status: "Live Demo",
    liveUrl: "",
    codeUrl: "",
    featured: true,
    metrics: ["Authentication flow", "Persistent secure storage", "Deployed app"],
    thumbnail: "Secure Vault",
    outcome:
      "Delivered a production-style secure storage app that demonstrates ownership across frontend, backend integration, and deployment.",
    whatIBuilt: [
      "React and Next.js frontend for account creation, login, and protected content flows.",
      "Database-backed storage integration using PostgreSQL and Supabase services.",
      "Deployment pipeline and hosted demo on Vercel for recruiter-visible product validation.",
    ],
    challenges: [
      "Designing a trustworthy product flow around sensitive information handling.",
      "Connecting authentication, persistence, and hosting into a stable end-to-end setup.",
      "Shipping a polished full stack build rather than an isolated frontend mockup.",
    ],
    actionLabels: {
      live: "Live Demo",
      code: "Private Repository",
    },
    gridClass: "md:col-span-3",
  },
];

export const projectsIntro =
  "A selection of research-led and production-oriented work that shows how I approach problem framing, implementation depth, and delivery.";

export const projectCategories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];
