const u = (id) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const services = [
    {
        slug: "real-time-video-analytics",
        title: "Real-time Video Analytics",
        short:
            "Object, crowd and behavioral detection across CCTV, drones, body-cams and mobile streams—optimized for control rooms.",
        image: u("photo-1550751827-4bd374c3f58b"),
        highlights: [
            "Crowd/loitering/zone breach detection",
            "Anomaly & incident alerts with evidence snapshots",
            "Multi-stream performance built for scale",
        ],
        projectSlugs: [
            "lsgd-waste-surveillance-kerala",
            "elephant-detection-early-warning",
            "retail-infrastructure-safety-monitoring",
            "drone-object-tracking-saudi-cet",
        ],
        details: {
            problem:
                "Operators can’t watch thousands of feeds continuously. Missed incidents become delayed response and weak evidence.",
            solution:
                "We convert live video into real-time alerts, searchable evidence, and operational dashboards—so teams act faster with confidence.",
            deliverables: [
                "Detection models tuned to your environment",
                "Alert rules, zones and schedules",
                "Evidence clips, snapshots, and event timelines",
                "Dashboard views for operations and audit",
            ],
            tech: ["Computer Vision", "Multi-stream Pipelines", "Real-time Alerting"],
            outcomes: [
                "Reduced false alerts and faster response time",
                "Better evidence quality and audit readiness",
                "Lower monitoring load on teams",
            ],
        },
    },
    {
        slug: "edge-ai-deployment",
        title: "Edge AI Deployment (Jetson / GPU)",
        short:
            "Low-latency inference using NVIDIA Jetson and GPU servers with TensorRT/DeepStream—built for real-world bandwidth constraints.",
        image: u("photo-1531297484001-80022131f5a1"),
        highlights: ["On-device inference", "TensorRT acceleration", "Cloud orchestration-ready"],
        projectSlugs: ["elephant-detection-early-warning"],
        details: {
            problem:
                "Cloud-only video analytics struggles with latency, privacy, and bandwidth—especially in rural or field deployments.",
            solution:
                "We deploy optimized pipelines on edge devices and GPU servers with efficient streaming and centralized management.",
            deliverables: [
                "Edge deployment architecture",
                "Model optimization (TensorRT/DeepStream workflows)",
                "Health monitoring & remote updates blueprint",
                "Secure data handling practices",
            ],
            tech: ["NVIDIA Jetson", "TensorRT", "DeepStream", "GPU Servers"],
            outcomes: [
                "Lower latency and resilient operation",
                "Reduced bandwidth usage",
                "Reliable performance in harsh conditions",
            ],
        },
    },
    {
        slug: "geospatial-intelligence",
        title: "Geospatial Intelligence & Evidence Mapping",
        short:
            "Geo-tagged alerts, mapping overlays, and evidence management for enforcement workflows and command centers.",
        image: u("photo-1526374965328-7f61d4dc18c5"),
        highlights: ["GPS-tagged alerts", "Geofencing", "GIS overlays"],
        projectSlugs: ["lsgd-waste-surveillance-kerala", "drone-object-tracking-saudi-cet"],
        details: {
            problem:
                "Incidents without location context slow down dispatch and weaken enforcement evidence.",
            solution:
                "We fuse events with maps—geofences, telemetry, and structured evidence—so every alert is actionable and traceable.",
            deliverables: [
                "Geo-tagged alert pipeline",
                "Map overlays and event pins",
                "Evidence review workflow design",
                "API integration patterns for GIS/C2 systems",
            ],
            tech: ["Geofencing", "Telemetry Fusion", "Mapping Overlays"],
            outcomes: [
                "Faster dispatch decisions",
                "Cleaner evidence trails",
                "Operational visibility across zones",
            ],
        },
    },
    {
        slug: "drone-uav-analytics",
        title: "Drone & UAV Video Intelligence",
        short:
            "Multi-UAV detection and tracking with telemetry fusion (MAVLink/DJI SDK) and low-bandwidth streaming designs.",
        image: u("photo-1473968512647-3e447244af8f"),
        highlights: ["Telemetry fusion", "Object tracking", "Low-bandwidth streaming"],
        projectSlugs: ["drone-object-tracking-saudi-cet"],
        details: {
            problem:
                "Aerial streams are noisy and bandwidth-limited; operators need stable tracking and context.",
            solution:
                "We combine detection with GPS/altitude telemetry for reliable tracking and post-mission analytics.",
            deliverables: [
                "Tracking pipeline (human/vehicle/vessel targets)",
                "Telemetry + video fusion design",
                "Operator analytics & after-action outputs",
                "Field testing support and SOPs",
            ],
            tech: ["MAVLink", "DJI SDK", "Object Tracking", "Analytics"],
            outcomes: ["More reliable tracking", "Actionable mission insights", "Field-ready stability"],
        },
    },
    {
        slug: "threat-and-safety-detection",
        title: "Threat Detection & Safety Monitoring",
        short:
            "Threat detection (weapons, dangerous objects, anomaly activity) plus safety monitoring (falls, package theft, compliance).",
        image: u("photo-1555664424-778a1e5e1b48"),
        highlights: ["Threat detection", "Safety & compliance", "Real-time alerts"],
        projectSlugs: ["retail-infrastructure-safety-monitoring"],
        details: {
            problem:
                "High-risk incidents need immediate detection—manual review is too slow and inconsistent.",
            solution:
                "Deploy targeted models for threat and safety events with clear escalation and audit trails.",
            deliverables: [
                "Threat & safety event definitions",
                "Detection + alert routing design",
                "Evidence export workflows",
                "Operational dashboards and health metrics",
            ],
            tech: ["Behavioral Detection", "Incident Alerting", "Audit Trails"],
            outcomes: ["Earlier detection", "Lower incident impact", "Improved compliance visibility"],
        },
    },
    {
        slug: "vehicle-intelligence",
        title: "Vehicle Intelligence (Detection / Tracking / ID)",
        short:
            "Vehicle detection & tracking, parking analytics, number plate + model identification, violation/stolen vehicle workflows.",
        image: u("photo-1542362567-b07e54358753"),
        highlights: ["Vehicle tracking", "Violation ID", "Parking & access analytics"],
        details: {
            problem:
                "Traffic and facility operations need fast identification—without expensive camera replacements.",
            solution:
                "We deliver vehicle analytics pipelines that integrate with existing camera infrastructure where possible.",
            deliverables: [
                "Vehicle detection & tracking setup",
                "Violation identification workflow",
                "Access/entry analytics patterns",
                "Database and retention blueprint",
            ],
            tech: ["Vehicle Detection", "Identification Workflows", "Dashboards"],
            outcomes: ["Improved enforcement", "Better access control", "Reduced manual checks"],
        },
    },
    {
        slug: "face-recognition-access",
        title: "Face Recognition & Secure Access (Privacy-safe)",
        short:
            "Watchlists, liveness checks, on-prem/on-edge inference, tamper-proof audit trails—aligned to lawful use.",
        image: u("photo-1556157382-97eda2d62296"),
        highlights: ["Watchlists", "Liveness checks", "On-prem / edge inference"],
        projectSlugs: ["privacy-safe-face-recognition"],
        details: {
            problem:
                "Secure facilities require strong identity verification with governance, privacy, and auditability.",
            solution:
                "We implement privacy-safe face recognition flows with controlled watchlists and tamper-proof logging.",
            deliverables: [
                "Access policy + SOP design",
                "Watchlist & role controls",
                "Liveness + 1:N identification flow",
                "Redaction/export workflows + audit trails",
            ],
            tech: ["On-edge Inference", "RBAC", "Audit Trails"],
            outcomes: ["Improved security posture", "Accountable operations", "Controlled data usage"],
        },
    },
    {
        slug: "secure-portals-integrations",
        title: "Secure Portals & API Integrations",
        short:
            "Multi-tenant portals with RBAC/2FA, evidence workflows, and API-first integrations with C2/GIS/law-enforcement platforms.",
        image: u("photo-1555949963-aa79dcee981c"),
        highlights: ["RBAC + 2FA", "Multi-tenant", "API-first integrations"],
        projectSlugs: [
            "lsgd-waste-surveillance-kerala",
            "retail-infrastructure-safety-monitoring",
            "privacy-safe-face-recognition",
        ],
        details: {
            problem:
                "AI systems fail when alerts don’t fit real operations or can’t integrate with existing stacks.",
            solution:
                "We design portals and APIs that match workflows: roles, approvals, audit, exports, and integrations.",
            deliverables: [
                "Portal UX for operators/admins",
                "RBAC, 2FA, audit trail design",
                "API endpoints + integration patterns",
                "Observability and operational readiness blueprint",
            ],
            tech: ["RBAC", "2FA", "API-first"],
            outcomes: ["Higher adoption", "Cleaner governance", "Faster integrations"],
        },
    },
];
