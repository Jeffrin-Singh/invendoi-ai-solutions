const u = (id) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const projects = [
    {
        slug: "lsgd-waste-surveillance-kerala",
        title: "AI-Based Waste Management & Surveillance (LSGD, Kerala)",
        industry: "Government / Municipal Enforcement",
        locations: ["Kerala, India"],
        status: "Deployed / Scaled",
        summary:
            "A large-scale CCTV analytics solution that detects waste dumping and public-cleanliness violations, generates evidence automatically, and routes geo-tagged alerts to enforcement teams—built to scale across wards and jurisdictions.",
        problem:
            "Municipal enforcement depends heavily on manual patrols and operator monitoring. As camera counts grow, violations are missed, evidence becomes inconsistent, and response time increases—making enforcement costly and hard to audit.",
        solution:
            "Invendoi deployed real-time video analytics on existing CCTV infrastructure, configured ward-wise zones and rules, and enabled an evidence workflow with snapshots, short clips, event timelines, and geo-tagged incident records—so teams can act quickly and consistently.",
        modules: [
            "Waste dumping / littering detection",
            "Violation snapshots + short evidence clips",
            "Ward-wise zones & policy rules",
            "Geo-tagged event timeline for enforcement",
            "Role-based dashboards for operators & admins",
            "Camera health + uptime analytics (ops readiness)",
            "Evidence export for reporting and audits",
        ],
        stack: [
            "Computer Vision (YOLO-based detection)",
            "Edge + GPU inference (Jetson/GPU where required)",
            "Real-time alerting + evidence workflow portal",
            "GIS overlays / geo-tagging pipeline",
            "RBAC + audit-ready access controls",
        ],
        metrics: [
            { k: "Scale referenced", v: "2,000+ cameras" },
            { k: "Operational impact", v: "Faster evidence retrieval + scalable enforcement workflows" },
        ],
        coverImage: u("photo-1532996122724-e3c354a0b15b"),
        serviceSlugs: [
            "real-time-video-analytics",
            "geospatial-intelligence",
            "secure-portals-integrations",
        ],
        ctaLabel: "Request a similar deployment",
        ctaTo: "/contact",
    },

    {
        slug: "elephant-detection-early-warning",
        title: "Elephant Detection & Early Warning (Forest Corridors)",
        industry: "Government / Forest / Wildlife Monitoring",
        locations: ["Kerala, India"],
        status: "Pilot / Field Operations",
        summary:
            "An edge AI early-warning system for elephant movement detection in forest corridors—engineered for low connectivity and rugged conditions, with instant alerts to response teams.",
        problem:
            "Human–wildlife conflict requires early detection and rapid alerts. Typical deployments face low bandwidth, unstable power, harsh weather, and limited operational support—making cloud-first systems unreliable.",
        solution:
            "Invendoi implemented on-device inference optimized for field constraints, backed by lightweight alert routing and event logs. The design supports reliable detection, evidence capture, and optional integrations for deterrent/response systems.",
        modules: [
            "Elephant detection (field-tuned)",
            "Low-bandwidth alert pipeline to response teams",
            "Event logging + evidence snapshots/clips",
            "Integration hooks for deterrent/response actions",
            "Deployment approach built for rugged environments",
        ],
        stack: [
            "Edge inference (Jetson-class deployment)",
            "Real-time notifications (configurable channels)",
            "Field-hardened deployment approach",
            "Operational logging + evidence capture",
        ],
        metrics: [{ k: "Pilot detections referenced", v: "200+ detections" }],
        coverImage: u("photo-1557050543-4d5f4e07ef46"),
        serviceSlugs: ["edge-ai-deployment", "real-time-video-analytics"],
        ctaLabel: "Request a similar deployment",
        ctaTo: "/contact",
    },

    {
        slug: "retail-infrastructure-safety-monitoring",
        title: "Retail & Infrastructure Safety Monitoring",
        industry: "Enterprise Safety",
        locations: ["India", "GCC (deployments)"],
        status: "Deployed",
        summary:
            "Real-time safety and abnormal activity detection across retail and infrastructure environments—built with zone rules, incident alerts, and audit-ready evidence for operations and security teams.",
        problem:
            "Incidents such as falls, intrusions, unsafe behavior, and restricted-area entry often go unnoticed until after impact. Manual monitoring is inconsistent and doesn’t scale across multiple locations and shifts.",
        solution:
            "Invendoi delivered multi-camera analytics with zone policies and alert routing. Incidents trigger evidence capture and can be reviewed through dashboards aligned to safety operations—reducing response delays and improving visibility.",
        modules: [
            "Zone breach / restricted area detection",
            "Fall / anomaly detection (where applicable)",
            "Incident alerts + evidence snapshots/clips",
            "Evidence export for audits and reporting",
            "Operational dashboards for incident review",
        ],
        stack: ["Multi-camera analytics", "Alert routing + portal dashboards", "Role-based access"],
        metrics: [{ k: "Outcome", v: "Higher incident visibility + faster response workflows" }],
        coverImage: u("photo-1556740738-b6a63e27c4df"),
        serviceSlugs: [
            "real-time-video-analytics",
            "threat-and-safety-detection",
            "secure-portals-integrations",
        ],
        ctaLabel: "Request a similar deployment",
        ctaTo: "/contact",
    },

    {
        slug: "drone-object-tracking-saudi-cet",
        title: "Drone-based Object Tracking (Saudi Arabia + CET Collaboration)",
        industry: "UAV Intelligence",
        locations: ["Saudi Arabia", "India"],
        status: "Field-tested",
        summary:
            "Multi-UAV object detection and tracking with telemetry fusion (GPS/altitude) and low-bandwidth streaming patterns—built for real-time aerial operations and after-action analytics.",
        problem:
            "Aerial video streams are unstable and bandwidth constrained. Without telemetry fusion, operators lose target continuity, location context, and operational reliability—especially in wide-area tracking missions.",
        solution:
            "Invendoi implemented a telemetry-fused tracking pipeline for humans/vehicles/vessels, with adaptive streaming considerations and outputs for real-time operations and post-mission analytics.",
        modules: [
            "Human/vehicle/vessel detection & tracking",
            "Telemetry fusion (GPS/altitude context)",
            "Low-bandwidth streaming approach (ops-ready)",
            "Mission event logs + after-action analytics outputs",
        ],
        stack: [
            "MAVLink / DJI SDK integration",
            "YOLO-based detection pipeline",
            "Telemetry + video fusion",
            "Analytics outputs for operations",
        ],
        metrics: [{ k: "Targets", v: "Humans / vehicles / vessels" }],
        coverImage: u("photo-1500534314209-a25ddb2bd429"),
        serviceSlugs: [
            "drone-uav-analytics",
            "geospatial-intelligence",
            "real-time-video-analytics",
        ],
        ctaLabel: "Request a similar deployment",
        ctaTo: "/contact",
    },

    {
        slug: "privacy-safe-face-recognition",
        title: "Privacy-safe Face Recognition (Mediatronix MoU)",
        industry: "Government / Secure Access / Law Enforcement (Governed Use)",
        locations: ["India"],
        status: "PoC / Limited Deployments",
        summary:
            "A governed face-recognition system with controlled watchlists, liveness checks, flexible deployment modes (on-prem/on-edge), and tamper-proof audit trails—designed for accountable, policy-driven operations.",
        problem:
            "Secure identification systems fail without governance. Teams need controlled watchlists, clear access policies, audit logs, and deployment flexibility—while ensuring responsible and lawful usage.",
        solution:
            "Invendoi designed a role-controlled workflow: watchlist management (RBAC), liveness checks, event logs, and deployment flexibility (on-prem or edge). Outputs are structured for auditing and controlled exports.",
        modules: [
            "Watchlist management (RBAC)",
            "Liveness checks",
            "On-prem / on-edge inference options",
            "Audit trails + controlled exports",
            "Operator workflows for governed usage",
        ],
        stack: [
            "On-prem / edge inference architecture",
            "Secure portal (RBAC / audit logging)",
            "Access policy alignment + traceable event logs",
        ],
        metrics: [{ k: "Focus", v: "Governed, audit-first workflows" }],
        coverImage: u("photo-1507003211169-0a1dd7228f2d"),
        serviceSlugs: ["face-recognition-access", "secure-portals-integrations"],
        ctaLabel: "Request a similar deployment",
        ctaTo: "/contact",
    },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);