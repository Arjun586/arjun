import React from 'react';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectThumbnailProps {
  project: ProjectItem;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ project }) => {
  switch (project.id) {
    case 'rate-limiter':
      // Modeled directly on rate-limiter_e7d28c9c.png reference
      return (
        <svg
          className="w-full h-28 select-none"
          viewBox="0 0 460 116"
          fill="none"
          aria-hidden="true"
        >
          {/* Left: CLIENT Monitor */}
          <rect
            x="12"
            y="18"
            width="54"
            height="34"
            rx="3"
            className="fill-linen-50 dark:fill-espresso-850 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.3"
          />
          <line
            x1="12"
            y1="44"
            x2="66"
            y2="44"
            className="stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1"
          />
          <path
            d="M33 52 L30 59 L48 59 L45 52"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.2"
          />
          <line
            x1="25"
            y1="59"
            x2="53"
            y2="59"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.3"
          />
          <text
            x="39"
            y="70"
            fontSize="7.5"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-semibold"
          >
            CLIENT
          </text>

          {/* Arrow: Client -> Rate Limiter */}
          <text
            x="105"
            y="29"
            fontSize="6.5"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            HTTP
          </text>
          <line
            x1="72"
            y1="34"
            x2="136"
            y2="34"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.2"
          />
          <path
            d="M132 31 L137 34 L132 37"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.2"
          />
          <text
            x="105"
            y="44"
            fontSize="6.5"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            REQUESTS
          </text>

          {/* Center: RATE LIMITER Box with Gauge Dial */}
          <rect
            x="144"
            y="6"
            width="128"
            height="64"
            rx="4"
            className="fill-linen-50 dark:fill-espresso-850 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.4"
          />
          <text
            x="208"
            y="17"
            fontSize="8"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            RATE LIMITER
          </text>

          {/* Gauge Semi-Circle & Needle */}
          <path
            d="M 186 41 A 22 22 0 0 1 230 41"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.5"
            fill="none"
          />
          <line
            x1="208"
            y1="19"
            x2="208"
            y2="23"
            className="stroke-espresso-muted dark:stroke-[#9A948D]"
            strokeWidth="1.1"
          />
          <line
            x1="192"
            y1="25"
            x2="195"
            y2="28"
            className="stroke-espresso-muted dark:stroke-[#9A948D]"
            strokeWidth="1.1"
          />
          <line
            x1="224"
            y1="25"
            x2="221"
            y2="28"
            className="stroke-espresso-muted dark:stroke-[#9A948D]"
            strokeWidth="1.1"
          />
          <circle
            cx="208"
            cy="40"
            r="2.2"
            className="fill-espresso-850 dark:fill-[#EDEDEC]"
          />
          <line
            x1="208"
            y1="40"
            x2="220"
            y2="29"
            className="stroke-emerald-700 dark:stroke-emerald-400"
            strokeWidth="1.6"
          />

          {/* Allowed / Blocked Status lines inside Rate Limiter */}
          <circle
            cx="176"
            cy="51"
            r="3.5"
            className="stroke-emerald-700 dark:stroke-emerald-400"
            strokeWidth="1.1"
          />
          <path
            d="M174.5 51 L175.7 52.3 L178 49.7"
            className="stroke-emerald-700 dark:stroke-emerald-400"
            strokeWidth="1"
          />
          <text
            x="183"
            y="53.5"
            fontSize="6.5"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono"
          >
            ALLOWED
          </text>

          <circle
            cx="176"
            cy="61"
            r="3.5"
            className="stroke-rose-600 dark:stroke-rose-400"
            strokeWidth="1.1"
          />
          <text
            x="176"
            y="63"
            fontSize="5.5"
            textAnchor="middle"
            className="fill-rose-600 dark:fill-rose-400 font-mono"
          >
            ×
          </text>
          <text
            x="183"
            y="63.5"
            fontSize="6.5"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            BLOCKED (429)
          </text>

          {/* Upper Right Arrow -> SERVER */}
          <text
            x="312"
            y="18"
            fontSize="6.5"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono font-medium"
          >
            ALLOWED
          </text>
          <line
            x1="278"
            y1="22"
            x2="348"
            y2="22"
            className="stroke-emerald-700 dark:stroke-emerald-400"
            strokeWidth="1.2"
          />
          <path
            d="M344 19 L349 22 L344 25"
            className="stroke-emerald-700 dark:stroke-emerald-400"
            strokeWidth="1.2"
          />

          {/* Server Stack Blades */}
          <rect
            x="356"
            y="8"
            width="86"
            height="9"
            rx="1.5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.1"
          />
          <circle cx="434" cy="12.5" r="1.2" className="fill-emerald-600 dark:fill-emerald-400" />
          <rect
            x="356"
            y="18.5"
            width="86"
            height="9"
            rx="1.5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.1"
          />
          <circle cx="434" cy="23" r="1.2" className="fill-emerald-600 dark:fill-emerald-400" />
          <rect
            x="356"
            y="29"
            width="86"
            height="9"
            rx="1.5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.1"
          />
          <circle cx="434" cy="33.5" r="1.2" className="fill-emerald-600 dark:fill-emerald-400" />
          <text
            x="399"
            y="46"
            fontSize="6.5"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-semibold"
          >
            SERVER
          </text>

          {/* Lower Right Arrow -> 429 Dashed Box */}
          <text
            x="312"
            y="51"
            fontSize="6.5"
            textAnchor="middle"
            className="fill-rose-600 dark:fill-rose-400 font-mono"
          >
            BLOCKED
          </text>
          <line
            x1="278"
            y1="55"
            x2="348"
            y2="55"
            className="stroke-rose-600/80 dark:stroke-rose-400/80"
            strokeWidth="1.2"
          />
          <path
            d="M344 52 L349 55 L344 58"
            className="stroke-rose-600/80 dark:stroke-rose-400/80"
            strokeWidth="1.2"
          />
          <rect
            x="356"
            y="49"
            width="86"
            height="22"
            rx="3"
            strokeDasharray="3 2"
            className="fill-linen-50/70 dark:fill-espresso-850/70 stroke-rose-600/80 dark:stroke-rose-400/80"
            strokeWidth="1.1"
          />
          <text
            x="399"
            y="58.5"
            fontSize="6.5"
            textAnchor="middle"
            className="fill-rose-600 dark:fill-rose-400 font-mono font-semibold"
          >
            429 Too Many
          </text>
          <text
            x="399"
            y="66.5"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Requests
          </text>

          {/* Tree Connector from Rate Limiter down to 6 Algorithm Boxes */}
          <line
            x1="208"
            y1="70"
            x2="208"
            y2="78"
            className="stroke-espresso-muted dark:stroke-[#9A948D]"
            strokeWidth="1.1"
          />
          <line
            x1="44"
            y1="78"
            x2="416"
            y2="78"
            className="stroke-espresso-muted dark:stroke-[#9A948D]"
            strokeWidth="1.1"
          />

          {/* 6 Algorithm Mini-Cards */}
          {[
            { x: 10, label: '1. TOKEN', sub: 'BUCKET' },
            { x: 84, label: '2. LEAKY', sub: 'COUNTER' },
            { x: 158, label: '3. LEAKY', sub: 'QUEUE' },
            { x: 232, label: '4. FIXED', sub: 'WINDOW' },
            { x: 306, label: '5. SLIDING', sub: 'LOG' },
            { x: 380, label: '6. SLIDING', sub: 'COUNTER' },
          ].map((alg) => (
            <g key={alg.label}>
              <line
                x1={alg.x + 34}
                y1="78"
                x2={alg.x + 34}
                y2="83"
                className="stroke-espresso-muted dark:stroke-[#9A948D]"
                strokeWidth="1.1"
              />
              <rect
                x={alg.x}
                y="83"
                width="68"
                height="27"
                rx="2.5"
                className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
                strokeWidth="1.1"
              />
              <text
                x={alg.x + 34}
                y="95"
                fontSize="6.2"
                textAnchor="middle"
                className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-semibold"
              >
                {alg.label}
              </text>
              <text
                x={alg.x + 34}
                y="104"
                fontSize="5.8"
                textAnchor="middle"
                className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
              >
                {alg.sub}
              </text>
            </g>
          ))}
        </svg>
      );

    case 'search-test':
      // Modeled directly on search-test_959afa87.png reference
      return (
        <svg
          className="w-full h-28 select-none"
          viewBox="0 0 460 116"
          fill="none"
          aria-hidden="true"
        >
          {/* Left Card: Documents (PDF, DOC, TXT, CSV) */}
          <rect
            x="10"
            y="10"
            width="98"
            height="96"
            rx="6"
            className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1.2"
          />
          {/* 2x2 Document Badges */}
          <rect
            x="22"
            y="18"
            width="32"
            height="22"
            rx="3"
            className="fill-rose-500/15 dark:fill-rose-500/20 stroke-rose-600/60 dark:stroke-rose-400/60"
            strokeWidth="1"
          />
          <text
            x="38"
            y="32"
            fontSize="6.5"
            textAnchor="middle"
            className="fill-rose-700 dark:fill-rose-300 font-mono font-bold"
          >
            PDF
          </text>

          <rect
            x="62"
            y="18"
            width="32"
            height="22"
            rx="3"
            className="fill-sky-500/15 dark:fill-sky-500/20 stroke-sky-600/60 dark:stroke-sky-400/60"
            strokeWidth="1"
          />
          <text
            x="78"
            y="32"
            fontSize="6.5"
            textAnchor="middle"
            className="fill-sky-700 dark:fill-sky-300 font-mono font-bold"
          >
            DOC
          </text>

          <rect
            x="22"
            y="46"
            width="32"
            height="22"
            rx="3"
            className="fill-linen-200 dark:fill-espresso-800 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1"
          />
          <text
            x="38"
            y="60"
            fontSize="6.5"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            TXT
          </text>

          <rect
            x="62"
            y="46"
            width="32"
            height="22"
            rx="3"
            className="fill-emerald-500/15 dark:fill-emerald-500/20 stroke-emerald-600/60 dark:stroke-emerald-400/60"
            strokeWidth="1"
          />
          <text
            x="78"
            y="60"
            fontSize="6.5"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-300 font-mono font-bold"
          >
            CSV
          </text>

          <text
            x="59"
            y="84"
            fontSize="8"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            Documents
          </text>
          <text
            x="59"
            y="95"
            fontSize="6.5"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Ingest &amp; parse
          </text>

          {/* Arrow: Index documents */}
          <text
            x="136"
            y="44"
            fontSize="6.2"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Index
          </text>
          <text
            x="136"
            y="52"
            fontSize="6.2"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            docs
          </text>
          <line
            x1="112"
            y1="58"
            x2="158"
            y2="58"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.3"
          />
          <path
            d="M154 55 L159 58 L154 61"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.3"
          />

          {/* Center Card: Elasticsearch / Inverted Index */}
          <rect
            x="164"
            y="14"
            width="112"
            height="88"
            rx="6"
            className="fill-linen-50 dark:fill-espresso-850 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.3"
          />
          {/* Layered E / Index bars */}
          <rect
            x="204"
            y="24"
            width="32"
            height="7"
            rx="3.5"
            className="fill-amber-500/80 dark:fill-amber-400/85"
          />
          <rect
            x="200"
            y="34"
            width="28"
            height="7"
            rx="3.5"
            className="fill-espresso-850 dark:fill-[#EDEDEC]"
          />
          <rect
            x="204"
            y="44"
            width="32"
            height="7"
            rx="3.5"
            className="fill-emerald-600/85 dark:fill-emerald-400/85"
          />
          <text
            x="220"
            y="68"
            fontSize="8.5"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            Elasticsearch
          </text>
          <text
            x="220"
            y="80"
            fontSize="6.2"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Inverted index &amp;
          </text>
          <text
            x="220"
            y="89"
            fontSize="6.2"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono"
          >
            pg_trgm · 1.48ms
          </text>

          {/* Bidirectional Arrows: Search query / Relevant results */}
          <text
            x="302"
            y="40"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Query
          </text>
          <line
            x1="280"
            y1="46"
            x2="322"
            y2="46"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.2"
          />
          <path
            d="M318 43 L323 46 L318 49"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.2"
          />

          <line
            x1="322"
            y1="68"
            x2="280"
            y2="68"
            className="stroke-emerald-700 dark:stroke-emerald-400"
            strokeWidth="1.2"
          />
          <path
            d="M284 65 L279 68 L284 71"
            className="stroke-emerald-700 dark:stroke-emerald-400"
            strokeWidth="1.2"
          />
          <text
            x="302"
            y="79"
            fontSize="6"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono"
          >
            Results
          </text>

          {/* Right Card: Browser Search Window */}
          <rect
            x="328"
            y="8"
            width="122"
            height="100"
            rx="5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1.2"
          />
          <circle cx="337" cy="15" r="1.8" className="fill-espresso-muted" />
          <circle cx="343" cy="15" r="1.8" className="fill-espresso-muted" />
          <circle cx="349" cy="15" r="1.8" className="fill-espresso-muted" />

          {/* Search Bar */}
          <rect
            x="335"
            y="22"
            width="108"
            height="16"
            rx="3"
            className="fill-linen-100 dark:fill-espresso-900 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1"
          />
          <text
            x="341"
            y="32.5"
            fontSize="6.2"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono"
          >
            Q machine learning|
          </text>
          <rect
            x="413"
            y="24"
            width="28"
            height="12"
            rx="2"
            className="fill-espresso-850 dark:fill-[#EDEDEC]"
          />
          <text
            x="427"
            y="32"
            fontSize="5.5"
            textAnchor="middle"
            className="fill-linen-50 dark:fill-espresso-950 font-mono font-bold"
          >
            Search
          </text>

          {/* 3 Result Rows with Highlighted Spans */}
          {[44, 66, 88].map((rowY, i) => (
            <g key={rowY}>
              <rect
                x="335"
                y={rowY}
                width="108"
                height="17"
                rx="2.5"
                className="fill-linen-100/80 dark:fill-espresso-900/80 stroke-linen-border/70 dark:stroke-espresso-border"
                strokeWidth="0.9"
              />
              <rect
                x="340"
                y={rowY + 4}
                width="10"
                height="9"
                rx="1.5"
                className={
                  i === 0
                    ? 'fill-rose-500/70'
                    : i === 1
                    ? 'fill-sky-500/70'
                    : 'fill-emerald-500/70'
                }
              />
              <rect
                x="355"
                y={rowY + 4}
                width="48"
                height="3.5"
                rx="1.5"
                className="fill-espresso-muted/40 dark:fill-[#9A948D]/40"
              />
              <rect
                x="355"
                y={rowY + 10}
                width="22"
                height="3.5"
                rx="1.5"
                className="fill-amber-500/80 dark:fill-amber-400/80"
              />
              <rect
                x="380"
                y={rowY + 10}
                width="36"
                height="3.5"
                rx="1.5"
                className="fill-espresso-muted/30 dark:fill-[#9A948D]/30"
              />
            </g>
          ))}
        </svg>
      );

    case 'distributed-job-queue':
      // Modeled directly on distributed-job-queue_9416091d.png reference
      return (
        <svg
          className="w-full h-28 select-none"
          viewBox="0 0 460 116"
          fill="none"
          aria-hidden="true"
        >
          {/* Left Box: API Laptop </> */}
          <rect
            x="10"
            y="16"
            width="86"
            height="62"
            rx="6"
            className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1.2"
          />
          <rect
            x="33"
            y="23"
            width="40"
            height="22"
            rx="2"
            className="fill-linen-100 dark:fill-espresso-900 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.3"
          />
          <text
            x="53"
            y="37"
            fontSize="8"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            &lt;/&gt;
          </text>
          <line
            x1="28"
            y1="46"
            x2="78"
            y2="46"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.6"
          />
          <text
            x="53"
            y="59"
            fontSize="8"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            API
          </text>
          <text
            x="53"
            y="69"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            REST endpoints
          </text>

          {/* Arrow: Enqueue job */}
          <text
            x="123"
            y="38"
            fontSize="6.2"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Enqueue
          </text>
          <line
            x1="100"
            y1="44"
            x2="146"
            y2="44"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.2"
          />
          <path
            d="M142 41 L147 44 L142 47"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.2"
          />

          {/* Center Top Box: Redis Streams */}
          <rect
            x="152"
            y="8"
            width="124"
            height="58"
            rx="6"
            className="fill-linen-50 dark:fill-espresso-850 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.3"
          />
          {/* Stacked Redis Layers Icon */}
          <path
            d="M214 14 L232 20 L214 26 L196 20 Z"
            className="fill-rose-500/25 dark:fill-rose-500/30 stroke-rose-600 dark:stroke-rose-400"
            strokeWidth="1.1"
          />
          <path
            d="M196 25 L214 31 L232 25"
            className="stroke-rose-600 dark:stroke-rose-400"
            strokeWidth="1.1"
          />
          <path
            d="M196 30 L214 36 L232 30"
            className="stroke-rose-600 dark:stroke-rose-400"
            strokeWidth="1.1"
          />
          <text
            x="214"
            y="47"
            fontSize="8"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            Redis Streams
          </text>
          <text
            x="214"
            y="57"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            group: job_workers
          </text>

          {/* Downward Arrow -> PostgreSQL + Prisma */}
          <line
            x1="214"
            y1="66"
            x2="214"
            y2="79"
            className="stroke-espresso-muted dark:stroke-[#9A948D]"
            strokeWidth="1.2"
          />
          <path
            d="M211 75 L214 80 L217 75"
            className="stroke-espresso-muted dark:stroke-[#9A948D]"
            strokeWidth="1.2"
          />
          <text
            x="248"
            y="75"
            fontSize="5.8"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Save status
          </text>

          {/* Bottom Center Box: PostgreSQL + Prisma */}
          <rect
            x="152"
            y="81"
            width="124"
            height="30"
            rx="5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1.2"
          />
          <text
            x="214"
            y="95"
            fontSize="7.5"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            PostgreSQL + Prisma
          </text>
          <text
            x="214"
            y="105"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Job persistence &amp; tracking
          </text>

          {/* Branching Curves to 3 Worker Nodes */}
          <text
            x="306"
            y="22"
            fontSize="5.8"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Distribute
          </text>
          <path
            d="M276 34 C 304 34, 308 22, 334 22"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M276 38 L 334 58"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M276 42 C 304 42, 308 94, 334 94"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Right Stacked Worker Nodes: Worker 1, Worker 2, Worker 3 */}
          {[
            { y: 8, name: 'Worker 1' },
            { y: 44, name: 'Worker 2' },
            { y: 80, name: 'Worker 3' },
          ].map((w) => (
            <g key={w.name}>
              <rect
                x="336"
                y={w.y}
                width="114"
                height="28"
                rx="5"
                className="fill-linen-50 dark:fill-espresso-850 stroke-emerald-700/60 dark:stroke-emerald-400/60"
                strokeWidth="1.1"
              />
              <circle
                cx="352"
                cy={w.y + 14}
                r="6"
                strokeDasharray="2.5 1.5"
                className="fill-emerald-500/15 stroke-emerald-700 dark:stroke-emerald-400"
                strokeWidth="1.4"
              />
              <circle
                cx="352"
                cy={w.y + 14}
                r="2"
                className="fill-emerald-700 dark:fill-emerald-400"
              />
              <text
                x="366"
                y={w.y + 13}
                fontSize="7.2"
                className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
              >
                {w.name}
              </text>
              <text
                x="366"
                y={w.y + 22}
                fontSize="5.8"
                className="fill-emerald-700 dark:fill-emerald-400 font-mono"
              >
                Process &amp; ACK
              </text>
            </g>
          ))}
        </svg>
      );

    case 'nexus':
      // Collaborative Infinite Canvas + Block Notes + Port 4000 Multiplexer + Redis + Postgres
      return (
        <svg
          className="w-full h-28 select-none"
          viewBox="0 0 460 116"
          fill="none"
          aria-hidden="true"
        >
          {/* Left: Client Y.Doc Canvas & Block Notes */}
          <rect
            x="10"
            y="14"
            width="102"
            height="88"
            rx="5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1.2"
          />
          <rect
            x="18"
            y="22"
            width="40"
            height="28"
            rx="2.5"
            className="fill-linen-100 dark:fill-espresso-900 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.1"
          />
          <text
            x="38"
            y="39"
            fontSize="6.2"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            CANVAS
          </text>
          <rect
            x="64"
            y="22"
            width="40"
            height="28"
            rx="2.5"
            className="fill-linen-100 dark:fill-espresso-900 stroke-emerald-700 dark:stroke-emerald-400"
            strokeWidth="1.1"
          />
          <text
            x="84"
            y="39"
            fontSize="6.2"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono font-bold"
          >
            NOTES
          </text>
          <text
            x="61"
            y="68"
            fontSize="8"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            Client Y.Doc
          </text>
          <text
            x="61"
            y="80"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            CRDT Binary Sync
          </text>
          <text
            x="61"
            y="91"
            fontSize="6"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono"
          >
            &lt;50ms Convergence
          </text>

          {/* Bidirectional WS / HTTP Arrow */}
          <text
            x="138"
            y="46"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            WS + HTTP
          </text>
          <line
            x1="114"
            y1="55"
            x2="162"
            y2="55"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.3"
          />
          <path
            d="M158 52 L163 55 L158 58"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.2"
          />

          {/* Center: Port 4000 Dual-Protocol Multiplexer */}
          <rect
            x="166"
            y="18"
            width="130"
            height="80"
            rx="6"
            className="fill-linen-50 dark:fill-espresso-850 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.4"
          />
          <text
            x="231"
            y="35"
            fontSize="8"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            PORT 4000 SERVER
          </text>
          <rect
            x="176"
            y="43"
            width="110"
            height="20"
            rx="3"
            className="fill-linen-100 dark:fill-espresso-900 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1"
          />
          <text
            x="231"
            y="56"
            fontSize="6.5"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono font-semibold"
          >
            Express + Hocuspocus
          </text>
          <text
            x="231"
            y="78"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Origin Echo Suppression
          </text>

          {/* Branching Arrows to Redis & PostgreSQL */}
          <path
            d="M296 44 L334 32"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.2"
          />
          <path
            d="M296 68 L334 82"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.2"
          />

          {/* Right Top: Redis Pub/Sub */}
          <rect
            x="336"
            y="12"
            width="114"
            height="40"
            rx="5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1.2"
          />
          <text
            x="393"
            y="29"
            fontSize="7.5"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            Redis Pub/Sub
          </text>
          <text
            x="393"
            y="41"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Live Cursor Awareness
          </text>

          {/* Right Bottom: PostgreSQL Snapshot */}
          <rect
            x="336"
            y="64"
            width="114"
            height="40"
            rx="5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-emerald-700/60 dark:stroke-emerald-400/60"
            strokeWidth="1.2"
          />
          <text
            x="393"
            y="81"
            fontSize="7.5"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            PostgreSQL
          </text>
          <text
            x="393"
            y="93"
            fontSize="6"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono"
          >
            Debounced Snapshot
          </text>
        </svg>
      );

    case 'replayos':
      // Observability Timeline: Logs/Traces/Incidents -> BullMQ + Redis -> Incident Replay Timeline UI
      return (
        <svg
          className="w-full h-28 select-none"
          viewBox="0 0 460 116"
          fill="none"
          aria-hidden="true"
        >
          {/* Left: Logs, Traces, Metrics Sources */}
          {[
            { y: 12, label: 'LOGS', sub: 'Structured JSON' },
            { y: 46, label: 'TRACES', sub: 'Span Context' },
            { y: 80, label: 'INCIDENTS', sub: 'Alert Events' },
          ].map((src) => (
            <g key={src.label}>
              <rect
                x="10"
                y={src.y}
                width="92"
                height="26"
                rx="4"
                className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
                strokeWidth="1.1"
              />
              <text
                x="56"
                y={src.y + 12}
                fontSize="7"
                textAnchor="middle"
                className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
              >
                {src.label}
              </text>
              <text
                x="56"
                y={src.y + 21}
                fontSize="5.8"
                textAnchor="middle"
                className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
              >
                {src.sub}
              </text>
            </g>
          ))}

          {/* Converging Arrows -> BullMQ Ingest */}
          <path
            d="M102 25 L146 52 M102 59 L146 58 M102 93 L146 64"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.1"
          />

          {/* Center: BullMQ + PostgreSQL Correlator */}
          <rect
            x="148"
            y="22"
            width="124"
            height="72"
            rx="6"
            className="fill-linen-50 dark:fill-espresso-850 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.3"
          />
          <text
            x="210"
            y="42"
            fontSize="8"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            ReplayOS Engine
          </text>
          <text
            x="210"
            y="55"
            fontSize="6.2"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono"
          >
            BullMQ + Redis Queue
          </text>
          <text
            x="210"
            y="68"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            PostgreSQL · Prisma
          </text>
          <text
            x="210"
            y="80"
            fontSize="5.8"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            RBAC + JWT Auth
          </text>

          {/* Arrow -> Visual Timeline */}
          <line
            x1="272"
            y1="58"
            x2="314"
            y2="58"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.2"
          />
          <path
            d="M310 55 L315 58 L310 61"
            className="stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.2"
          />

          {/* Right: Visual Incident Timeline */}
          <rect
            x="318"
            y="14"
            width="132"
            height="88"
            rx="5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1.2"
          />
          <text
            x="384"
            y="29"
            fontSize="7.2"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            VISUAL TIMELINE
          </text>
          {/* Timeline Gantt Bars */}
          <rect x="330" y="38" width="65" height="7" rx="2" className="fill-emerald-600/80 dark:fill-emerald-400/80" />
          <rect x="352" y="51" width="72" height="7" rx="2" className="fill-amber-500/80 dark:fill-amber-400/80" />
          <rect x="378" y="64" width="58" height="7" rx="2" className="fill-rose-600/80 dark:fill-rose-400/80" />
          <text
            x="384"
            y="88"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Root-Cause Replay
          </text>
        </svg>
      );

    case 'kmrl':
      // Intelligent Document Processing: Docs -> LangChain + Gemini -> n8n Workflows + WebSockets
      return (
        <svg
          className="w-full h-28 select-none"
          viewBox="0 0 460 116"
          fill="none"
          aria-hidden="true"
        >
          {/* Left: Incoming Policy & Enterprise Docs */}
          <rect
            x="10"
            y="18"
            width="94"
            height="80"
            rx="5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1.2"
          />
          <rect
            x="34"
            y="26"
            width="46"
            height="28"
            rx="3"
            className="fill-linen-100 dark:fill-espresso-900 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.1"
          />
          <text
            x="57"
            y="43"
            fontSize="7"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            DOCS
          </text>
          <text
            x="57"
            y="70"
            fontSize="7.5"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            KMRL Ingest
          </text>
          <text
            x="57"
            y="82"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Policies &amp; Files
          </text>

          {/* Arrow -> AI Classifier */}
          <line x1="104" y1="58" x2="148" y2="58" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />
          <path d="M144 55 L149 58 L144 61" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />

          {/* Center: LangChain + Gemini Intelligence */}
          <rect
            x="152"
            y="16"
            width="136"
            height="84"
            rx="6"
            className="fill-linen-50 dark:fill-espresso-850 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.3"
          />
          <text
            x="220"
            y="36"
            fontSize="8"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            LangChain + Gemini
          </text>
          <rect
            x="166"
            y="44"
            width="108"
            height="18"
            rx="3"
            className="fill-linen-100 dark:fill-espresso-900 stroke-emerald-700/60 dark:stroke-emerald-400/60"
            strokeWidth="1"
          />
          <text
            x="220"
            y="56"
            fontSize="6.3"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono font-semibold"
          >
            Classify &amp; Extract
          </text>
          <text
            x="220"
            y="78"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            MongoDB + Express API
          </text>
          <text
            x="220"
            y="89"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Real-Time WebSockets
          </text>

          {/* Arrow -> n8n Workflows */}
          <line x1="288" y1="58" x2="332" y2="58" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />
          <path d="M328 55 L333 58 L328 61" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />

          {/* Right: n8n Automated Routing & Approvals */}
          <rect
            x="336"
            y="18"
            width="114"
            height="80"
            rx="5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1.2"
          />
          <text
            x="393"
            y="38"
            fontSize="7.8"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            n8n Workflows
          </text>
          <text
            x="393"
            y="54"
            fontSize="6.2"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono"
          >
            ✓ Policy Routing
          </text>
          <text
            x="393"
            y="68"
            fontSize="6.2"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono"
          >
            ✓ Live Approvals
          </text>
          <text
            x="393"
            y="84"
            fontSize="5.8"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Automated Dispatch
          </text>
        </svg>
      );

    case 'studynotion':
      // EdTech Platform: Student + Instructor Portals -> Express/JWT -> MongoDB + Course Media
      return (
        <svg
          className="w-full h-28 select-none"
          viewBox="0 0 460 116"
          fill="none"
          aria-hidden="true"
        >
          {/* Left: Student & Instructor Portals */}
          <rect
            x="10"
            y="14"
            width="102"
            height="40"
            rx="4"
            className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1.2"
          />
          <text
            x="61"
            y="32"
            fontSize="7.2"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            Student Portal
          </text>
          <text
            x="61"
            y="43"
            fontSize="5.8"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Enroll &amp; Stream
          </text>

          <rect
            x="10"
            y="62"
            width="102"
            height="40"
            rx="4"
            className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1.2"
          />
          <text
            x="61"
            y="80"
            fontSize="7.2"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            Instructor Studio
          </text>
          <text
            x="61"
            y="91"
            fontSize="5.8"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Course Analytics
          </text>

          {/* Arrows -> MERN Core */}
          <path d="M112 34 L156 50 M112 82 L156 66" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />

          {/* Center: React + Redux + Node/Express API */}
          <rect
            x="158"
            y="18"
            width="134"
            height="80"
            rx="6"
            className="fill-linen-50 dark:fill-espresso-850 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.3"
          />
          <text
            x="225"
            y="38"
            fontSize="8"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            StudyNotion API
          </text>
          <text
            x="225"
            y="53"
            fontSize="6.3"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono"
          >
            Redux Toolkit · JWT
          </text>
          <text
            x="225"
            y="68"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Node.js + Express REST
          </text>
          <text
            x="225"
            y="82"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Role-Based Access
          </text>

          {/* Arrow -> MongoDB Store */}
          <line x1="292" y1="58" x2="334" y2="58" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />
          <path d="M330 55 L335 58 L330 61" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />

          {/* Right: MongoDB Course & Media Store */}
          <rect
            x="336"
            y="22"
            width="114"
            height="72"
            rx="5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1.2"
          />
          <text
            x="393"
            y="45"
            fontSize="7.8"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            MongoDB Atlas
          </text>
          <text
            x="393"
            y="60"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Courses · Lectures
          </text>
          <text
            x="393"
            y="73"
            fontSize="6"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono"
          >
            Progress &amp; Ratings
          </text>
        </svg>
      );

    case 'resq360':
      // Emergency Response Platform: Community Reports -> Firebase/Firestore + Gemini AI -> Live Crisis Dispatch
      return (
        <svg
          className="w-full h-28 select-none"
          viewBox="0 0 460 116"
          fill="none"
          aria-hidden="true"
        >
          {/* Left: Incident Reports & SOS */}
          <rect
            x="10"
            y="20"
            width="96"
            height="76"
            rx="5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-rose-600/60 dark:stroke-rose-400/60"
            strokeWidth="1.2"
          />
          <circle
            cx="58"
            cy="40"
            r="9"
            className="fill-rose-500/15 stroke-rose-600 dark:stroke-rose-400"
            strokeWidth="1.3"
          />
          <text
            x="58"
            y="43"
            fontSize="7"
            textAnchor="middle"
            className="fill-rose-600 dark:fill-rose-400 font-mono font-bold"
          >
            SOS
          </text>
          <text
            x="58"
            y="66"
            fontSize="7.5"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            Crisis Alerts
          </text>
          <text
            x="58"
            y="79"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Community Reports
          </text>

          <line x1="106" y1="58" x2="150" y2="58" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />
          <path d="M146 55 L151 58 L146 61" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />

          {/* Center: Firebase Firestore + Gemini Triage */}
          <rect
            x="154"
            y="16"
            width="138"
            height="84"
            rx="6"
            className="fill-linen-50 dark:fill-espresso-850 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.3"
          />
          <text
            x="223"
            y="37"
            fontSize="8"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            RESQ360 Core
          </text>
          <text
            x="223"
            y="53"
            fontSize="6.3"
            textAnchor="middle"
            className="fill-amber-600 dark:fill-amber-400 font-mono font-semibold"
          >
            Firebase · Firestore
          </text>
          <text
            x="223"
            y="68"
            fontSize="6.2"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono"
          >
            Gemini AI Triage
          </text>
          <text
            x="223"
            y="82"
            fontSize="5.8"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Real-Time Sync
          </text>

          <line x1="292" y1="58" x2="334" y2="58" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />
          <path d="M330 55 L335 58 L330 61" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />

          {/* Right: Responder Coordination */}
          <rect
            x="336"
            y="20"
            width="114"
            height="76"
            rx="5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-emerald-700/60 dark:stroke-emerald-400/60"
            strokeWidth="1.2"
          />
          <text
            x="393"
            y="44"
            fontSize="7.5"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            Response Feed
          </text>
          <text
            x="393"
            y="59"
            fontSize="6"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono"
          >
            Live Safety Map
          </text>
          <text
            x="393"
            y="73"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Resource Dispatch
          </text>
        </svg>
      );

    case 'verichain':
      // Blockchain Property Verification: Physical Deed -> Smart Contract / NFT Mint -> Immutable Ledger
      return (
        <svg
          className="w-full h-28 select-none"
          viewBox="0 0 460 116"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="10"
            y="22"
            width="96"
            height="72"
            rx="5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1.2"
          />
          <text
            x="58"
            y="48"
            fontSize="7.5"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            Property Deed
          </text>
          <text
            x="58"
            y="62"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Physical Asset
          </text>
          <text
            x="58"
            y="74"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Metadata Hash
          </text>

          <line x1="106" y1="58" x2="152" y2="58" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />
          <path d="M148 55 L153 58 L148 61" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />

          <rect
            x="156"
            y="18"
            width="136"
            height="80"
            rx="6"
            className="fill-linen-50 dark:fill-espresso-850 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.3"
          />
          <text
            x="224"
            y="40"
            fontSize="8"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            VeriChain Contract
          </text>
          <text
            x="224"
            y="55"
            fontSize="6.3"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono font-semibold"
          >
            NFT Title Tokenization
          </text>
          <text
            x="224"
            y="70"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Cryptographic Proof
          </text>
          <text
            x="224"
            y="82"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Zero-Fraud Transfer
          </text>

          <line x1="292" y1="58" x2="334" y2="58" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />
          <path d="M330 55 L335 58 L330 61" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />

          <rect
            x="336"
            y="22"
            width="114"
            height="72"
            rx="5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-emerald-700/60 dark:stroke-emerald-400/60"
            strokeWidth="1.2"
          />
          <text
            x="393"
            y="48"
            fontSize="7.5"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            On-Chain Registry
          </text>
          <text
            x="393"
            y="62"
            fontSize="6"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono"
          >
            ✓ Verified Ownership
          </text>
          <text
            x="393"
            y="74"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Immutable Audit Trail
          </text>
        </svg>
      );

    case 'chat-app':
      // Real-Time Messaging: Client A <-> Socket.io Hub + JWT + MongoDB <-> Client B
      return (
        <svg
          className="w-full h-28 select-none"
          viewBox="0 0 460 116"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="10"
            y="24"
            width="90"
            height="68"
            rx="5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1.2"
          />
          <text
            x="55"
            y="50"
            fontSize="7.5"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            Client A
          </text>
          <text
            x="55"
            y="64"
            fontSize="6"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono"
          >
            ● Online
          </text>
          <text
            x="55"
            y="76"
            fontSize="5.8"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            React UI
          </text>

          <line x1="100" y1="52" x2="152" y2="52" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />
          <line x1="152" y1="64" x2="100" y2="64" className="stroke-emerald-700 dark:stroke-emerald-400" strokeWidth="1.2" />
          <text x="126" y="45" fontSize="5.8" textAnchor="middle" className="fill-espresso-muted font-mono">
            WS Emit
          </text>

          <rect
            x="154"
            y="16"
            width="152"
            height="84"
            rx="6"
            className="fill-linen-50 dark:fill-espresso-850 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.3"
          />
          <text
            x="230"
            y="38"
            fontSize="8"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            Socket.io Hub
          </text>
          <text
            x="230"
            y="54"
            fontSize="6.3"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono font-semibold"
          >
            Bi-Directional Rooms
          </text>
          <text
            x="230"
            y="69"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Node.js · Express · JWT
          </text>
          <text
            x="230"
            y="82"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            MongoDB Message Store
          </text>

          <line x1="306" y1="52" x2="358" y2="52" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />
          <line x1="358" y1="64" x2="306" y2="64" className="stroke-emerald-700 dark:stroke-emerald-400" strokeWidth="1.2" />
          <text x="332" y="45" fontSize="5.8" textAnchor="middle" className="fill-espresso-muted font-mono">
            Broadcast
          </text>

          <rect
            x="360"
            y="24"
            width="90"
            height="68"
            rx="5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1.2"
          />
          <text
            x="405"
            y="50"
            fontSize="7.5"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            Client B
          </text>
          <text
            x="405"
            y="64"
            fontSize="6"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono"
          >
            ● Instant Delivery
          </text>
          <text
            x="405"
            y="76"
            fontSize="5.8"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            React UI
          </text>
        </svg>
      );

    case 'video-backend':
      // Video Platform Backend: REST Request -> Auth (JWT + Bcrypt) -> Mongoose Aggregations (Videos, Subs, Likes)
      return (
        <svg
          className="w-full h-28 select-none"
          viewBox="0 0 460 116"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="10"
            y="22"
            width="92"
            height="72"
            rx="5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1.2"
          />
          <text
            x="56"
            y="46"
            fontSize="7.5"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            Auth &amp; Guard
          </text>
          <text
            x="56"
            y="60"
            fontSize="6"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono"
          >
            JWT + Refresh
          </text>
          <text
            x="56"
            y="73"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Bcrypt Hashing
          </text>

          <line x1="102" y1="58" x2="146" y2="58" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />
          <path d="M142 55 L147 58 L142 61" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />

          <rect
            x="150"
            y="16"
            width="138"
            height="84"
            rx="6"
            className="fill-linen-50 dark:fill-espresso-850 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.3"
          />
          <text
            x="219"
            y="38"
            fontSize="8"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            Express Controllers
          </text>
          <text
            x="219"
            y="53"
            fontSize="6.2"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono"
          >
            Media Upload &amp; Stream
          </text>
          <text
            x="219"
            y="67"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Mongoose Pipelines
          </text>
          <text
            x="219"
            y="80"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Pagination &amp; Indexing
          </text>

          <path d="M288 42 L332 24 M288 58 L332 58 M288 74 L332 92" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.1" />

          {[
            { y: 10, title: 'Subscriptions', sub: 'Channel Graph' },
            { y: 45, title: 'Videos & Media', sub: 'Metadata Store' },
            { y: 80, title: 'Comments & Likes', sub: 'Nested Threads' },
          ].map((col) => (
            <g key={col.title}>
              <rect
                x="334"
                y={col.y}
                width="116"
                height="26"
                rx="4"
                className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
                strokeWidth="1.1"
              />
              <text
                x="392"
                y={col.y + 12}
                fontSize="6.8"
                textAnchor="middle"
                className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
              >
                {col.title}
              </text>
              <text
                x="392"
                y={col.y + 21}
                fontSize="5.6"
                textAnchor="middle"
                className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
              >
                {col.sub}
              </text>
            </g>
          ))}
        </svg>
      );

    case 'advanced-event-studio':
    default:
      // DOM Event Propagation Playground: Capture Phase -> Target Phase -> Bubbling & Delegation
      return (
        <svg
          className="w-full h-28 select-none"
          viewBox="0 0 460 116"
          fill="none"
          aria-hidden="true"
        >
          {/* Left: Capture Phase */}
          <rect
            x="10"
            y="20"
            width="112"
            height="76"
            rx="5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-linen-border dark:stroke-espresso-border"
            strokeWidth="1.2"
          />
          <text
            x="66"
            y="42"
            fontSize="7.5"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            1. Capture Phase
          </text>
          <text
            x="66"
            y="57"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            window → document
          </text>
          <text
            x="66"
            y="71"
            fontSize="6"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono"
          >
            useCapture: true
          </text>

          <line x1="122" y1="58" x2="164" y2="58" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />
          <path d="M160 55 L165 58 L160 61" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />

          {/* Center: DOM Target & Delegation Engine */}
          <rect
            x="168"
            y="16"
            width="124"
            height="84"
            rx="6"
            className="fill-linen-50 dark:fill-espresso-850 stroke-espresso-850 dark:stroke-[#EDEDEC]"
            strokeWidth="1.3"
          />
          <text
            x="230"
            y="38"
            fontSize="8"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            2. Event Target
          </text>
          <text
            x="230"
            y="54"
            fontSize="6.3"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono font-semibold"
          >
            e.target · e.currentTarget
          </text>
          <text
            x="230"
            y="69"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            stopPropagation()
          </text>
          <text
            x="230"
            y="82"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            Event Delegation
          </text>

          <line x1="292" y1="58" x2="334" y2="58" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />
          <path d="M330 55 L335 58 L330 61" className="stroke-espresso-850 dark:stroke-[#EDEDEC]" strokeWidth="1.2" />

          {/* Right: Bubble Phase & Inspector */}
          <rect
            x="338"
            y="20"
            width="112"
            height="76"
            rx="5"
            className="fill-linen-50 dark:fill-espresso-850 stroke-emerald-700/60 dark:stroke-emerald-400/60"
            strokeWidth="1.2"
          />
          <text
            x="394"
            y="42"
            fontSize="7.5"
            textAnchor="middle"
            className="fill-espresso-850 dark:fill-[#EDEDEC] font-mono font-bold"
          >
            3. Bubble Phase
          </text>
          <text
            x="394"
            y="57"
            fontSize="6"
            textAnchor="middle"
            className="fill-espresso-muted dark:fill-[#9A948D] font-mono"
          >
            target → root
          </text>
          <text
            x="394"
            y="71"
            fontSize="6"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 font-mono"
          >
            Live DOM Trace Log
          </text>
        </svg>
      );
  }
};
