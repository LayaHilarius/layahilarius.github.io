// Product teardowns. Each one is a page at #/teardown/<slug>.
// A chapter with no sections yet shows its summary with an "In progress" tag.

export type TeardownSection = {
  number: string
  title: string
  body: string[]
  demo?: 'ecosystem' | 'revenue' | 'flywheel' | 'metrics' | 'routes' | 'navigation' | 'roadmap' | 'ar'
  table?: { headers: string[]; rows: string[][] }
  note?: string
  sources?: { label: string; url: string }[]
  // Optional closing callout, shown as side-by-side cards
  closing?: { lead: string; items: { label: string; text: string }[] }
}

export type Chapter = { number: string; title: string; summary: string; sections: TeardownSection[] }

export type Teardown = {
  slug: string
  product: string
  subtitle: string
  narrative: string
  chapters: Chapter[]
}

export const teardowns: Teardown[] = [
  {
    slug: 'google-maps',
    product: 'Google Maps',
    subtitle: 'An independent product teardown exploring strategy, technology, accessibility and the future of navigation.',
    narrative:
      'Understand an existing product, identify opportunities, execute a practical improvement and envision its future.',
    chapters: [
      {
        number: '01',
        title: 'Understanding the product',
        summary: 'Product foundations, business model, users, competition, growth, metrics and technology.',
        sections: [
          {
            number: '01',
            title: 'Why Google Maps?',
            body: [
              'What fascinates me about Google Maps is that it does much more than tell us how to reach a destination. It influences how we experience the world around us.',
              'From deciding where to go, when to leave, how to get there and where to stop, to understanding which routes to avoid, Google Maps has become part of everyday decision-making.',
              'I have always been curious about what makes users repeatedly return to a product. Is it reliability, familiarity, habit, or the continuous improvement made possible by a vast user base?',
              'This curiosity also led me to imagine possibilities beyond traditional navigation, such as augmented reality guidance for motorcycle riders, where directions become part of the physical environment.',
              'Through this teardown, I wanted to look beyond the interface and understand the product’s foundations, business strategy, technology and user psychology.',
              'Rather than simply adding more features to a mature product, I wanted to explore two different dimensions of improvement: making navigation more accessible today and reimagining how we navigate tomorrow.',
            ],
            closing: {
              lead: 'Two dimensions of improvement',
              items: [
                { label: 'Accessibility today', text: 'Making navigation easier for people the product doesn’t yet serve well.' },
                { label: 'Innovation tomorrow', text: 'Reimagining navigation itself, starting with AR guidance for riders.' },
              ],
            },
          },
          {
            "number": "02",
            "title": "What am I really hiring Maps to do?",
            "body": [
              "I rarely open Maps just to look at a map. Sometimes I want to know whether a place is worth visiting. Sometimes I want to decide when to leave. And sometimes I simply want to know which road not to take.",
              "My interpretation of the product vision is to make the physical world easier to understand and navigate. The real value is reducing uncertainty, not just finding the shortest path."
            ],
            "closing": {
              "lead": "Who gets value?",
              "items": [
                {
                  "label": "Consumers",
                  "text": "Discover, plan, navigate and share places."
                },
                {
                  "label": "Businesses",
                  "text": "Become discoverable by people nearby."
                },
                {
                  "label": "Developers",
                  "text": "Build location-aware experiences using maps, routes and places."
                },
                {
                  "label": "Advertisers",
                  "text": "Reach people with location-related intent."
                }
              ]
            },
            "demo": "ecosystem"
          },
          {
            "number": "03",
            "title": "The business behind the map",
            "body": [
              "The consumer experience is generally free, but the same location infrastructure is valuable to businesses. Google Maps Platform offers paid usage of mapping services, subject to its pricing tiers and allowances. Local advertising is another way to monetize location-related intent; a business profile itself can be free.",
              "Coming from payments, I found the platform side particularly interesting. A developer isn't just buying a map. They are buying the ability to build a reliable location-related experience without maintaining that entire infrastructure."
            ],
            "demo": "revenue"
          },
          {
            "number": "04",
            "title": "Different people, different journeys",
            "body": [
              "A commuter wants to avoid traffic. A delivery rider cares about the exact entrance. A tourist may not recognize a street name. An elderly traveler may simply want to get there without asking someone for help.",
              "These groups can overlap. I would segment by the job and context rather than assume every person of a certain age or profession behaves the same way."
            ],
            "table": {
              "headers": [
                "Stage",
                "User need",
                "Possible friction"
              ],
              "rows": [
                [
                  "Plan",
                  "Decide where and when",
                  "Uncertainty"
                ],
                [
                  "Search",
                  "Find the intended place",
                  "Ambiguous addresses"
                ],
                [
                  "Choose route",
                  "Balance time and cost",
                  "Unclear trade-offs"
                ],
                [
                  "Navigate",
                  "Follow instructions",
                  "Distraction or confusion"
                ],
                [
                  "Recover",
                  "Get back on track",
                  "Anxiety after a wrong turn"
                ],
                [
                  "Arrive",
                  "Find the exact entrance",
                  "Last-mile accuracy"
                ]
              ]
            }
          },
          {
            "number": "05",
            "title": "Why do people keep coming back?",
            "body": [
              "My first instinct was habit. But habit alone cannot explain the value of Maps. Familiarity, reliability, business listings, developer integrations and the potential for user contributions to improve the map all matter.",
              "More users can produce more useful edits and signals, which can improve the experience for other users, provided the data is accurate and collected responsibly. For developers, switching providers also means migration, testing and ongoing maintenance.",
              "If I were competing with Maps, I would not try to recreate everything at once. I would start with an underserved segment or a regional need and do that exceptionally well. That's a hypothesis, not evidence that Google Maps is weak in a particular country."
            ],
            "table": {
              "headers": [
                "Alternative",
                "Where it competes"
              ],
              "rows": [
                [
                  "Apple Maps",
                  "Consumer navigation and device ecosystem"
                ],
                [
                  "Waze (Google-owned)",
                  "Driving and community traffic reports"
                ],
                [
                  "Mapbox",
                  "Developer mapping and customization"
                ],
                [
                  "OpenStreetMap",
                  "Open geographic data"
                ],
                [
                  "Mappls",
                  "India-focused mapping"
                ]
              ]
            },
            "demo": "flywheel"
          },
          {
            "number": "06",
            "title": "How would I measure success?",
            "body": [
              "For navigation specifically, I would choose weekly successfully completed journeys as my North Star Metric. Opening the app or searching for a place is not the same as reaching it. For a new navigation user, I would define activation as the first successful journey within a stated measurement window.",
              "One exercise changed how I look at growth: if journeys increase from one million to two million while completion falls from 95% to 90%, successful journeys rise from 950,000 to 1.8 million. That looks great until you notice the completion rate dropped by five percentage points. Incomplete journeys do not necessarily mean failures, so I would investigate why they ended.",
              "I would monitor acquisition, activation, retention, referral and revenue alongside quality measures such as ETA error, crash rate and latency, and guardrails for unsafe routing and privacy. These are my proposed metrics, not Google's internal KPIs."
            ],
            "demo": "metrics"
          },
          {
            "number": "07",
            "title": "The engineering underneath",
            "body": [
              "Location is an estimate, not a perfect point. GPS, Wi-Fi, cellular signals and device sensors can help estimate position. Geocoding turns an address into coordinates; reverse geocoding goes the other way.",
              "I think of roads as a graph of connected segments with different costs: time, distance, tolls, restrictions and road quality. Historical and current traffic signals can help predict arrival time. A good rerouting experience needs to balance potential time savings against the confusion caused by frequent changes.",
              "The shortest route isn't necessarily the best. The right answer depends on who is traveling and what matters to them. This is a conceptual explanation, not a description of Google's internal architecture."
            ],
            "demo": "routes"
          },
        ],
      },
      {
        number: '02',
        title: 'Improving the present',
        summary: 'Accessible navigation for elderly users, problem discovery, MVP, PRD and experimentation.',
        sections: [
          {
            "number": "08",
            "title": "Who might find navigation difficult?",
            "body": [
              "I wanted to explore accessibility rather than add another feature for everyone. My starting segment is people aged 65 and above in India with limited digital literacy who want to travel independently, particularly on foot or using public transport.",
              "Imagine a traveler visiting a clinic who misses a turn and isn't sure whether to walk back or continue. My hypothesis is that uncertainty during recovery can be more damaging to confidence than the original wrong turn.",
              "I would validate this through interviews and observed, supervised journeys. I have not conducted those studies yet."
            ],
            "table": {
              "headers": [
                "Pain point",
                "Illustrative reach",
                "Severity"
              ],
              "rows": [
                [
                  "Starting navigation",
                  "70%",
                  "Medium"
                ],
                [
                  "Confusing intersections",
                  "40%",
                  "High"
                ],
                [
                  "Recovering from a wrong turn",
                  "20%",
                  "Very high"
                ]
              ]
            },
            "note": "Hypothetical exercise figures, not survey results. I prioritized recovery for its potential effect on independence and confidence."
          },
          {
            "number": "09",
            "title": "Three ways I would improve it",
            "body": [
              "My first idea was prompt rerouting with a reassuring instruction in the user's own language. My second was to use recognizable landmarks, such as a temple or building at the turn. My third was a simplified mode that shows only the directions the user needs at that moment.",
              "Automatic rerouting and voice-language options already exist. I am proposing a more coherent, optional recovery experience for this segment, not claiming those capabilities are new.",
              "I would keep safety-critical information visible, offer readable text and audio, and allow users to return to the original experience whenever they want."
            ],
            "demo": "navigation"
          },
          {
            "number": "10",
            "title": "What would I actually ship?",
            "body": [
              "Given six hypothetical weeks, I would spend three on reassuring regional-language recovery, two on simplified navigation, and reserve one for testing and launch readiness. I would defer enhanced landmark guidance: knowing that a building exists is not the same as knowing it is visible and recognizable from the user's position.",
              "My primary metric would be successful wrong-turn recovery rate: recovered deviations divided by detected deviations. A recovery would mean returning to a valid route within a validated time window without abandoning the session. I would also monitor navigation retention over 30 days and completion within a reasonable ETA tolerance.",
              "For guardrails, I would track unsafe routing reports per 1,000 journeys and the rate of users disabling the mode. Neither is enough on its own to establish safety.",
              "I would begin with supervised usability testing, then compare existing navigation against the proposed experience in a controlled pilot. Sample size, thresholds and duration need baseline data. The estimates below are planning assumptions, not engineering commitments."
            ],
            "table": {
              "headers": [
                "Mini PRD",
                "Proposed requirement"
              ],
              "rows": [
                [
                  "Goal",
                  "Independent, confident navigation"
                ],
                [
                  "User story",
                  "Recover from a wrong turn without relying on another person"
                ],
                [
                  "MVP",
                  "Optional simplified mode, language selection, reassuring next steps"
                ],
                [
                  "Out of scope",
                  "Enhanced landmarks, AR and hardware"
                ],
                [
                  "Dependencies",
                  "Routing, location accuracy, localization and accessibility QA"
                ],
                [
                  "Release",
                  "Supervised testing, then controlled pilot if safe"
                ]
              ]
            },
            "demo": "roadmap"
          },
        ],
      },
      {
        number: '03',
        title: 'Reimagining the future',
        summary: 'AR Ride Assist, hardware integration, strategic partnerships, safety and future opportunities.',
        sections: [
          {
            "number": "11",
            "title": "What if I didn't need to look at my phone?",
            "body": [
              "I've always wondered about this while thinking about motorcycle navigation. Maps knows I need to take the second street. What if a small arrow could point to that street in my actual field of vision?",
              "My original thought was to collaborate with Ray-Ban on augmented reality glasses, and eventually extend the idea to an integrated helmet visor. The point is not to put the entire Maps screen in front of a rider. It is to show just enough information, when it is needed.",
              "I don't know yet whether riders would find this easier or more distracting. That question is central to the proposal."
            ],
            "demo": "ar"
          },
          {
            "number": "12",
            "title": "From an arrow to a real-world direction",
            "body": [
              "A simple heads-up turn indicator is different from an arrow anchored to a physical street. The latter needs reliable positioning, head-motion tracking and an understanding of the environment. A wrong overlay could confidently point someone toward the wrong street.",
              "Smart eyewear and extended reality platforms suggest a possible starting point. I would explore Android XR, compatible eyewear and certified helmet manufacturers rather than assume any one partnership is available. Ray-Ban and Meta are potential partners, not confirmed collaborators."
            ],
            "closing": {
              "lead": "Proposed flow",
              "items": [
                {
                  "label": "Route + device sensors",
                  "text": "Estimate the rider's location and orientation."
                },
                {
                  "label": "Spatial positioning",
                  "text": "Identify the physical turn."
                },
                {
                  "label": "Safety layer",
                  "text": "Decide whether an overlay should appear."
                },
                {
                  "label": "Display",
                  "text": "Render minimal instructions or fall back safely."
                }
              ]
            }
          },
          {
            "number": "13",
            "title": "Who would I work with?",
            "body": [
              "Google could explore eyewear partners for display hardware, helmet manufacturers for protective equipment, and motorcycle manufacturers for distribution and integration. I would start by understanding rider needs and willingness to pay rather than assuming expensive hardware will find a market.",
              "A partnership would need to account for helmet fit, regulatory compliance, privacy, battery life and responsibility for failures. I have not validated commercial or technical feasibility."
            ]
          },
          {
            "number": "14",
            "title": "Start small, then earn the right to expand",
            "body": [
              "I would first test a simple heads-up turn indicator in a simulator. Only if it performs well would I explore spatially anchored instructions in a controlled environment. A certified integrated helmet would be a later step, not the MVP.",
              "I would compare this against audio-only and mounted-phone navigation. Closed-track studies and independent safety assessment would precede any public-road pilot."
            ],
            "table": {
              "headers": [
                "Phase",
                "Scope"
              ],
              "rows": [
                [
                  "01",
                  "Minimal heads-up indicator; simulator"
                ],
                [
                  "02",
                  "Spatial alignment; controlled testing"
                ],
                [
                  "03",
                  "Purpose-built hardware; certification and feasibility review"
                ]
              ]
            }
          },
          {
            "number": "15",
            "title": "The trade-off I worry about most",
            "body": [
              "What if the arrow distracts the rider or obstructs clear vision? Keeping someone looking forward is not the same as keeping their attention on the road.",
              "I would explore suppressing overlays when positioning is uncertain, preserving critical visibility, and falling back to conventional navigation in adverse conditions. These mitigations are hypotheses, not proof of safety."
            ],
            "table": {
              "headers": [
                "Risk",
                "Possible mitigation"
              ],
              "rows": [
                [
                  "Visual distraction",
                  "Minimal, timely guidance"
                ],
                [
                  "Wrong alignment",
                  "Suppress uncertain overlays"
                ],
                [
                  "Rain, glare, battery failure",
                  "Test visibility; safe fallback"
                ],
                [
                  "Privacy",
                  "Minimize recording and retention"
                ],
                [
                  "Helmet integrity",
                  "Qualified manufacturers and certification"
                ],
                [
                  "Cost",
                  "Validate willingness to pay"
                ]
              ]
            }
          },
          {
            "number": "16",
            "title": "How would I know it is worth building?",
            "body": [
              "I would measure off-road glance time, wrong turns, journey completion and rider-reported cognitive load. But the deciding guardrails would be hazard detection, incorrect directions and safety-critical incidents or near misses.",
              "If convenience improves while safety worsens, I would not launch. This is a concept, not a working product or evidence of improved road safety."
            ]
          },
          {
            "number": "17",
            "title": "What I took away",
            "body": [
              "I started this teardown wanting to understand how a product becomes a habit. I ended up thinking more about the value it delivers. A large user base, better data and more features are not the goal by themselves.",
              "The two ideas I chose taught me different things. The accessible mode made me think about what to remove rather than what to add. The AR idea made me think about what happens when the interface moves into the real world.",
              "There is still a lot I would like to validate. The next step for me is to explore the system design behind navigation, separately from this product analysis."
            ],
            "note": "Independent proposal. No user research, experiments or safety validation have been conducted.",
            "sources": [
              {
                "label": "Google Maps overview",
                "url": "https://www.google.com/maps/about/"
              },
              {
                "label": "Maps Platform pricing",
                "url": "https://mapsplatform.google.com/pricing/"
              },
              {
                "label": "Google Maps Help",
                "url": "https://support.google.com/maps/"
              },
              {
                "label": "Apple Maps",
                "url": "https://www.apple.com/maps/"
              },
              {
                "label": "Mapbox",
                "url": "https://www.mapbox.com/"
              },
              {
                "label": "OpenStreetMap",
                "url": "https://www.openstreetmap.org/"
              },
              {
                "label": "Mappls",
                "url": "https://www.mappls.com/"
              },
              {
                "label": "Android XR",
                "url": "https://www.android.com/xr/"
              }
            ]
          },
        ],
      },
    ],
  },
]
