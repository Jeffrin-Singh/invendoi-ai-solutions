const u = (id) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const caseStudies = [
    {
        slug: "lsgd-waste-enforcement-kerala",
        title: "AI-Based Waste Management & Surveillance (LSGD, Kerala)",
        industry: "Government / Municipal Enforcement",
        heroImage: u("photo-1523966211575-eb4a01e7dd51"),
        summary:
            "Large-scale deployment for real-time violation detection, geo-tagged alerts, and evidence management.",
        challenge:
            "Municipal enforcement teams needed scalable monitoring and evidentiary workflows across many locations and cameras.",
        solution:
            "Real-time video analytics with geo-tagged alerts and structured evidence management designed for enforcement operations.",
        outcomes: [
            "Large-scale rollout referenced at 2,000+ cameras",
            "Faster incident identification and evidence retrieval",
            "Operational dashboards for monitoring and audit",
        ],
        metrics: [{ k: "Deployment Scale", v: "2,000+ cameras" }],
        tech: ["Real-time Video Analytics", "Geo-tagging", "Evidence Workflows"],
    },
    {
        slug: "elephant-detection-forest-corridors",
        title: "Forest/Wildlife Monitoring: Elephant Detection & Instant Alerts",
        industry: "Forest / Wildlife Protection",
        heroImage: u("photo-1501785888041-af3ef285b470"),
        summary:
            "Edge AI detection and alerting designed for low-bandwidth forest corridors with automated deterrent triggers.",
        challenge:
            "Forest corridors need reliable early warning systems under low bandwidth and rugged conditions.",
        solution:
            "On-device inference with low-bandwidth operation and automated alerting/deterrent triggers for rapid response.",
        outcomes: [
            "200+ elephant detections referenced in pilot operations",
            "Low-latency alerts to reduce conflict risk",
            "Validated effectiveness via reports and field operations",
        ],
        metrics: [{ k: "Pilot Detections", v: "200+ elephants detected" }],
        tech: ["Edge AI", "Real-time Alerts", "Low-bandwidth Pipelines"],
    },
    {
        slug: "retail-infrastructure-safety",
        title: "Retail & Infrastructure Safety Monitoring",
        industry: "Enterprise Safety",
        heroImage: u("photo-1558008258-3256797b43f3"),
        summary:
            "Abnormal activity detection, zone breaches, fall detection, and early fire/smoke warnings integrated with control rooms.",
        challenge:
            "Enterprises require consistent detection of safety risks and abnormal activity without constant manual monitoring.",
        solution:
            "Behavioral analytics + safety detection with clear alert escalation and control-room integrations.",
        outcomes: [
            "Improved visibility into high-risk events",
            "Reduced dependence on constant human monitoring",
            "Better incident response readiness",
        ],
        metrics: [{ k: "Monitoring Efficiency", v: "Designed for control room operations" }],
        tech: ["Behavioral Detection", "Safety Analytics", "Alert Workflows"],
    },
    {
        slug: "privacy-safe-face-recognition",
        title: "Privacy-safe Face Recognition (Mediatronix MoU)",
        industry: "Secure Facilities / Law Enforcement",
        heroImage: u("photo-1526374965328-7f61d4dc18c5"),
        summary:
            "Co-developed privacy-safe face recognition with watchlists, liveness checks, on-prem/on-edge inference and audit trails.",
        challenge:
            "Secure identification requires governance: controlled watchlists, auditability, and lawful-use alignment.",
        solution:
            "Access-controlled watchlists, liveness checks, zone triggers, and tamper-proof audit trails with on-prem/on-edge options.",
        outcomes: [
            "PoCs and limited-scope deployments delivered",
            "Audit-first workflows for governance and traceability",
            "Designed for high-throughput multi-stream handling",
        ],
        metrics: [{ k: "Deployment Mode", v: "On-prem / On-edge inference" }],
        tech: ["Watchlists", "Liveness", "Audit Trails", "Edge Inference"],
    },
    {
        slug: "drone-object-tracking-saudi-cet",
        title: "Drone-based Object Tracking (Saudi Arabia + CET)",
        industry: "UAV / Field Intelligence",
        heroImage: u("photo-1473929734674-80d1ea1d9f4e"),
        summary:
            "Multi-UAV object detection & tracking with fused telemetry, long-range RF links, and low-bandwidth streaming.",
        challenge:
            "Aerial tracking must remain reliable across desert/coastal conditions, including night/thermal scenarios.",
        solution:
            "YOLO-based tracking with GPS/altitude telemetry fusion and adaptive low-bandwidth streaming for operator workflows.",
        outcomes: [
            "Field-tested across varied conditions",
            "Telemetry-fused tracking for better target continuity",
            "Operator training and after-action analytics delivered",
        ],
        metrics: [{ k: "Targets", v: "Humans / vehicles / vessels" }],
        tech: ["YOLO-based Detection", "Telemetry Fusion", "Low-bandwidth Streaming"],
    },
];