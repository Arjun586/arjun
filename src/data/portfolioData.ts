export interface QuoteItem {
  quote: string;
  author: string;
}

export interface CurrentlyReading {
  title: string;
  author: string;
}

export interface PersonalData {
  name: string;
  title: string;
  discipline: string;
  location: string;
  availability: string;
  heroBio: string;
  aboutBio: string[];
  currentFocus: string[];
  quotes: QuoteItem[];
  interests: {
    statement: string;
    currentlyReading: CurrentlyReading;
  };
  profileImage: string;
}

export interface EducationData {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  period: string;
  location: string;
}

export interface WorkExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  contributions: string[];
  technologies: string[];
}

export interface GrowthTimelineItem {
  period: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ExploringItem {
  area: string;
  description: string;
}

export interface ExperienceData {
  workExperience: WorkExperienceItem[];
  growthTimeline: GrowthTimelineItem[];
  currentlyExploring: ExploringItem[];
  highlights: string[];
  metrics: {
    degree: string;
    status: string;
    projectsBuilt: string;
    yearsCoding: string;
  };
}

export interface CaseStudyApproach {
  title: string;
  description: string;
}

export interface CaseStudyDiagram {
  caption: string;
  ascii: string;
}

export interface CaseStudyTable {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface CaseStudyCodeSnippet {
  language: string;
  code: string;
}

export interface CaseStudySection {
  heading: string;
  body: string;
  bullets?: string[];
  diagram?: CaseStudyDiagram;
  table?: CaseStudyTable;
  codeSnippet?: CaseStudyCodeSnippet;
}

export interface ProjectCaseStudy {
  brief: string;
  challenge: string;
  approach: CaseStudyApproach[];
  outcome: string;
  architecture?: string;
  keyFocus?: string[];
  sections: CaseStudySection[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  featured: boolean;
  status: string;
  thumbnail: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
  caseStudy?: ProjectCaseStudy;
}

export interface CsFoundationItem {
  concept: string;
  leetCodeUrl?: string;
}

export interface SkillsData {
  categories: Record<string, string[]>;
  csFoundations: CsFoundationItem[];
}

export interface ContactData {
  email: string;
  location: string;
  responseTime: string;
  socialLinks: {
    github: string;
    linkedin: string;
    leetcode: string;
    email: string;
  };
  availableFor: string[];
  resume: {
    viewUrl: string;
    downloadUrl: string;
  };
  collaborationCta: {
    title: string;
    description: string;
  };
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  topic: string;
  message: string;
  createdAt: string;
  referenceCode: string;
}

export interface PortfolioSourceData {
  personal: PersonalData;
  education: EducationData;
  experience: ExperienceData;
  projects: ProjectItem[];
  skills: SkillsData;
  contact: ContactData;
}

export const PORTFOLIO_DATA: PortfolioSourceData = {
  personal: {
    name: 'Arjun',
    title: 'Full Stack Developer',
    discipline: 'CSE Student • Full-Stack Development & Backend Systems',
    location: 'India',
    availability: 'Open to Work',
    heroBio: 'Building software with clarity, purpose, and craft.',
    aboutBio: [
      'I approach software development with a focus on clarity, usability, and attention to detail. Whether building backend systems or refining user experiences, I value purposeful design and thoughtful execution.',
      "I'm a Computer Science student focused on backend and full-stack development. I enjoy building applications beyond the interface — working with APIs, databases, authentication, caching, and the infrastructure that connects everything together.",
      "I'm currently focused on writing more reliable software, improving my understanding of system design, and getting better at testing and deployment.",
    ],
    currentFocus: [
      'Backend Engineering',
      'Full-Stack Development',
      'Systems & Infrastructure',
    ],
    quotes: [
      {
        quote: "Above all, don't lie to yourself.",
        author: 'Fyodor Dostoevsky',
      },
      {
        quote: 'He who has a why to live for can bear almost any how.',
        author: 'Friedrich Nietzsche',
      },
    ],
    interests: {
      statement:
        "Outside of development, I spend time reading fiction, and generally following whatever I'm curious about at the moment.",
      currentlyReading: {
        title: 'The Brothers Karamazov',
        author: 'Fyodor Dostoevsky',
      },
    },
    profileImage: '/assets/aistudio/myImage_ff1d3735.png',
  },
  education: {
    institution: 'ABES Institute of Technology',
    degree: 'B.Tech — CSE (AI & ML)',
    fieldOfStudy:
      'Computer Science and Engineering (Artificial Intelligence & Machine Learning)',
    period: '2023 — 2027',
    location: 'India',
  },
  experience: {
    workExperience: [
      {
        company: 'Unfazed AI',
        role: 'Full Stack Developer',
        duration: 'December 2025 – July 2026',
        location: 'Noida, India',
        description:
          "Contributed to UI/UX improvements on the Unfazed AI website and developed DocStream AI's document search, filtering, urgency triage, and event-driven real-time backend systems.",
        contributions: [
          'Improved website UI/UX and interface consistency.',
          'Developed REST APIs and MongoDB aggregation pipelines with compound text-search indexes for document filtering and urgency triage.',
          'Implemented real-time updates using MongoDB Change Streams and WebSockets, including resume-token recovery to avoid polling and improve recovery after interruptions.',
        ],
        technologies: [
          'REST APIs',
          'MongoDB',
          'Change Streams',
          'WebSockets',
          'UI/UX',
        ],
      },
    ],
    growthTimeline: [
      {
        period: '2026 – CURRENT',
        title: 'BACKEND & APPLIED AI',
        description:
          'Focused on backend engineering, scalable system architecture, infrastructure workflows, and practical AI integration.',
        skills: [
          'Node.js & Express',
          'PostgreSQL & Redis',
          'Docker & CI/CD',
          'System Design',
          'Applied AI',
        ],
      },
      {
        period: '2024 – 2026',
        title: 'FULL-STACK DEVELOPMENT',
        description:
          'Expanded into full-stack development, building end-to-end web applications, REST APIs, and responsive interfaces.',
        skills: [
          'React & Next.js',
          'TypeScript',
          'MERN Applications',
          'PostgreSQL & Prisma',
          'State Management',
        ],
      },
      {
        period: '2023 – 2024',
        title: 'FOUNDATIONS',
        description:
          'Built my first websites and established a foundation in web development.',
        skills: [
          'HTML & CSS',
          'JavaScript',
          'Git & GitHub',
          'Programming Fundamentals',
        ],
      },
    ],
    currentlyExploring: [
      {
        area: 'Backend Engineering',
        description: 'Designing APIs and scalable services.',
      },
      {
        area: 'System Design',
        description: 'Learning how scalable systems are structured.',
      },
      {
        area: 'AI Applications',
        description: 'Exploring practical AI integration.',
      },
    ],
    highlights: [
      'Built multiple full-stack applications using modern web technologies.',
      'Participated in hackathons and collaborative development projects.',
      'Exploring Docker, CI/CD, and modern deployment workflows.',
    ],
    metrics: {
      degree: 'B.Tech — CSE (AI & ML)',
      status: 'Open to Work',
      projectsBuilt: '15+',
      yearsCoding: '3+',
    },
  },
  projects: [
    {
      id: 'nexus',
      title: 'Nexus',
      description:
        'A collaborative workspace combining an infinite vector drawing canvas with rich block-based notes, live multiplayer editing, and granular document exports.',
      category: 'Full Stack',
      featured: true,
      status: 'Completed',
      thumbnail: '/projects/nexus.png',
      githubUrl: 'https://github.com/Arjun586/Nexus',
      liveUrl: 'https://nexus-notes-tau.vercel.app/',
      technologies: [
        'Next.js',
        'TypeScript',
        'Node.js',
        'Express',
        'PostgreSQL',
        'Prisma',
        'Redis',
        'Socket.io',
        'Yjs',
        'Docker',
        'TailwindCSS',
      ],
      caseStudy: {
        brief:
          'Nexus is a real-time collaborative workspace enabling low-latency canvas synchronization, live presence, and persistent whiteboard state across concurrent users.',
        challenge:
          'Prevent state divergence and infinite broadcast echo loops during concurrent multi-user vector and text editing without blocking the main event loop or incurring database write lock contention.',
        approach: [
          {
            title: 'DUAL-PROTOCOL MULTIPLEXER',
            description:
              'Configured a single Node.js HTTP server instance (port 4000) routing Express REST API routes and Hocuspocus WebSocket connections without port collisions.',
          },
          {
            title: 'CRDT CONVERGENCE',
            description:
              'Adopted Conflict-free Replicated Data Types (Yjs) to mathematically ensure eventual consistency across decentralized clients without central database lock contention.',
          },
          {
            title: 'SNAPSHOT PERSISTENCE',
            description:
              'Implemented debounced binary document snapshots to PostgreSQL while broadcasting high-frequency ephemeral presence and cursor states via Redis.',
          },
        ],
        outcome:
          'Sub-50ms sync latency under concurrent multi-user load, zero-conflict state convergence via Yjs CRDTs, and debounced snapshotting reducing PostgreSQL write I/O by over 90%.',
        architecture:
          'Hybrid dual-protocol architecture running on a single Node.js instance (port 4000). Express handles REST authentication and workspace metadata. The Hocuspocus WebSocket server manages persistent collaborative rooms, distributing Yjs CRDT binary updates and routing ephemeral awareness states (cursors, presence) through Redis Pub/Sub, with debounced snapshots flushed to PostgreSQL.',
        keyFocus: [
          'Real-Time Canvas Sync (Yjs + Hocuspocus)',
          'Ephemeral Awareness & Cursor Tracking',
          'Dual-Protocol Express + WS Multiplexing',
          'Debounced Snapshot Persistence to PostgreSQL',
        ],
        sections: [
          {
            heading: 'OVERVIEW & SYSTEM TOPOLOGY',
            body: 'Nexus pairs an infinite vector drawing canvas with real-time multiplayer editing. Supporting simultaneous canvas edits requires separating low-latency ephemeral interaction from durable document persistence. Rather than running separate ports or reverse proxies in local development, the Node.js backend multiplexes Express REST endpoints and the Hocuspocus WebSocket engine across port 4000.',
            bullets: [
              'Unified HTTP/WS multiplexer on port 4000 sharing authentication cookies and session state',
              'Decoupled state: Yjs binary document updates for canvas shapes vs. Redis for volatile mouse pointers',
              'Debounced persistence worker preventing database connection pool exhaustion during rapid pointer drags',
            ],
            diagram: {
              caption: 'PORT 4000 DUAL-PROTOCOL SERVER & STATE TOPOLOGY',
              ascii:
                '+------------------------------------------------------------------------+\n|                  PORT 4000 DUAL-PROTOCOL MULTIPLEXER                   |\n|                                                                        |\n|   Client Browser                Express HTTP Server (Port 4000)        |\n|   +----------------+            +-----------------------------------+  |\n|   | REST API Calls |--->HTTP--->| Auth, Workspace & Document Meta   |  |\n|   +----------------+            +-----------------+-----------------+  |\n|                                                   |                    |\n|   Client Canvas (Yjs)          Hocuspocus WebSocket Engine (Port 4000) |\n|   +----------------+            +-----------------------------------+  |\n|   | Local Y.Doc    |---WS Frame>| Protocol Multiplexer              |  |\n|   | Awareness (pos)|<---Sync----|   | Room Registry                 |  |\n|   +----------------+            +---+-------------------------------+  |\n|                                     |                                  |\n|             +-----------------------+-----------------------+          |\n|             |                                               |          |\n|             v                                               v          |\n|   +---------------------------+           +--------------------------+ |\n|   | REDIS PUB/SUB AWARENESS   |           | DEBOUNCED SNAPSHOT SINK  | |\n|   | Ephemeral Cursor Presence |           | PostgreSQL (yjs_docs)    | |\n|   | Multi-Node Cluster Relay  |           | Binary Buffer Snapshot   | |\n|   +---------------------------+           +--------------------------+ |\n+------------------------------------------------------------------------+',
            },
          },
          {
            heading: 'TRANSACTION-TAGGED ECHO SUPPRESSION',
            body: "A frequent hazard in collaborative real-time architectures is the echo chamber effect: when Client A emits an edit, receives the server's broadcast reflection, interprets it as a new external modification, and re-broadcasts it back to the cluster. In Nexus, this was eliminated using origin-tagged transaction metadata.",
            bullets: [
              'Local transactions tagged with a unique client symbol (localOrigin) to distinguish user input from remote network frames',
              'Event listeners immediately discard inbound updates where origin === localOrigin, halting echo cycles at the boundary',
              'Sub-50ms round-trip peer synchronization with deterministic convergence under packet reordering',
            ],
            diagram: {
              caption: 'ECHO SUPPRESSION & BROADCAST SEQUENCE',
              ascii:
                'Client A (Editor)           Hocuspocus Server             Client B (Viewer)\n     |                              |                              |\n     +-- 1. User drags element      |                              |\n     +-- 2. ydoc.transact(..., local)                              |\n     +-- 3. Render locally (0ms)    |                              |\n     |                              |                              |\n     +-- 4. WS Binary Sync Frame -> |                              |\n     |                              +-- 5. Room Broadcast -------->|\n     |                              |                              +-- 6. Apply CRDT update\n     |                              |                              +-- 7. Origin check:\n     |                              |                              |     origin !== local\n     |                              |                              +-- 8. Render remote element\n     |                              |                              +-- 9. NO echo (SUPPRESSED)',
            },
            codeSnippet: {
              language: 'typescript',
              code: '// Suppressing broadcast echo loops using origin-tagged transactions\nconst localOrigin = Symbol("local-canvas-transaction");\n\n// When user modifies a canvas object locally\nfunction updateCanvasElement(elementId: string, attrs: Partial<ElementAttrs>) {\n  ydoc.transact(() => {\n    const yElement = yElementsMap.get(elementId);\n    if (yElement) {\n      Object.entries(attrs).forEach(([k, v]) => yElement.set(k, v));\n    }\n  }, localOrigin);\n}\n\n// Observing document changes: Ignore updates originating from ourselves\nyElementsMap.observeDeep((events, transaction) => {\n  if (transaction.origin === localOrigin) {\n    // Already rendered optimistically in local memory; do not trigger re-render\n    return;\n  }\n  // Remote update from network peer: apply to UI canvas\n  renderRemoteUpdates(events);\n});',
            },
          },
          {
            heading: 'CONSISTENCY MODELS: LOCKING VS OT VS YJS CRDTS',
            body: 'Real-time state synchronization can be achieved through three primary distributed architectures: Pessimistic Central Locking, Operational Transformation (OT), or Conflict-Free Replicated Data Types (CRDTs). Nexus adopted Yjs CRDTs because vector canvas operations require decentralized commutative merges without central sequencer bottlenecks.',
            table: {
              caption: 'REAL-TIME COLLABORATION CONSISTENCY ARCHITECTURES',
              headers: [
                'Architecture',
                'Conflict Resolution',
                'Offline Editing',
                'Server Overhead',
                'Implementation',
                'Verdict for Canvas',
              ],
              rows: [
                [
                  'Pessimistic Locking',
                  'Mutex / Row DB locks',
                  'Impossible (Fails offline)',
                  'High (Lock table thrashing)',
                  'Low',
                  'Unusable: Blocks concurrent interactions',
                ],
                [
                  'Operational Transform (OT)',
                  'Centralized transformation',
                  'Complex buffer re-basing',
                  'Extreme (Central sequencer)',
                  'High (Combinatorial edge cases)',
                  'Fragile: Optimized for 1D text, not 2D canvas',
                ],
                [
                  'Yjs CRDTs (Nexus)',
                  'Commutative state merge',
                  'Seamless local merge',
                  'Minimal (Dumb byte relay)',
                  'Moderate (Binary encoding)',
                  'Optimal: Zero-lock mathematical convergence',
                ],
              ],
            },
          },
          {
            heading: 'DEBOUNCED BINARY SNAPSHOT PERSISTENCE',
            body: 'Writing individual vector coordinate changes directly to a relational database during continuous cursor dragging at 60 FPS would overwhelm PostgreSQL with thousands of write queries per second. Nexus decouples WebSocket transport from disk persistence using an in-memory buffer with debounced flush cycles.',
            bullets: [
              'Y.encodeStateAsUpdate compiles document state into an ultra-dense Uint8Array binary format',
              'Updates accumulate in memory; a 2,000ms debounce timer commits binary buffers to PostgreSQL',
              'Reduces database write I/O operations by over 90% without risking unpersisted canvas data loss on shutdown',
            ],
            codeSnippet: {
              language: 'typescript',
              code: '// Debounced binary snapshot persistence to PostgreSQL\nimport * as Y from "yjs";\n\nlet saveTimeout: NodeJS.Timeout | null = null;\nconst DEBOUNCE_MS = 2000;\n\nfunction scheduleSnapshot(docName: string, ydoc: Y.Doc) {\n  if (saveTimeout) clearTimeout(saveTimeout);\n\n  saveTimeout = setTimeout(async () => {\n    // Encode full Y.Doc into compact Uint8Array binary buffer\n    const state = Y.encodeStateAsUpdate(ydoc);\n\n    await db.query(\n      "INSERT INTO canvas_snapshots (document_id, state_blob, updated_at) " +\n      "VALUES ($1, $2, NOW()) " +\n      "ON CONFLICT (document_id) " +\n      "DO UPDATE SET state_blob = EXCLUDED.state_blob, updated_at = NOW()",\n      [docName, Buffer.from(state)]\n    );\n  }, DEBOUNCE_MS);\n}',
            },
          },
        ],
      },
    },
    {
      id: 'rate-limiter',
      title: 'Rate Limiter',
      description:
        'A high-throughput distributed rate-limiting engine implementing six distinct algorithmic strategies with Redis persistence and sub-millisecond evaluation latency.',
      category: 'Backend',
      featured: true,
      status: 'Completed',
      thumbnail: '/projects/rate-limiter.png',
      githubUrl: 'https://github.com/Arjun586/Rate-limiter',
      technologies: [
        'TypeScript',
        'Node.js',
        'Express',
        'Redis',
        'Docker',
      ],
      caseStudy: {
        brief:
          'A production-grade, distributed rate-limiting engine implementing six distinct algorithmic strategies with Redis persistence and sub-millisecond evaluation latency.',
        challenge:
          'Prevent distributed race conditions and memory bloat under high-concurrency burst traffic while maintaining sub-millisecond evaluation latency across distributed application instances.',
        approach: [
          {
            title: 'ALGORITHM SUITE',
            description:
              'Implemented Fixed Window, Sliding Window Log, Sliding Window Counter, Token Bucket, Leaky Bucket (Counter), and Leaky Bucket (Queue).',
          },
          {
            title: 'EXPRESS MIDDLEWARE & FACTORY',
            description:
              'Designed a pluggable Express middleware layer and factory pattern that instantiates any rate-limiting strategy dynamically with standardized X-RateLimit-* response headers.',
          },
          {
            title: 'ZERO-ALLOCATION MEMORY PROFILES',
            description:
              'Engineered custom Singly Linked Lists for sliding log timestamp queues, eliminating V8 Array.shift() O(n) GC memory churn under sustained traffic.',
          },
        ],
        outcome:
          'Deterministic traffic shaping across all 6 strategies with <1ms evaluation overhead, zero-leak memory stability, and clean middleware integration across Express API routes.',
        architecture:
          'Modular middleware layer positioning algorithmic evaluators between the edge ingress and downstream business logic. Storage is abstracted between custom in-memory data structures and distributed Redis stores, orchestrated through a unified Factory Pattern interface.',
        keyFocus: [
          '6 Core Rate Limiting Algorithms',
          'Express Middleware & Factory Pattern Architecture',
          'Memory Optimization (Singly Linked List vs Array.shift)',
          'Dynamic Header Injection (X-RateLimit-*)',
        ],
        sections: [
          {
            heading: 'ALGORITHMIC STRATEGY COMPARISON',
            body: 'Rate limiting is not one-size-fits-all. Different workloads require distinct trade-offs between memory efficiency, burst tolerance, and boundary precision. The engine implements six production algorithms to handle diverse ingress patterns.',
            table: {
              caption: 'RATE LIMITING ALGORITHMS: PRODUCTION COMPARISON MATRIX',
              headers: [
                'Algorithm',
                'Burst Handling',
                'Memory / Key',
                'Boundary Precision',
                'Redis Primitive',
                'Primary Use Case',
              ],
              rows: [
                [
                  'Fixed Window',
                  'Vulnerable: 2x burst at boundary',
                  'O(1) - Single integer',
                  'Coarse (Resets on clock tick)',
                  'INCR + EXPIRE',
                  'Basic bot throttling, public APIs',
                ],
                [
                  'Sliding Window Log',
                  'Strictly zero burst leakage',
                  'O(N) - 1 entry per request',
                  'Microsecond precision',
                  'ZADD + ZREMRANGEBYSCORE',
                  'High-security financial & auth endpoints',
                ],
                [
                  'Sliding Window Counter',
                  'Smooth weighted approximation',
                  'O(1) - 2 integer counters',
                  'High (~99.5% accuracy)',
                  'Weighted window counters',
                  'High-volume standard API rate limiting',
                ],
                [
                  'Token Bucket',
                  'Permits controlled burst up to capacity',
                  'O(1) - Tokens + Last Timestamp',
                  'Continuous refill calculation',
                  'Continuous token refill & decrement',
                  'API gateways, burst-tolerant webhook tiers',
                ],
                [
                  'Leaky Bucket',
                  'Zero burst: Constant egress rate',
                  'O(Queue Size) - Buffer list',
                  'Constant output spacing',
                  'FIFO Queue / Counter drain',
                  'Downstream database write smoothing',
                ],
              ],
            },
          },
          {
            heading: 'MEMORY COMPLEXITY & GC ALLOCATION OPTIMIZATION',
            body: 'In V8 runtime profiling, Naive Sliding Window Log implementations relying on JavaScript Array.shift() suffered acute performance degradation under load. Array.shift() in V8 incurs an O(n) memory copy of all subsequent array elements every time an expired timestamp is evicted. Replacing the array with a custom Singly Linked List transformed eviction into an O(1) pointer unlinking operation.',
            diagram: {
              caption:
                'MEMORY STRUCTURE: ARRAY.SHIFT() VS SINGLY LINKED LIST',
              ascii:
                'NAIVE V8 ARRAY.SHIFT() - O(N) ELEMENT COPY:\n┌────────┬────────┬────────┬────────┬────────┐\n│  t0    │  t1    │  t2    │  t3    │  t4    │  (Array size: N)\n└────────┴────────┴────────┴────────┴────────┘\n    ▲\n    └─ Evict head (shift): Must re-index and copy N-1 elements in V8 memory!\n       Causes heavy GC thrashing and CPU spikes at 10k req/sec.\n\nCUSTOM SINGLY LINKED LIST - O(1) HEAD UNLINKING:\n┌──────────────┐     ┌──────────────┐     ┌──────────────┐\n│  Head (t0)   │───▶ │  Node (t1)   │───▶ │  Node (t2)   │───▶ ...\n└──────────────┘     └──────────────┘     └──────────────┘\n       │\n       └─ Evict: head = head.next  [Deterministic O(1) pointer swap]\n          Zero element copying. Negligible heap allocation.',
            },
            table: {
              caption: 'TIME & SPACE ASYMPTOTIC COMPLEXITY COMPARISON',
              headers: [
                'Data Structure / Engine',
                'Evaluation Complexity',
                'Eviction Complexity',
                'Per-User Space',
                'V8 GC Impact',
              ],
              rows: [
                [
                  'Naive Array.shift()',
                  'O(1) append',
                  'O(N) memory copy',
                  'High (Array resizing overhead)',
                  'Frequent GC pauses under load',
                ],
                [
                  'Singly Linked List',
                  'O(1) append',
                  'O(1) head unlink',
                  'Low (Node pointers only)',
                  'Negligible steady-state allocation',
                ],
                [
                  'Redis Sorted Set (ZSET)',
                  'O(log N) insert',
                  'O(log M + M) score range',
                  'Moderate (Skip list + Dict)',
                  'Offloaded to external Redis process',
                ],
              ],
            },
          },
          {
            heading: 'FACTORY PATTERN & EXPRESS MIDDLEWARE PIPELINE',
            body: 'To keep application routes decoupled from specific rate-limiting implementations, the engine exposes a unified RateLimiterFactory and Express middleware adapter. Any of the six algorithms can be swapped via configuration while automatically injecting RFC-compliant rate-limit headers.',
            diagram: {
              caption: 'EXPRESS MIDDLEWARE & FACTORY DISPATCH FLOW',
              ascii:
                'HTTP Request ──▶ [Express RateLimit Middleware] ──▶ [RateLimiterFactory.create(strategy)]\n                                                               │\n       ┌───────────────────────────────────────────────────────┴──────────────────────┐\n       ▼                                                       ▼                      ▼\n[Token Bucket]                                       [Sliding Window Log]    [Sliding Counter]\n       │                                                       │                      │\n       └───────────────────────┬───────────────────────────────┴──────────────────────┘\n                               ▼\n              [Allowed: Inject X-RateLimit-* & next()]  OR  [Blocked: HTTP 429 Too Many Requests]',
            },
            codeSnippet: {
              language: 'typescript',
              code: '// Express Middleware with Strategy Factory Pattern\nexport function createRateLimitMiddleware(config: RateLimitConfig) {\n  const limiter = RateLimiterFactory.create(config.algorithm, config);\n\n  return async (req: Request, res: Response, next: NextFunction) => {\n    const clientKey = config.keyGenerator ? config.keyGenerator(req) : req.ip;\n    const result = await limiter.consume(clientKey);\n\n    res.setHeader("X-RateLimit-Limit", config.limit);\n    res.setHeader("X-RateLimit-Remaining", Math.max(0, result.remaining));\n\n    if (!result.allowed) {\n      res.setHeader("Retry-After", Math.ceil(result.retryAfterMs / 1000));\n      return res.status(429).json({ error: "Too Many Requests" });\n    }\n\n    return next();\n  };\n}',
            },
          },
        ],
      },
    },
    {
      id: 'replayos',
      title: 'ReplayOS',
      description:
        'Developer observability platform that transforms logs, traces, and incidents into visual timelines, enabling faster debugging and root-cause analysis.',
      category: 'Full Stack',
      featured: false,
      status: 'Completed',
      thumbnail: '/projects/replayos.png',
      githubUrl: 'https://github.com/Arjun586/ReplayOS',
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'Express',
        'PostgreSQL',
        'Prisma',
        'Redis',
        'BullMQ',
        'JWT',
        'RBAC',
      ],
      caseStudy: {
        brief:
          'ReplayOS turns operational signals such as logs, traces, and incidents into visual timelines for faster debugging.',
        challenge:
          'Debugging often means reconstructing what happened across scattered events. ReplayOS focuses that investigation around a single chronological view.',
        approach: [
          {
            title: 'TIMELINE FIRST',
            description:
              "Logs, traces, and incidents are organized as visual sequences so engineers can follow an event's context over time.",
          },
          {
            title: 'FULL-STACK FOUNDATION',
            description:
              "React and TypeScript pair with Node.js, Express, PostgreSQL, and Prisma for the platform's application layer.",
          },
          {
            title: 'CONTROLLED ACCESS',
            description:
              'JWT authentication and role-based access control support protected observability workflows.',
          },
        ],
        outcome:
          'A focused observability concept designed to reduce the distance between an incident and its root cause.',
        sections: [
          {
            heading: 'OVERVIEW',
            body: 'ReplayOS is a developer observability platform that aggregates logs, traces, and incidents into visual timelines. The goal is to help engineers debug faster by showing events in chronological context rather than isolated log entries.',
          },
          {
            heading: 'TECHNICAL IMPLEMENTATION',
            body: 'The platform uses a React/TypeScript frontend with a Node.js/Express backend. PostgreSQL with Prisma handles persistent storage, Redis provides caching, and BullMQ manages background job processing for data aggregation and timeline generation.',
            bullets: [
              'Visual timeline rendering for correlated events',
              'JWT authentication with role-based access control',
              'BullMQ for background data processing',
              'PostgreSQL + Prisma for structured event storage',
            ],
          },
          {
            heading: 'KEY LEARNINGS',
            body: 'Building an observability tool highlighted the importance of data correlation across different signal types. Timeline-based visualization proved more intuitive than traditional log-search interfaces for understanding incident sequences.',
          },
        ],
      },
    },
    {
      id: 'kmrl',
      title: 'KMRL',
      description:
        'Intelligent document processing platform that classifies, routes, and interprets documents while connecting policies, approvals, and workflows in real time.',
      category: 'Full Stack',
      featured: false,
      status: 'Completed',
      thumbnail: '/projects/kmrl.png',
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'Express',
        'MongoDB',
        'WebSockets',
        'LangChain',
        'Gemini',
        'n8n',
      ],
    },
    {
      id: 'studynotion',
      title: 'StudyNotion',
      description:
        'EdTech platform where students purchase and consume courses while instructors create, manage, and analyze educational content.',
      category: 'Full Stack',
      featured: false,
      status: 'Completed',
      thumbnail: '/projects/studynotion.png',
      githubUrl: 'https://github.com/Arjun586/studynotion',
      technologies: [
        'React',
        'Redux Toolkit',
        'Node.js',
        'Express',
        'MongoDB',
        'JWT',
        'Tailwind',
      ],
    },
    {
      id: 'resq360',
      title: 'RESQ360',
      description:
        'Emergency response platform that combines real-time alerts, community reporting, and safety resources to improve crisis coordination.',
      category: 'Hackathon',
      featured: false,
      status: 'Hackathon',
      thumbnail: '/projects/resq360.png',
      githubUrl: 'https://github.com/Arjun586/RESQ360-hacknovate',
      technologies: [
        'React',
        'TypeScript',
        'Firebase',
        'Firestore',
        'Gemini API',
        'Tailwind',
      ],
    },
    {
      id: 'search-test',
      title: 'Search-Test',
      description:
        'An empirical search benchmarking engine comparing PostgreSQL ILIKE, pg_trgm trigrams, PostgreSQL tsvector FTS, and Elasticsearch across 100,000 real-world corporate records.',
      category: 'Backend',
      featured: true,
      status: 'Completed',
      thumbnail: '/projects/search-test.png',
      githubUrl: 'https://github.com/Arjun586/search-test',
      technologies: [
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'Elasticsearch',
        'Docker',
      ],
      caseStudy: {
        brief:
          'An empirical benchmarking suite comparing PostgreSQL ILIKE, pg_trgm trigram indexes, PostgreSQL tsvector Full-Text Search, and Elasticsearch across 100,000 real-world corporate records.',
        challenge:
          'Determine exact cold and warm query latency, QPS boundaries, and linguistic accuracy trade-offs across relational and dedicated search engines on a 100,000-record dataset.',
        approach: [
          {
            title: 'STREAMING ETL INGESTION',
            description:
              'Engineered a 100,000-row streaming CSV importer concurrently batch-inserting into PostgreSQL and bulk-indexing into an Elasticsearch cluster via dual-threaded pipelines.',
          },
          {
            title: '8-QUERY EMPIRICAL MATRIX',
            description:
              'Designed an 8-query stress suite testing high-frequency terms, linguistic plurals, rare tokens, and partial substrings to isolate exact index behavior.',
          },
          {
            title: 'LATENCY PROFILING',
            description:
              'Instrumented cold-cache and warm-cache query timing across p50, p90, p99, and p99.9 latency percentiles alongside sustained queries-per-second measurement.',
          },
        ],
        outcome:
          'Discovered pg_trgm delivers 1.48ms warm substring latency, PostgreSQL tsvector achieves 1.63ms full-text speed, and Elasticsearch delivers sub-4ms flat latency across all query complexities.',
        architecture:
          'Node.js benchmark runner orchestrating tests against two containerized backends: PostgreSQL 16 (configured with pg_trgm extensions and GIN indexes) and Elasticsearch 8 (configured with standard analyzers and inverted index shards). Queries execute sequentially with cold/warm cache separation and automatic percentile calculation.',
        keyFocus: [
          '100,000-Row Dual-Write Streaming Ingestion',
          '8-Query Real-World Empirical Benchmark Suite',
          'pg_trgm vs tsvector vs Elasticsearch Profiling',
          'Linguistic Stemming vs Substring Behavior Analysis',
        ],
        sections: [
          {
            heading: 'EMPIRICAL 100K BENCHMARK RESULTS (TEST 1 - TEST 8)',
            body: 'To validate search architectures with empirical truth rather than theoretical assumptions, the benchmark tested 100,000 real-world company records across eight diverse query profiles. Tests captured exact cold and warm execution latencies, hit counts, and index retrieval mechanics.',
            table: {
              caption:
                '100,000 RECORDS EMPIRICAL BENCHMARK: POSTGRESQL VS ELASTICSEARCH',
              headers: [
                'Query Term',
                'Query Profile',
                'PostgreSQL ILIKE',
                'PostgreSQL pg_trgm',
                'PostgreSQL FTS (tsvector)',
                'Elasticsearch (Warm)',
              ],
              rows: [
                [
                  'database',
                  'High Frequency (31,446 hits)',
                  '187.21 ms',
                  '38.25 ms (GIN)',
                  '1.63 ms (GIN tsvector)',
                  '2.98 ms',
                ],
                [
                  'replication',
                  'Exact Root Stem (1,842 hits)',
                  '162.40 ms',
                  '8.91 ms (GIN)',
                  '2.14 ms (GIN tsvector)',
                  '3.12 ms',
                ],
                [
                  'replications',
                  'Plural Inflection Test',
                  '159.10 ms (0 hits)',
                  '7.23 ms (0 hits)',
                  '2.14 ms (1,842 hits - Snowball)',
                  '3.25 ms (1,842 hits - Stemmed)',
                ],
                [
                  'container',
                  'Medium Frequency (12,890 hits)',
                  '174.50 ms',
                  '19.45 ms (GIN)',
                  '1.89 ms (GIN tsvector)',
                  '2.84 ms',
                ],
                [
                  'containers',
                  'Plural Inflection Test',
                  '168.30 ms (0 hits)',
                  '18.12 ms (0 hits)',
                  '1.89 ms (12,890 hits - Snowball)',
                  '2.91 ms (12,890 hits - Stemmed)',
                ],
                [
                  'artificial',
                  'Medium Frequency (6,412 hits)',
                  '165.80 ms',
                  '12.30 ms (GIN)',
                  '1.74 ms (GIN tsvector)',
                  '3.05 ms',
                ],
                [
                  'kuber',
                  'Partial Substring (0 whole words)',
                  '161.20 ms (412 hits)',
                  '1.48 ms (412 hits - Triumph)',
                  '0.92 ms (0 hits - Fails Substring)',
                  '3.10 ms (0 hits - Fails Standard)',
                ],
                [
                  'postgr',
                  'Partial Substring (0 whole words)',
                  '163.40 ms (890 hits)',
                  '2.10 ms (890 hits - Triumph)',
                  '0.88 ms (0 hits - Fails Substring)',
                  '3.15 ms (0 hits - Fails Standard)',
                ],
              ],
            },
            bullets: [
              'PostgreSQL ILIKE performs full table sequential scans (150-187ms) regardless of query term, failing SLA requirements at scale',
              'pg_trgm is the undisputed winner for partial substrings (kuber, postgr) at 1.48ms, finding matches where tokenized full-text engines return 0 hits',
              "PostgreSQL tsvector FTS delivers lightning-fast 1.63ms - 2.14ms speeds with English Snowball stemming, successfully matching 'replications' to 'replication'",
              'Elasticsearch delivers consistent, flat 2.8ms - 3.3ms warm latency across all query shapes, providing the highest throughput under multi-threaded concurrency',
            ],
          },
          {
            heading: 'INGESTION PIPELINE & HARNESS TOPOLOGY',
            body: 'The benchmark harness orchestrates a dual-write streaming ETL pipeline. A 100,000-row corporate dataset is parsed chunk-by-chunk via Node.js streams to maintain a negligible memory footprint under 50MB during import, synchronizing relational tables and search clusters in parallel.',
            diagram: {
              caption: 'STREAMING INGESTION PIPELINE & BENCHMARK HARNESS',
              ascii:
                '┌────────────────────────────────────────────────────────────────────────┐\n│                   STREAMING INGESTION & DUAL-WRITE ETL                 |\n│                                                                        |\n│   100,000-Row CSV           Node.js Streaming Pipeline (Memory < 50MB) |\n│   ┌────────────────┐        ┌───────────────────────────────────────┐  |\n│   │ companies.csv  │──Stream──▶ csv-parser (HighWaterMark: 64KB)    │  |\n│   └────────────────┘        └───────────────────┬───────────────────┘  |\n│                                                 │                      |\n│             ┌───────────────────────────────────┴───────────────────┐  |\n│             ▼                                                       ▼  |\n│   ┌───────────────────────────┐           ┌──────────────────────────┐ |\n│   │ POSTGRESQL 16 (DOCKER)    │           │ ELASTICSEARCH 8 (DOCKER) │ |\n│   │ - companies table         │           │ - companies index        │ |\n│   │ - pg_trgm GIN index       │           │ - Standard Analyzer      │ |\n│   │ - tsvector GIN index      │           │ - Inverted Index Shards  │ |\n│   └─────────────┬─────────────┘           └─────────────┬────────────┘ |\n│                 │                                       │              |\n│                 └───────────────────┬───────────────────┘              |\n│                                     ▼                                  |\n│   ┌──────────────────────────────────────────────────────────────────┐ |\n│   │            AUTOMATED BENCHMARK HARNESS & METRICS RUNNER          │ |\n│   │  8-Query Matrix  •  Cold/Warm Isolation  •  p50 / p95 / p99 Latency│ |\n│   └──────────────────────────────────────────────────────────────────┘ |\n└────────────────────────────────────────────────────────────────────────┘',
            },
          },
          {
            heading: 'SEARCH ENGINE ARCHITECTURAL DECISION MATRIX',
            body: 'The empirical benchmarks reveal clear architectural boundaries for production systems. Organizations frequently introduce Elasticsearch prematurely, incurring substantial cluster operational costs and RAM overhead when PostgreSQL native indexes solve their exact requirements.',
            table: {
              caption: 'PRODUCTION SEARCH STRATEGY DECISION MATRIX',
              headers: [
                'Engine / Strategy',
                'RAM Overhead',
                'Substring Match',
                'Linguistic Stemming',
                'Query Latency (Warm)',
                'Recommended Workload',
              ],
              rows: [
                [
                  'PostgreSQL ILIKE',
                  'Zero (No index)',
                  'Yes (Full scan)',
                  'None',
                  '150ms - 187ms',
                  'Small internal tools (<5,000 rows)',
                ],
                [
                  'PostgreSQL pg_trgm',
                  'Moderate (Trigram GIN)',
                  'Excellent (1.48ms)',
                  'None',
                  '1.48ms - 38ms',
                  'Names, SKUs, autocomplete (<1M rows)',
                ],
                [
                  'PostgreSQL FTS (tsvector)',
                  'Low (Lexeme GIN)',
                  'No (Whole tokens)',
                  'Full (Snowball)',
                  '1.63ms - 2.14ms',
                  'Blogs, docs, catalogs (<5M rows)',
                ],
                [
                  'Elasticsearch Cluster',
                  'High (JVM + Page Cache)',
                  'Requires n-grams',
                  'Full (Multi-lingual)',
                  '2.80ms - 3.25ms',
                  'Massive data (>5M rows), distributed scaling',
                ],
              ],
            },
          },
          {
            heading: 'KEY FINDINGS & INFRASTRUCTURE SIZING',
            body: 'PostgreSQL native search capabilities are significantly under-leveraged in production systems. By pairing pg_trgm GIN indexes for autocomplete and partial substring inputs with tsvector GIN indexes for stemmed text queries, teams can achieve sub-2ms query speeds on datasets up to 1,000,000 records without adding third-party infrastructure.',
            bullets: [
              'Zero Cluster Overhead: Eliminates dedicated JVM instances, Elasticsearch shard rebalancing, and sync drift issues',
              'ACID Search Consistency: Changes to rows are searchable instantly within the same database transaction without ETL replication lag',
              'Elasticsearch sweet spot begins when datasets exceed available PostgreSQL RAM, require distributed sharding, or need complex multi-field BM25 relevance tuning',
            ],
          },
        ],
      },
    },
    {
      id: 'distributed-job-queue',
      title: 'Distributed Job-Queue',
      description:
        'A production-grade distributed asynchronous task queue built on Redis Streams, PostgreSQL state tracking, and consumer group worker pools with automatic PEL crash recovery.',
      category: 'Backend',
      featured: true,
      status: 'Completed',
      thumbnail: '/projects/distributed-job-queue.png',
      githubUrl: 'https://github.com/Arjun586/distributed-job-queue',
      technologies: [
        'TypeScript',
        'Node.js',
        'Express',
        'Redis',
        'PostgreSQL',
        'Docker',
      ],
      caseStudy: {
        brief:
          'A production-grade distributed job queue engine built with Redis Streams, PostgreSQL state tracking, and consumer group worker pools, guaranteeing at-least-once delivery with automatic PEL crash recovery.',
        challenge:
          'Guarantee zero job loss and prevent duplicate task execution when worker processes crash abruptly while executing unacknowledged long-running asynchronous jobs.',
        approach: [
          {
            title: 'DUAL-LAYER PERSISTENCE',
            description:
              'Jobs are transactionally logged in PostgreSQL with state metadata before publishing to Redis Streams (XADD) with unique message IDs.',
          },
          {
            title: 'CONSUMER GROUP POOLS',
            description:
              'Worker pools process jobs using XREADGROUP and XACK, maintaining an in-flight Pending Entries List (PEL) for crash resilience.',
          },
          {
            title: 'WATCHDOG CRASH RECOVERY',
            description:
              'A background supervisor thread continuously inspects XPENDING and reclaims orphaned tasks via XCLAIM after worker heartbeat timeouts.',
          },
        ],
        outcome:
          'Guaranteed at-least-once delivery under worker crash simulation, sub-5ms job dispatch latency, and automated dead-letter routing preventing poison pill worker exhaustion.',
        architecture:
          'Decoupled producer-consumer system utilizing Redis Streams as the high-throughput transport ring buffer and PostgreSQL as the authoritative job audit log. The producer API records a job record in PostgreSQL (state: PENDING) and immediately appends it to Redis via XADD, returning HTTP 202 Accepted. Concurrent workers consume messages using consumer groups (XREADGROUP), process tasks, and acknowledge via XACK. A watchdog sweeper continuously inspects the Redis Pending Entries List (PEL) and claims orphaned jobs via XCLAIM if a worker crashes before acknowledging.',
        keyFocus: [
          'Redis Streams + Consumer Groups (XREADGROUP / XACK)',
          'PEL Watchdog Auto-Recovery (XPENDING / XCLAIM)',
          'PostgreSQL State Audit & Status Transition Logging',
          'Exponential Backoff with Full Jitter & Dead Letter Queue',
        ],
        sections: [
          {
            heading: 'LIFECYCLE & ASYNCHRONOUS INGESTION TOPOLOGY',
            body: 'Asynchronous processing engines must decouple client ingress latency from heavy computational execution while ensuring tasks are never lost in transit. The architecture combines Redis Streams for high-speed message distribution with PostgreSQL for long-term state audit trails.',
            bullets: [
              'HTTP API records state: PENDING in PostgreSQL, appends to Redis Stream via XADD, and immediately returns 202 Accepted (<5ms)',
              'Worker pools fetch unassigned messages via XREADGROUP BLOCK, moving jobs into their local Pending Entries List (PEL)',
              'Upon completion, worker calls XACK and transitions PostgreSQL record to COMPLETED; failures update error stack and retry counters',
            ],
            diagram: {
              caption: 'DECOUPLED PRODUCER-CONSUMER LIFECYCLE TOPOLOGY',
              ascii:
                '+------------------------------------------------------------------------+\n|                   DECOUPLED ASYNCHRONOUS PIPELINE                      |\n|                                                                        |\n|   Client Request             Express API (Producer)                    |\n|   +----------------+         +--------------------------------------+  |\n|   | POST /jobs/run |--HTTP-->| 1. Write job (status: PENDING)       |  |\n|   | 202 Accepted   |<--------| 2. XADD stream:jobs * payload        |  |\n|   +----------------+         +---------------+----------------------+  |\n|                                              |                         |\n|             +--------------------------------+----------------------+  |\n|             |                                                       |  |\n|             v                                                       v  |\n|   +---------------------------+           +--------------------------+ |\n|   | POSTGRESQL 16             |           | REDIS STREAMS BUFFER     | |\n|   | - Authoritative Audit Log |           | - stream:jobs (Ring Log) | |\n|   | - Status: PENDING/RUNNING |           | - Consumer Group: pool-1 | |\n|   | - Failure Error Traces    |           | - Pending Entries (PEL)  | |\n|   +-------------^-------------+           +-------------+------------+ |\n|                 |                                       |              |\n|                 | Update Status                         | XREADGROUP   |\n|                 |                                       v              |\n|   +-------------+----------------------------------------------------+ |\n|   |               WORKER POOL CONSUMERS (CONCURRENT)                 | |\n|   |  Worker 1 (Processing)  *  Worker 2 (Idle)  *  Worker 3 (Active) | |\n|   |  Execution complete ---> XACK message ---> PostgreSQL (COMPLETED)| |\n|   +------------------------------------------------------------------+ |\n+------------------------------------------------------------------------+',
            },
          },
          {
            heading: 'PEL CRASH RECOVERY & AT-LEAST-ONCE DELIVERY',
            body: "When a worker claims a message via XREADGROUP, Redis registers the job in the group's Pending Entries List (PEL). If that worker process suffers an unhandled exception, SIGKILL, or hardware shutdown before invoking XACK, the job remains pending in Redis memory indefinitely. A background Watchdog thread periodically audits the PEL to guarantee zero task abandonment.",
            diagram: {
              caption: 'WATCHDOG PEL CRASH DETECTION & AUTO-CLAIM SEQUENCE',
              ascii:
                'Worker 1 (Crashes)              Redis Streams PEL             Worker 2 (Watchdog)\n     |                                  |                                  |\n     +-- 1. XREADGROUP (Job #101) ----->|                                  |\n     |    [Job moved to Worker 1 PEL]   |                                  |\n     +-- 2. Starts execution            |                                  |\n     |                                  |                                  |\n     x  CRASH (SIGKILL / OOM)           |                                  |\n     x  (Never sends XACK)              |                                  |\n                                        |                                  |\n                                        |<-- 3. XPENDING (idle > 30s) -----+\n                                        |    [Reports Job #101 orphaned]   |\n                                        |                                  |\n                                        |<-- 4. XCLAIM job #101 to W2 -----+\n                                        |    [Transfers ownership to W2]   |\n                                        |                                  +-- 5. Executes task\n                                        |<-- 6. XACK job #101 -------------+\n                                        |    [Job removed from PEL]        +-- Success!',
            },
            codeSnippet: {
              language: 'typescript',
              code: '// Watchdog PEL Recovery Loop\nasync function recoverOrphanedJobs(stream: string, group: string, workerName: string) {\n  const IDLE_TIMEOUT_MS = 30000; // 30 seconds without ACK\n\n  // Query pending entries exceeding idle threshold\n  const pending = await redis.xpending(stream, group, "-", "+", 10);\n\n  for (const entry of pending) {\n    const [id, consumer, idleTime] = entry;\n\n    if (idleTime > IDLE_TIMEOUT_MS) {\n      console.warn("[Watchdog] Claiming orphaned job " + id + " from dead worker " + consumer);\n\n      // Atomically claim ownership to this healthy worker\n      const claimed = await redis.xclaim(\n        stream,\n        group,\n        workerName,\n        IDLE_TIMEOUT_MS,\n        id\n      );\n\n      if (claimed.length > 0) {\n        await processJob(claimed[0]);\n        await redis.xack(stream, group, id);\n      }\n    }\n  }\n}',
            },
          },
          {
            heading: 'FAILURE CLASSIFICATION & RETRY STRATEGY',
            body: 'Retrying indiscriminately causes thundering herds and wastes computational resources on poison-pill payloads that will never succeed. The engine classifies errors into distinct operational tiers, pairing transient failures with exponential backoff and full jitter while instantly routing deterministic malformed payloads to the Dead Letter Queue (DLQ).',
            table: {
              caption: 'JOB FAILURE CLASSIFICATION & RETRY STRATEGY',
              headers: [
                'Failure Type',
                'Root Cause Example',
                'Retry Action',
                'Backoff Strategy',
                'Final SLA Policy',
              ],
              rows: [
                [
                  'Transient Network',
                  'Socket timeout / 503 Service Unavailable',
                  'Automatic retry',
                  'Exponential: 2^attempt * 100ms',
                  'Max 5 retries before DLQ',
                ],
                [
                  'Downstream Rate Limit',
                  'Third-party 429 Too Many Requests',
                  'Backoff retry',
                  'Full Jitter: random(0, 2^attempt * 500ms)',
                  'Max 8 retries before DLQ',
                ],
                [
                  'Permanent Schema Error',
                  'Invalid JSON payload / 400 Bad Request',
                  'Zero retries (Immediate fail)',
                  'None (Immediate termination)',
                  'Direct route to DLQ with stack trace',
                ],
                [
                  'Worker OOM / Hardware',
                  'Worker SIGKILL / Process crash',
                  'Recovered by PEL Watchdog',
                  'PEL idle delay window (30s)',
                  'DLQ route after 3 watchdog claims',
                ],
              ],
            },
          },
          {
            heading: 'MESSAGE BROKER ARCHITECTURAL TRADEOFFS',
            body: 'Choosing the correct asynchronous messaging backbone requires balancing operational overhead against delivery guarantees. The table below outlines why Redis Streams was selected as the optimal transport for this queue engine compared to traditional brokers.',
            table: {
              caption: 'MESSAGE BROKER COMPARISON FOR DISTRIBUTED WORKERS',
              headers: [
                'Broker Technology',
                'Persistence Model',
                'Consumer Groups',
                'Crash Recovery (PEL)',
                'Throughput',
                'Operational Complexity',
              ],
              rows: [
                [
                  'Redis Pub/Sub',
                  'Fire-and-forget (RAM only)',
                  'No (Broadcast to all)',
                  'Impossible (Lost if offline)',
                  'Extremely High (>100k/s)',
                  'Minimal (Zero state)',
                ],
                [
                  'Redis Streams (Engine)',
                  'AOF / RDB disk snapshots',
                  'Native (XREADGROUP)',
                  'Built-in (PEL via XCLAIM)',
                  'Very High (~50k/s)',
                  'Low (Single Redis instance / cluster)',
                ],
                [
                  'RabbitMQ (AMQP)',
                  'Durable queue files',
                  'Native consumer queues',
                  'Native manual ACK / nack',
                  'Moderate (~20k/s)',
                  'Medium (Erlang clustering, exchanges)',
                ],
                [
                  'Apache Kafka',
                  'Distributed commit log',
                  'Native partition consumer groups',
                  'Consumer offset management',
                  'Ultra-High (>200k/s)',
                  'High (ZooKeeper/KRaft, partition tuning)',
                ],
              ],
            },
          },
        ],
      },
    },
    {
      id: 'verichain',
      title: 'VeriChain',
      description:
        'Blockchain-powered property verification system that converts physical assets into secure, verifiable digital records.',
      category: 'Backend / Hackathon',
      featured: false,
      status: 'Hackathon',
      thumbnail: '/projects/verichain.png',
      githubUrl:
        'https://github.com/aryan-saini-dev/Verichain-Property_Transfer_Using_Blockchain',
      technologies: ['Blockchain', 'NFT', 'Property Verification'],
    },
    {
      id: 'chat-app',
      title: 'Chat App',
      description:
        'Real-time messaging application featuring instant communication, authentication, and scalable client-server architecture.',
      category: 'Full Stack',
      featured: false,
      status: 'Completed',
      thumbnail: '/projects/chat-app.png',
      githubUrl: 'https://github.com/Arjun586/chat-app',
      technologies: [
        'React',
        'Node.js',
        'Express',
        'Socket.io',
        'MongoDB',
        'JWT',
      ],
    },
    {
      id: 'video-backend',
      title: 'Video Backend',
      description:
        'Production-style backend inspired by modern video platforms, featuring authentication, subscriptions, comments, likes, and media management.',
      category: 'Backend',
      featured: false,
      status: 'Completed',
      thumbnail: '/projects/video-backend.png',
      githubUrl: 'https://github.com/Arjun586/full_backend',
      technologies: [
        'Node.js',
        'Express',
        'MongoDB',
        'Mongoose',
        'JWT',
        'Bcrypt',
      ],
    },
    {
      id: 'advanced-event-studio',
      title: 'Advanced Event Studio',
      description:
        'Interactive JavaScript playground designed to explore modern DOM events, event delegation, and real-world event-driven UI patterns.',
      category: 'Frontend',
      featured: false,
      status: 'Completed',
      thumbnail: '/projects/advanced-event-studio.png',
      githubUrl: 'https://github.com/Arjun586/advance-event-studio',
      technologies: ['JavaScript', 'HTML', 'CSS', 'DOM Events'],
    },
  ],
  skills: {
    categories: {
      Languages: ['JavaScript', 'TypeScript'],
      Frontend: [
        'HTML5',
        'CSS3',
        'React',
        'Next.js',
        'Redux Toolkit',
        'Tailwind CSS',
      ],
      'Backend & APIs': [
        'Node.js',
        'Express.js',
        'REST APIs',
        'Socket.io',
        'JWT',
        'OAuth',
        'RBAC',
      ],
      'Databases & Search': [
        'MongoDB',
        'PostgreSQL',
        'Redis',
        'Elasticsearch',
        'Prisma',
        'Mongoose',
        'Supabase',
      ],
      'Infrastructure & Systems': [
        'Docker',
        'Firebase',
        'Vercel',
        'Netlify',
        'Railway',
        'Render',
      ],
      'AI Tooling': [
        'Cursor',
        'Claude Code',
        'GitHub Copilot',
        'Gemini API',
        'OpenAI API',
        'Prompt Engineering',
      ],
      'Tools & Platforms': ['Git', 'GitHub', 'VS Code', 'Postman'],
    },
    csFoundations: [
      {
        concept: 'Data Structures & Algorithms',
        leetCodeUrl: 'https://leetcode.com/u/arjun586/',
      },
      {
        concept: 'Object-Oriented Programming',
      },
      {
        concept: 'DBMS',
      },
      {
        concept: 'Operating Systems',
      },
      {
        concept: 'Computer Networks',
      },
    ],
  },
  contact: {
    email: 'arjunofficial586@gmail.com',
    location: 'India',
    responseTime: 'Usually within 24 hours',
    socialLinks: {
      github: 'https://github.com/Arjun586',
      linkedin: 'https://www.linkedin.com/in/arjun586',
      leetcode: 'https://leetcode.com/u/arjun586/',
      email: 'mailto:arjunofficial586@gmail.com',
    },
    availableFor: [
      'Full Stack Development',
      'Web Application Projects',
      'API Development',
    ],
    resume: {
      viewUrl:
        'https://drive.google.com/file/d/1aXtavtpB3JTrM8ZWz32_XYXk_wWARHXp/view?usp=sharing',
      downloadUrl:
        'https://drive.google.com/uc?export=download&id=1aXtavtpB3JTrM8ZWz32_XYXk_wWARHXp',
    },
    collaborationCta: {
      title: "LET'S WORK TOGETHER",
      description:
        "Have a project in mind or want to collaborate? I'm always open to discussing new opportunities.",
    },
  },
};
