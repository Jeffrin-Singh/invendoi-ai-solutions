const u = (id) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const caseStudies = [
    {
        slug: "vccs-fr-system",
        title: "VCCS Face Recognition System for Secure Access & Monitoring",
        industry: "Government / High-Security Facilities",
        category: "Identity",
        featured: true,
        featuredMetric: "Watchlists + audit-ready workflows",
        heroImage: u("photo-1526374965328-7f61d4dc18c5"),
        summary:
            "A high-security face recognition system designed for CCTV-based monitoring, controlled watchlists, and secure identity workflows with on-prem deployment options and traceable audit logs.",
        challenge:
            "High-security facilities need fast, reliable identification from CCTV and access points while maintaining governance, privacy, and operator accountability. Manual verification slows response and creates gaps in traceability.",
        solution:
            "Invendoi designed and implemented a controlled face-recognition workflow with enrollment, watchlist management, live camera matching, alerting, operator review, and audit-ready event history—suited for secure command-center environments.",
        outcomes: [
            "Improved real-time visibility into identified and watchlisted persons",
            "Controlled review and escalation workflows for security teams",
            "Secure deployment approach with traceable event records",
        ],
        metrics: [{ k: "Core Workflow", v: "Watchlists + audit-ready workflows" }],
        tech: ["Face Recognition", "Watchlist Management", "Real-time Alerts", "Audit Trails"],
    },

    {
        slug: "kerala-defence-fr-project",
        title: "Kerala Defence Face Recognition Project for High-Security Surveillance",
        industry: "Defence / Critical Security",
        category: "Identity",
        featured: true,
        featuredMetric: "On-prem identity intelligence",
        heroImage: u("photo-1516321497487-e288fb19713f"),
        summary:
            "A defence-oriented face recognition and CCTV intelligence workflow designed for secure perimeters, identity verification, watchlist matching, and real-time alerting under controlled on-prem operations.",
        challenge:
            "Defence environments require reliable identification, strict access control, low-latency alerts, and full auditability—often in restricted networks where cloud-native systems are unsuitable.",
        solution:
            "Invendoi developed a privacy-aware, on-prem face-recognition architecture for secure CCTV feeds and monitored access points, combining watchlists, live matching, alert workflows, evidence snapshots, and role-based review.",
        outcomes: [
            "Supports high-security monitoring and identity verification workflows",
            "Low-latency alerting aligned to restricted-network environments",
            "Governed operations through role controls, evidence logs, and reviewable events",
        ],
        metrics: [{ k: "Deployment Model", v: "On-prem identity intelligence" }],
        tech: ["On-Prem Inference", "Face Recognition", "Role-based Workflows", "Evidence Logging"],
    },

    {
        slug: "lsgd-waste-enforcement-kerala",
        title: "AI-Based Waste Management & Surveillance (LSGD, Kerala)",
        industry: "Government / Municipal Enforcement",
        category: "Government",
        featured: true,
        featuredMetric: "2,000+ cameras (scale referenced)",
        heroImage: u("photo-1503596476-1c12a8ba09a9"),
        summary:
            "A scalable CCTV analytics deployment that detects waste dumping and cleanliness violations, generates evidence automatically, and routes geo-tagged alerts to enforcement teams—built for ward-level operations and auditing.",
        challenge:
            "As camera coverage expands across wards, manual monitoring can’t keep up. Violations get missed, evidence is inconsistent, and enforcement becomes slower and harder to audit.",
        solution:
            "Invendoi implemented real-time video analytics on existing CCTV feeds with zone rules, auto evidence snapshots/clips, geo-tagged incident records, and dashboards that support enforcement workflows and reporting.",
        outcomes: [
            "Large-scale rollout referenced at 2,000+ cameras",
            "Faster violation detection and evidence retrieval for field teams",
            "Operator/admin dashboards aligned to monitoring and audit needs",
        ],
        metrics: [{ k: "Deployment Scale", v: "2,000+ cameras" }],
        tech: ["Real-time Video Analytics", "Geo-tagging", "Evidence Workflows", "RBAC Dashboards"],
    },

    {
        slug: "elephant-detection-forest-corridors",
        title: "Forest Corridor Early Warning: Elephant Detection & Instant Alerts",
        industry: "Government / Forest & Wildlife Monitoring",
        category: "Wildlife",
        featured: true,
        featuredMetric: "200+ detections (pilot referenced)",
        heroImage: u("photo-1549366021-9f761d450615"),
        summary:
            "An edge AI early-warning system for elephant movement detection in low-connectivity forest corridors, delivering rapid alerts and field-ready evidence capture.",
        challenge:
            "Wildlife corridors require dependable early warning under low bandwidth, rugged conditions, and inconsistent power—where cloud-first pipelines often fail.",
        solution:
            "Invendoi built an edge-first detection workflow optimized for field constraints, with lightweight alert routing, event logging, and optional integrations for deterrent/response actions.",
        outcomes: [
            "200+ elephant detections referenced in pilot operations",
            "Low-latency alerts to reduce conflict risk and improve response time",
            "Field validation through reports and operational trials",
        ],
        metrics: [{ k: "Pilot Detections", v: "200+ detections" }],
        tech: ["Edge AI (Jetson-class)", "Real-time Alerts", "Low-bandwidth Pipelines", "Evidence Capture"],
    },

    {
        slug: "retail-infrastructure-safety",
        title: "Retail & Infrastructure Safety Monitoring",
        industry: "Enterprise Safety",
        category: "Enterprise",
        featured: false,
        featuredMetric: "Designed for control-room workflows",
        heroImage: u("photo-1558008258-3256797b43f3"),
        summary:
            "Multi-camera safety analytics for restricted-zone enforcement, anomaly/fall-type events (where applicable), and early risk detection—integrated with operational dashboards for incident review and escalation.",
        challenge:
            "Enterprises need consistent detection of safety risks and abnormal activity across multiple sites. Manual monitoring is inconsistent, costly, and doesn’t scale across shifts.",
        solution:
            "Invendoi delivered real-time detection workflows with zone policies, alert routing, and evidence generation (snapshots/clips) so safety teams can respond quickly and maintain audit-ready incident records.",
        outcomes: [
            "Improved visibility into high-risk events across camera networks",
            "Reduced dependence on constant human monitoring for incident discovery",
            "Operational readiness through incident timelines and evidence exports",
        ],
        metrics: [{ k: "Ops Fit", v: "Designed for control-room workflows" }],
        tech: ["Zone Policies", "Safety Analytics", "Alert Workflows", "Evidence Export"],
    },

    {
        slug: "privacy-safe-face-recognition",
        title: "Privacy-Safe Face Recognition (Mediatronix MoU)",
        industry: "Government / Secure Facilities (Governed Use)",
        category: "Identity",
        featured: false,
        featuredMetric: "On-prem / On-edge options",
        heroImage: u("photo-1526374965328-7f61d4dc18c5"),
        summary:
            "A governed face-recognition workflow designed around controlled watchlists, liveness checks, audit trails, and on-prem/on-edge deployment options—built for accountable operations.",
        challenge:
            "Identification systems require governance: controlled watchlists, access policies, auditability, and deployment flexibility—while keeping operations secure and reviewable.",
        solution:
            "Invendoi co-designed an access-controlled workflow with RBAC watchlist management, liveness checks, traceable event logs, and deployment options aligned to policy-driven use.",
        outcomes: [
            "PoCs and limited-scope deployments delivered",
            "Audit-first workflows for traceability and governance",
            "Architecture designed to support multi-stream operations",
        ],
        metrics: [{ k: "Deployment Mode", v: "On-prem / On-edge options" }],
        tech: ["Watchlists (RBAC)", "Liveness", "Audit Trails", "Edge/On-Prem Inference"],
    },

    {
        slug: "drone-object-tracking-saudi-cet",
        title: "Drone-based Object Tracking (Saudi Arabia + CET)",
        industry: "UAV / Field Intelligence",
        category: "UAV",
        featured: true,
        featuredMetric: "Telemetry-fused tracking",
        heroImage: u("photo-1473968512647-3e447244af8f"),
        summary:
            "Multi-UAV object detection and tracking with fused telemetry (GPS/altitude), designed for bandwidth constraints and operator workflows—supporting both real-time missions and after-action analysis.",
        challenge:
            "Aerial tracking must remain reliable despite unstable links, wide-area movement, and changing conditions. Operators need continuity and location context, not just bounding boxes.",
        solution:
            "Invendoi implemented detection + tracking with telemetry fusion and low-bandwidth streaming patterns, producing mission logs and outputs suitable for real-time decision-making and post-mission review.",
        outcomes: [
            "Field-tested across varied operating conditions",
            "Telemetry-fused tracking improves target continuity and context",
            "Operator-friendly outputs for mission and after-action workflows",
        ],
        metrics: [{ k: "Targets", v: "Humans / vehicles / vessels" }],
        tech: ["YOLO-based Detection", "Tracking", "Telemetry Fusion", "Low-bandwidth Streaming"],
    },

    {
        slug: "saudi-retail-abnormal-behavior-monitoring",
        title: "Abnormal Behavior & Loss-Risk Monitoring (Retail, Saudi Arabia)",
        industry: "Retail / Loss Prevention (GCC)",
        category: "Enterprise",
        featured: false,
        featuredMetric: "Event feed + evidence snippets",
        heroImage: u("photo-1556740738-b6a63e27c4df"),
        summary:
            "A retail-focused video intelligence layer that flags abnormal behavior patterns, restricted-area events, and operational anomalies—creating evidence snippets and streamlined review workflows for loss-prevention teams.",
        challenge:
            "Loss-prevention teams face high camera volume and inconsistent manual review. Risk events are often noticed late, and evidence compilation is time-consuming.",
        solution:
            "Invendoi delivered event-driven detection workflows with configurable zones/rules, evidence snapshots/clips, and a review-friendly incident feed so teams can act faster with consistent documentation.",
        outcomes: [
            "Faster identification of high-risk events through event-driven review",
            "Consistent evidence capture for internal audits and investigations",
            "Configurable zones/rules aligned to store operations",
        ],
        metrics: [{ k: "Operational Flow", v: "Event feed + evidence snippets" }],
        tech: ["Multi-camera Analytics", "Zone Rules", "Incident Review UX", "Evidence Clips"],
    },

    {
        slug: "multi-site-command-center-alerting",
        title: "Multi-Site AI Command Center (Dashboards + Real-time Alerts)",
        industry: "Enterprise Command Center",
        category: "Enterprise",
        featured: false,
        featuredMetric: "Incident timeline + camera health",
        heroImage: u("photo-1551288049-bebda4e38f71"),
        summary:
            "A central command-center layer that unifies multi-camera monitoring across sites with event timelines, alert routing, camera health visibility, and role-based access—built for security and operations teams.",
        challenge:
            "Organizations struggle to operate multi-site camera networks efficiently—events are missed, health issues go unnoticed, and incident handling lacks a consistent workflow.",
        solution:
            "Invendoi built an operations-first dashboard with event timelines, evidence views, camera health signals, and RBAC—designed to support daily monitoring and incident response at scale.",
        outcomes: [
            "Improved operational visibility across sites and camera groups",
            "Standardized incident workflow from detection to evidence export",
            "Health monitoring reduces downtime and blind spots",
        ],
        metrics: [{ k: "Ops Capability", v: "Incident timeline + camera health" }],
        tech: ["RBAC", "Observability Signals", "Event Timelines", "Evidence Workflow"],
    },

    {
        slug: "industrial-perimeter-intrusion-zones",
        title: "Industrial Perimeter Intrusion & Restricted-Zone Enforcement",
        industry: "Industrial Safety & Security",
        category: "Enterprise",
        featured: false,
        featuredMetric: "Alerts + evidence for verification",
        heroImage: u("photo-1513828583688-c52646db42da"),
        summary:
            "A rule-driven perimeter security analytics layer that detects intrusions, loitering, and restricted-zone breaches—delivering actionable alerts with evidence for site security teams.",
        challenge:
            "Industrial sites need reliable monitoring across wide perimeters and multiple entry points. False alarms and fragmented review workflows reduce response effectiveness.",
        solution:
            "Invendoi configured zone-based detection rules with alert routing and evidence capture, enabling faster verification and response using a consistent incident review experience.",
        outcomes: [
            "Faster verification using evidence snapshots/clips",
            "Zone-based rules align detections to real site boundaries",
            "Incident workflow designed for security operations",
        ],
        metrics: [{ k: "Response Design", v: "Alerts + evidence for quick verification" }],
        tech: ["Zone Breach Detection", "Loitering/Intrusion Rules", "Evidence Capture", "Dashboards"],
    },

    {
        slug: "law-enforcement-ai-surveillance-blueprint",
        title: "AI Surveillance Blueprint for Law Enforcement (Governed Workflows)",
        industry: "Government / Public Safety",
        category: "Government",
        featured: false,
        featuredMetric: "Blueprint + prototype modules",
        heroImage: u("photo-1585079542156-2755d9c8a094"),
        summary:
            "A solution blueprint and prototype modules for law-enforcement-grade video intelligence—focused on governed workflows, evidence handling, and operational dashboards.",
        challenge:
            "Public safety deployments require more than detection: governance, audit trails, role-based access, and standardized evidence workflows are essential for responsible operations.",
        solution:
            "Invendoi designed an audit-first architecture and prototype workflows covering event capture, evidence packaging, role-based access, and operational dashboards—aligned to accountable use.",
        outcomes: [
            "Operational workflow design aligned to governance and audit requirements",
            "Prototype modules for evidence capture and review pipelines",
            "Architecture ready for phased pilot → scale approach",
        ],
        metrics: [{ k: "Delivery Type", v: "Blueprint + prototype modules" }],
        tech: ["RBAC", "Audit Trails", "Evidence Packaging", "Operational Dashboards"],
    },

    {
        slug: "drone-incident-mapping-geo-analytics",
        title: "Drone Incident Mapping & Geo-Analytics (Operations Suite)",
        industry: "UAV Intelligence / Geo-Analytics",
        category: "UAV",
        featured: false,
        featuredMetric: "Timeline + geo-context + exports",
        heroImage: u("photo-1523961131990-5ea7c61b2107"),
        summary:
            "An operations-ready drone analytics suite combining detection events with location context, timelines, and reporting outputs—built for field missions and command-center review.",
        challenge:
            "Drone missions generate large volumes of video and telemetry. Without structure, teams struggle to convert raw footage into actionable, reportable incident intelligence.",
        solution:
            "Invendoi structured mission outputs into time-ordered events with location context, evidence frames/clips, and reporting-ready exports—supporting both live ops and after-action review.",
        outcomes: [
            "Structured mission outputs improve operational review speed",
            "Geo-context enables clearer incident understanding and reporting",
            "Designed for field missions and command-center workflows",
        ],
        metrics: [{ k: "Output", v: "Timeline + geo-context + exports" }],
        tech: ["Telemetry + Video Fusion", "Event Timelines", "Geo-Context", "Reporting Exports"],
    },
];

export const getCaseStudyBySlug = (slug) =>
    caseStudies.find((c) => c.slug === slug);
