// Small line icons (24px grid, stroke-based) so the site needs no icon library.
const paths: Record<string, string[]> = {
  question: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6', 'M12 17h.01'],
  build: ['M4 7h16v10H4z', 'M8 11l-2 1 2 1', 'M16 11l2 1-2 1', 'M13 10l-2 4'],
  stage: ['M3 20h18', 'M6 20V9l6-4 6 4v11', 'M10 20v-5h4v5'],
  check: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M8 12l3 3 5-6'],
  search: ['M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z', 'M21 21l-5-5'],
  target: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M12 12h.01'],
  pencil: ['M4 20l4-1 11-11-3-3L5 16l-1 4Z', 'M14 6l3 3'],
  chart: ['M4 20h16', 'M7 16v-4', 'M12 16V8', 'M17 16v-7'],
  loop: ['M20 12a8 8 0 1 1-2.3-5.7', 'M20 4v4h-4'],
  card: ['M3 6h18v12H3z', 'M3 10h18', 'M7 15h3'],
  people: ['M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', 'M3 20a6 6 0 0 1 12 0', 'M16 5a3 3 0 0 1 0 6', 'M18 14a5 5 0 0 1 3 6'],
  trophy: ['M8 4h8v5a4 4 0 0 1-8 0V4Z', 'M8 6H5a3 3 0 0 0 3 4', 'M16 6h3a3 3 0 0 1-3 4', 'M12 13v4', 'M8 20h8'],
  music: ['M9 18V6l11-2v12', 'M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', 'M17 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'],
  plane: ['M10 14l-7-3 2-2 7 1 5-5a2 2 0 0 1 3 3l-5 5 1 7-2 2-3-7-3 3v3l-2-1-1-2 3-3Z'],
  arrow: ['M5 12h14', 'M13 6l6 6-6 6'],
  download: ['M12 4v11', 'M7 10l5 5 5-5', 'M5 20h14'],
  external: ['M14 4h6v6', 'M20 4l-9 9', 'M18 14v6H4V6h6'],
  play: ['M8 5l11 7-11 7V5Z'],
}

export default function Icon({ name, size = 20 }: { name: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden className="icon">
      {(paths[name] ?? []).map((d) => <path key={d} d={d} />)}
    </svg>
  )
}
