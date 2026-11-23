import TeardownDemo from './TeardownDemo.tsx'
import GoogleMapsStory from './GoogleMapsStory.tsx'
import './teardown-extras.css'
import type { Teardown } from './teardown.ts'

const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

export default function TeardownPage({ t }: { t: Teardown }) {
  if (t.slug === 'google-maps') return <GoogleMapsStory />
  return (
    <article className="teardown">
      <a href="#thinking" className="back">← Back to portfolio</a>
      <p className="eyebrow">Product teardown</p>
      <h1>{t.product}</h1>
      <p className="sub">{t.subtitle}</p>

      <ol className="chapter-map">
        {t.chapters.map((c) => (
          <li key={c.number}>
            <button type="button" onClick={() => goTo(`ch-${c.number}`)}>
              <span className="ch-num">Chapter {c.number}</span>
              <strong>{c.title}</strong>
              <span className="ch-sum">{c.summary}</span>
              {c.sections.length === 0 && <em>In progress</em>}
            </button>
          </li>
        ))}
      </ol>
      <p className="narrative">{t.narrative}</p>

      {t.chapters.map((c) => (
        <section key={c.number} id={`ch-${c.number}`} className="chapter">
          <header className="chapter-head">
            <span className="ch-num">Chapter {c.number}</span>
            <h2>{c.title}</h2>
            <p className="body">{c.summary}</p>
            {c.sections.length === 0 && <em className="soon">In progress. This chapter is being written.</em>}
          </header>
          {c.sections.map((s) => (
            <div key={s.number} className="td-section">
              <span className="block-num">{s.number}</span>
              <div>
                <h3>{s.title}</h3>
                {s.body.map((p, i) => <p key={i} className="body">{p}</p>)}
                {s.table && (
                  <div className="td-table-wrap" role="region" aria-label={s.title + ' table'} tabIndex={0}>
                    <table className="td-table">
                      <thead><tr>{s.table.headers.map(h => <th key={h} scope="col">{h}</th>)}</tr></thead>
                      <tbody>{s.table.rows.map((r, i) => <tr key={i}>{r.map((v, j) => j === 0 ? <th key={j} scope="row">{v}</th> : <td key={j}>{v}</td>)}</tr>)}</tbody>
                    </table>
                  </div>
                )}
                {s.demo && <TeardownDemo kind={s.demo} />}
                {s.note && <p className="td-note">{s.note}</p>}
                {s.sources && <div className="td-references"><h4>Further reading</h4><ul>{s.sources.map(s => <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.label} ↗</a></li>)}</ul></div>}
                {s.closing && (
                  <div className="dimensions">
                    <p className="dim-lead">{s.closing.lead}</p>
                    <div className="dim-grid">
                      {s.closing.items.map((d) => (
                        <div key={d.label} className="dim">
                          <strong>{d.label}</strong>
                          <span>{d.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>
      ))}

      <p className="disclaimer">An independent teardown, not affiliated with or endorsed by Google.</p>
    </article>
  )
}
