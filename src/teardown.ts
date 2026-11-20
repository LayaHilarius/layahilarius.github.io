// Product teardowns. Each one is a page at #/teardown/<slug>.
// A chapter with no sections yet shows its summary with an "In progress" tag.

export type TeardownSection = {
  number: string
  title: string
  body: string[]
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
        ],
      },
      {
        number: '02',
        title: 'Improving the present',
        summary: 'Accessible navigation for elderly users, problem discovery, MVP, PRD and experimentation.',
        sections: [],
      },
      {
        number: '03',
        title: 'Reimagining the future',
        summary: 'AR Ride Assist, hardware integration, strategic partnerships, safety and future opportunities.',
        sections: [],
      },
    ],
  },
]
