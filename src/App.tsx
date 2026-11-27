import { useEffect, useState } from 'react'
import Icon from './Icon.tsx'
import TeardownPage from './TeardownPage.tsx'
import { teardowns } from './teardown.ts'
import {
  about,
  activities,
  experience,
  caseStudies,
  cta,
  heroFlow,
  heroFlowCaption,
  howIWork,
  offClock,
  profile,
  projects,
  videos,
  type Preview,
  type Project,
  type Video,
} from './content.ts'

// Hash routing keeps GitHub Pages happy with no 404 fallback: #/work/<slug>
function useRoute() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const onChange = () => {
      setHash(window.location.hash)
      if (window.location.hash.startsWith('#/')) window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

const contacts = () =>
  [
    { label: 'GitHub', url: profile.github },
    { label: 'LinkedIn', url: profile.linkedin },
    { label: 'Email', url: profile.email && `mailto:${profile.email}` },
  ].filter((c) => c.url)

export default function App() {
  const hash = useRoute()
  const slug = hash.startsWith('#/work/') ? hash.slice('#/work/'.length) : null
  const project = slug ? projects.find((p) => p.slug === slug) : undefined
  const tdSlug = hash.startsWith('#/teardown/') ? hash.slice('#/teardown/'.length) : null
  const teardown = tdSlug ? teardowns.find((t) => t.slug === tdSlug) : undefined

  return (
    <>
      <header className="nav">
        <a href="#" className="brand">{profile.name.toUpperCase()}</a>
        <nav>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          {profile.resumeUrl && <a href={profile.resumeUrl} target="_blank" rel="noreferrer">Resume</a>}
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>{teardown ? <TeardownPage t={teardown} /> : project ? <ProjectPage project={project} /> : <Home />}</main>
      <footer className="footer" id="contact">
        <div className="cta">
          <span className="cta-icon"><Icon name="check" size={26} /></span>
          <p>{cta}</p>
          <a className="btn dark" href={profile.email ? `mailto:${profile.email}` : profile.linkedin || profile.github} target="_blank" rel="noreferrer">
            Let's connect
          </a>
        </div>
        <div className="foot">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="links">
            {contacts().map((c) => <a key={c.label} href={c.url} target="_blank" rel="noreferrer">{c.label}</a>)}
          </span>
        </div>
      </footer>
    </>
  )
}

function Home() {
  const publishedStudies = caseStudies.filter((c) => c.url)
  const publishedVideos = videos.filter((v) => v.youtubeId)
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">{profile.eyebrow}</p>
          <h1>{profile.headline}</h1>
          <p className="sub">{profile.sub}</p>
          <div className="buttons">
            <a className="btn dark" href="#work">View case studies</a>
            {profile.resumeUrl ? (
              <a className="btn" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                Download resume <Icon name="download" size={16} />
              </a>
            ) : (
              <span className="btn ghost" title="Coming soon">Resume coming soon</span>
            )}
          </div>
        </div>
        <Flow />
      </section>

      <section id="experience">
        <p className="eyebrow">Experience</p>
        <h2>Where I've worked</h2>
        <ol className="timeline">
          {experience.map((r) => (
            <li key={r.company + r.dates} className={r.current ? 'current' : ''}>
              <div className="when">{r.dates}</div>
              <div>
                <h3>{r.title} <span>· {r.company}, {r.place}</span></h3>
                <ul>{r.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="beyond">
        <p className="eyebrow">Beyond work</p>
        <h2>Hackathons, teaching and guiding juniors</h2>
        <div className="activity-grid">
          {activities.map((a) => (
            <div key={a.title} className="activity">
              {a.photos.length > 0 ? (
                <div className="photos">
                  {a.photos.map((ph) => <img key={ph} src={`./photos/${ph}`} alt={a.title} loading="lazy" />)}
                </div>
              ) : (
                <span className="activity-icon"><Icon name={a.icon} size={22} /></span>
              )}
              <div className="activity-head">
                <h3>{a.title}</h3>
                <span>{a.when}</span>
              </div>
              <p className="highlight">{a.highlight}</p>
              <p className="activity-text">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work">
        <p className="eyebrow">Selected case studies</p>
        <h2>{profile.workHeadline}</h2>
        <p className="body work-sub">{profile.workSub}</p>
        <div className="work-grid">
          {projects.map((p) => (
            <a key={p.slug} className="work-card" href={`#/work/${p.slug}`}>
              <div className="work-head">
                <span className="num">{p.number}</span>
                <h3>{p.title}</h3>
              </div>
              <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
              <p className="metric">{p.metric}</p>
              <p className="metric-label">{p.metricLabel}</p>
              <MiniPreview kind={p.preview} />
              <p className="pdo">{['Problem', 'Decisions', ...(p.outcome.length ? ['Outcome'] : [])].join(' · ')}</p>
              <span className="read">Read case study <Icon name="arrow" size={15} /></span>
            </a>
          ))}
        </div>
      </section>

      <section id="how">
        <p className="eyebrow">How I work</p>
        <ol className="steps">
          {howIWork.map((s, i) => (
            <li key={s.label}>
              <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="step-icon"><Icon name={s.icon} size={24} /></span>
              <strong>{s.label}</strong>
              <span className="step-text">{s.text}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Hidden until at least one case study has a link */}
      {publishedStudies.length > 0 && (
      <section id="thinking">
        <p className="eyebrow">Product thinking</p>
        <h2>Teardowns of products I use every day</h2>
        <div className="mini-grid">
          {publishedStudies.map((c, i) => (
            <div key={i} className={`mini-card ${c.url ? '' : 'pending'}`}>
              <strong>{c.url ? <a href={c.url}>{c.title}</a> : c.title}</strong>
              <span>{c.product}</span>
              {c.summary && <p>{c.summary}</p>}
              {c.url && <a className="read" href={c.url}>Read teardown <Icon name="arrow" size={15} /></a>}
              {!c.url && <em>{c.status}</em>}
            </div>
          ))}
        </div>
      </section>
      )}

      {/* Hidden until at least one video has a YouTube id */}
      {publishedVideos.length > 0 && (
      <section id="videos">
        <p className="eyebrow">Watch me think</p>
        <h2>Unscripted answers to product questions</h2>
        <div className="video-grid">{publishedVideos.map((v) => <VideoCard key={v.title} video={v} />)}</div>
      </section>
      )}

      <section id="about" className="about">
        <div>
          <p className="eyebrow">About</p>
          <h2>{about.headline}</h2>
          {about.body.map((b, i) => <p key={i} className="body">{b}</p>)}
          <div className="stats">
            {about.stats.map((s) => (
              <span key={s.label}><Icon name={s.icon} /> <b>{s.value}</b> {s.label}</span>
            ))}
          </div>
        </div>
        <div className="about-side">
          <div className="about-photos">
            <img src="./photos/laya-portrait.jpg" alt="Laya in a navy blazer" width="160" height="200" />
            <img src="./laya.jpg" alt="Laya, smiling on a city street while travelling" width="160" height="200" />
          </div>
          <h3>What I bring</h3>
          <ul className="bring">{about.bring.map((b) => <li key={b}>{b}</li>)}</ul>
          <div className="off">
            {offClock.map((o) => <span key={o.text}><Icon name={o.icon} size={18} /> {o.text}</span>)}
          </div>
        </div>
      </section>
    </>
  )
}

function Flow() {
  return (
    <div className="flow" aria-label={heroFlowCaption}>
      {heroFlow.map((n, i) => (
        <div key={n.label} className={`node n${i}`}>
          <span className="node-icon"><Icon name={n.icon} size={18} /></span>
          <div>
            <strong>{n.label}</strong>
            <span>{n.note}</span>
          </div>
        </div>
      ))}
      <p className="flow-cap">{heroFlowCaption}</p>
    </div>
  )
}

function MiniPreview({ kind }: { kind: Preview }) {
  if (kind === 'api')
    return (
      <div className="preview api" aria-hidden>
        {[['POST', '/consents'], ['GET', '/accounts'], ['POST', '/payments'], ['GET', '/status']].map(([m, p], i) => (
          <div key={p} className="api-row">
            <span className={`m ${m === 'GET' ? 'get' : ''}`}>{m}</span>
            <span>{p}</span>
            <span className={`ok ${i === 3 ? 'live' : ''}`}>200</span>
          </div>
        ))}
      </div>
    )
  if (kind === 'checkout')
    return (
      <div className="preview checkout" aria-hidden>
        <div className="field wide" />
        <div className="row2"><div className="field" /><div className="field" /></div>
        <div className="inst">{['1x', '3x', '6x', '12x'].map((x, i) => <span key={x} className={i === 1 ? 'on' : ''}>{x}</span>)}</div>
        <div className="pay">Pay</div>
      </div>
    )
  if (kind === 'tracker')
    return (
      <div className="preview tracker" aria-hidden>
        <div className="tr-eta">Usually <b>1 to 2 days</b></div>
        {['Review started', 'Info needed from you', 'Under review', 'Decision'].map((s, i) => (
          <div key={s} className={`tr-step ${i === 0 ? 'done' : i === 1 ? 'now' : ''}`}><span />{s}</div>
        ))}
      </div>
    )
  if (kind === 'fraud')
    return (
      <div className="preview fraudp" aria-hidden>
        {[['Existing rule', 0.6], ['Full balance', 87.7], ['+ 10M step-up', 99.8]].map(([l, v]) => (
          <div key={l as string} className="fr-row">
            <span className="fr-l">{l}</span>
            <span className="fr-track"><span style={{ width: `${v}%` }} /></span>
            <span className="fr-v">{v}%</span>
          </div>
        ))}
        <p className="fr-cap">share of fraud money stopped</p>
      </div>
    )
  return (
    <div className="preview roadmap" aria-hidden>
      <div className="bar">{[0, 1, 2, 3, 4].map((i) => <span key={i} className={i < 3 ? 'done' : ''} />)}</div>
      <div className="rm-body">
        <div className="lines"><span /><span /><span className="short" /></div>
        <div className="pie" />
      </div>
    </div>
  )
}

function VideoCard({ video }: { video: Video }) {
  return (
    <figure className="video">
      {video.youtubeId ? (
        <iframe src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`} title={video.title}
          allow="encrypted-media; picture-in-picture" allowFullScreen />
      ) : (
        <div className="screen"><span className="play"><Icon name="play" size={18} /></span><em>{video.status}</em></div>
      )}
      <figcaption><span>{video.kind}</span>{video.title}</figcaption>
    </figure>
  )
}

function ProjectPage({ project }: { project: Project }) {
  const blocks = [
    { label: 'Problem', items: project.problem },
    { label: 'Decisions', items: project.decisions },
    { label: 'Outcome', items: project.outcome },
  ].filter((b) => b.items.length > 0)
  return (
    <article className="project">
      <a href="#work" className="back">← All case studies</a>
      <p className="eyebrow">Case study {project.number}</p>
      <h1>{project.title}</h1>
      <div className="tags">{project.tags.map((t) => <span key={t}>{t}</span>)}</div>
      <div className="project-top">
        <div>
          <p className="metric big">{project.metric}</p>
          <p className="metric-label">{project.metricLabel}</p>
          {project.links.length > 0 && (
            <div className="buttons">
              {project.links.map((l) => (
                <a key={l.url} className="btn" href={l.url} target="_blank" rel="noreferrer">{l.label} <Icon name="external" size={15} /></a>
              ))}
            </div>
          )}
        </div>
        <MiniPreview kind={project.preview} />
      </div>
      {blocks.map((b, i) => (
        <section key={b.label} className="block">
          <span className="block-num">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <h2>{b.label}</h2>
            {b.items.length > 1 ? (
              <ul>{b.items.map((t) => <li key={t}>{t}</li>)}</ul>
            ) : (
              <p className="body">{b.items[0]}</p>
            )}
          </div>
        </section>
      ))}
      <aside className="learned"><strong>What I learned:</strong> {project.learned}</aside>
    </article>
  )
}
