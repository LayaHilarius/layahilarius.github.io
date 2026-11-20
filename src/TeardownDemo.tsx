import { useState } from 'react'
import type { TeardownSection } from './teardown.ts'

const fmt = (n: number) => Math.round(n).toLocaleString('en-IN')

function Revenue() {
  const [requests, setRequests] = useState(1000000)
  const [price, setPrice] = useState(2)
  return <><h4>What does usage-based revenue look like?</h4>
    <label>Monthly billable requests <strong>{fmt(requests)}</strong><input type="range" min={100000} max={10000000} step={100000} value={requests} onChange={e => setRequests(Number(e.target.value))} /></label>
    <label>Assumed USD per 1,000 requests <strong>${price.toFixed(2)}</strong><input type="range" min={1} max={10} step={0.5} value={price} onChange={e => setPrice(Number(e.target.value))} /></label>
    <output className="td-result">${fmt(requests / 1000 * price)} / month</output>
    <p className="td-note">Illustrative gross revenue, not Google's prices or revenue. Excludes discounts, allowances and costs.</p></>
}

function Metrics() {
  const [users, setUsers] = useState(100000)
  const [search, setSearch] = useState(80)
  const [start, setStart] = useState(75)
  const [finish, setFinish] = useState(75)
  const values = [users, users * search / 100, users * search * start / 10000, users * search * start * finish / 1000000]
  return <><h4>From discovery to actual value</h4>
    <div className="td-flow"><strong>Weekly successful journeys</strong><span>Weekly navigation users × journeys started per user × completion rate</span></div>
    {([{ name: 'New users', value: users, min: 10000, max: 1000000, step: 10000, set: setUsers }, { name: 'Search rate (%)', value: search, min: 0, max: 100, step: 1, set: setSearch }, { name: 'Search to navigation (%)', value: start, min: 0, max: 100, step: 1, set: setStart }, { name: 'Completion rate (%)', value: finish, min: 0, max: 100, step: 1, set: setFinish }]).map(s => <label key={s.name}>{s.name} <strong>{fmt(s.value)}</strong><input type="range" min={s.min} max={s.max} step={s.step} value={s.value} onChange={e => s.set(Number(e.target.value))}/></label>)}
    {['New users','Searched','Started','Completed first journey'].map((name,i) => <div className="td-bar-row" key={name}><span>{name} · {fmt(values[i])}</span><div className="td-track"><div style={{width: (values[i] / users * 100) + '%'}} /></div></div>)}
    <output className="td-result">{(search * start * finish / 10000).toFixed(1)}% activation</output>
    <p className="td-note">Hypothetical cohort; assumes one first journey per user in the same observation window.</p></>
}

const routeData = [
  {name:'A', distance:12, time:20, toll:150, quality:'Excellent'},
  {name:'B', distance:15, time:30, toll:0, quality:'Good'},
  {name:'C', distance:9, time:35, toll:0, quality:'Poor'},
]
function Routes() {
  const [persona,setPersona] = useState('commuter')
  const choice = persona === 'emergency' ? 'A' : persona === 'cab' ? '' : 'B'
  return <><h4>Same destination, different priorities</h4>
    <label>Travel context<select value={persona} onChange={e=>setPersona(e.target.value)}><option value="commuter">Cost-conscious commuter</option><option value="emergency">Emergency vehicle (illustrative)</option><option value="cab">Cab driver</option><option value="tourist">Tourist</option></select></label>
    <svg viewBox="0 0 320 160" role="img" aria-label="Three illustrative routes from start to destination" className="td-map">
      <path d="M20 80 L75 25 H245 L300 80" fill="none" stroke="var(--blue)" strokeWidth={choice==='A'?7:3}/>
      <path d="M20 80 L75 135 H245 L300 80" fill="none" stroke="#27845a" strokeWidth={choice==='B'?7:3}/>
      <path d="M20 80 H300" fill="none" stroke="var(--soft)" strokeWidth="3" strokeDasharray="5 5"/>
      <g fill="currentColor" fontSize="12" textAnchor="middle"><text x="160" y="17">A · 20 min</text><text x="160" y="72">C · 35 min</text><text x="160" y="153">B · 30 min</text></g>
      <circle cx="20" cy="80" r="6" fill="var(--blue)"/><circle cx="300" cy="80" r="6" fill="var(--ink)"/>
    </svg>
    <div className="td-route-grid">{routeData.map(r=><div key={r.name} className={'td-tile'+(choice===r.name?' td-chosen':'')}><strong>Route {r.name}</strong><span>{r.distance} km · {r.time} min</span><span>₹{r.toll} toll · {r.quality}</span></div>)}</div>
    <p aria-live="polite">{persona==='emergency'?'A may save time if safe and appropriate for the vehicle.':persona==='cab'?'Compare earnings per hour, fuel, tolls and vehicle wear. No single route wins without those inputs.':'B balances cost, time and road quality.'}</p><p className="td-note">Illustrative routes only; not routing advice.</p></>
}
function Navigation() {
  const [simple,setSimple] = useState(true)
  const [wrong,setWrong] = useState(false)
  return <><h4>Try a wrong turn</h4><div className="td-controls"><button type="button" aria-pressed={!simple} onClick={()=>setSimple(false)}>Conventional</button><button type="button" aria-pressed={simple} onClick={()=>setSimple(true)}>Simplified</button></div>
    <div className="td-phone"><div className="td-instruction" aria-live="polite"><span className="td-arrow" aria-hidden="true">{wrong?'↑':'↰'}</span><div><strong>{wrong?(simple?'Continue straight':'Rerouting'):(simple?'Take the next left':'Turn left in 100 m')}</strong><span>{wrong?'New route ready':simple?'After 100 meters':'2nd Cross Road · then right in 450 m'}</span></div></div>
    <svg className="td-map" viewBox="0 0 240 220" role="img" aria-label={wrong?'Updated route after a wrong turn':'Original route'}>
      <g fill="var(--line)">{[8,88,168].flatMap(x=>[8,78,148].map(y=><rect key={x+':'+y} x={x} y={y} width="64" height="55" rx="5"/>))}</g>
      <g stroke="var(--faint)" strokeWidth="10" opacity=".4"><path d="M80 0V220 M160 0V220 M0 70H240 M0 140H240"/></g>
      <path d={wrong?'M160 210V70H80V0':'M160 210V140H80V0'} stroke="var(--blue)" strokeWidth={simple?8:5} strokeLinejoin="round" fill="none"/>
      <circle cx="160" cy="210" r="7" fill="var(--blue)"/><circle cx="80" cy="8" r="6" fill="var(--ink)"/>
      {!simple&&<g fill="var(--ink)" fontSize="9"><text x="12" y="40">Cafe</text><text x="170" y="104">Temple</text><text x="90" y="180">Shop</text></g>}
    </svg><strong>{wrong?'14':'12'} min to destination</strong></div>
    <button type="button" className="td-action" onClick={()=>setWrong(!wrong)}>{wrong?'Reset journey':'Simulate wrong turn'}</button><p className="td-note">Conceptual wireframe, not the actual Maps UI. Simplification must preserve safety-critical information.</p></>
}
function AR() {
  const [confidence,setConfidence] = useState(95)
  const [hazard,setHazard] = useState(false)
  const show = confidence>=80&&!hazard
  return <><h4>When should an arrow disappear?</h4>
  <svg className="td-map" viewBox="0 0 320 185" role="img" aria-label={show?'Illustrative street with navigation arrow':'Illustrative street with overlay suppressed'}>
    <rect width="320" height="185" fill="var(--blue-soft)"/>
    <g fill="var(--faint)" opacity=".6"><path d="M0 20H60V105H0Z M66 45H112V105H66Z M245 25H320V105H245Z"/></g>
    <path d="M0 185L135 90H185L320 185Z M0 105L135 98L160 120L0 150Z" fill="#59606b"/>
    <path d="M160 118L160 139 M160 150L160 177" stroke="white" strokeWidth="3" strokeDasharray="8 6"/>
    {hazard&&<g stroke="#fff" strokeWidth="4" strokeLinecap="round"><circle cx="205" cy="105" r="5" fill="#fff"/><path d="M205 112V128L197 141 M205 128L214 141 M205 116L195 123 M205 116L215 123"/></g>}
    {show&&<path d="M160 165L170 128L128 119L123 131L105 107L139 101L133 111L182 123L173 169Z" fill="#62e2f5" stroke="#fff" strokeWidth="1.5"/>}
  </svg><label>Simulated positioning confidence <strong>{confidence}%</strong><input type="range" min={0} max={100} value={confidence} onChange={e=>setConfidence(Number(e.target.value))}/></label>
  <label className="td-check"><input type="checkbox" checked={hazard} onChange={e=>setHazard(e.target.checked)}/> Simulate detected hazard</label>
  <output className="td-result">{show?'Overlay visible':hazard?'Overlay suppressed: hazard':'Overlay suppressed: low confidence'}</output>
  <p className="td-note">The 80% threshold and hazard detection are fictional demonstration rules, not safe operating criteria. No live navigation or sensor data.</p></>
}
function Roadmap() {
  return <><h4>Six hypothetical weeks</h4>{[{name:'Reassuring rerouting',start:0,end:3},{name:'Simplified mode',start:3,end:5},{name:'Testing and launch readiness',start:5,end:6}].map(r=><div className="td-bar-row" key={r.name}><span>{r.name}</span><div className="td-weeks">{Array.from({length:6},(_,i)=><span key={i} className={i>=r.start&&i<r.end?'td-week-on':''} aria-label={'Week '+(i+1)+(i>=r.start&&i<r.end?' planned':'')}>{i+1}</span>)}</div></div>)}<p className="td-note">Sequential illustrative schedule. Launch is conditional on safety and testing.</p></>
}
function Ecosystem() {
  const [selected,setSelected]=useState(0)
  const actors=[['Consumers','Plan, navigate and discover places.'],['Businesses','Reach nearby customers.'],['Developers','Build on location infrastructure.'],['Advertisers','Reach location-related intent.']]
  return <><h4>Who benefits from the same map?</h4><div className="td-flow"><strong>Google Maps</strong><span>Location intelligence</span></div><div className="td-route-grid">{actors.map((a,i)=><button type="button" key={a[0]} aria-pressed={selected===i} onClick={()=>setSelected(i)}>{a[0]}</button>)}</div><p aria-live="polite">{actors[selected][1]}</p></>
}
function Flywheel() {
  return <><h4>A possible data feedback loop</h4><div className="td-flow-grid">{['More users','Useful edits and signals','Potentially better maps','More user value'].map((t,i)=><div className="td-tile" key={t}><strong>{i+1}. {t}</strong><span>{i===3?'↺ Back to usage':'↓'}</span></div>)}</div><p className="td-note">Not automatic: permissions, sampling bias and data quality matter.</p></>
}
export default function TeardownDemo({kind}:{kind:NonNullable<TeardownSection['demo']>}) {
  const components={ecosystem:Ecosystem,revenue:Revenue,flywheel:Flywheel,metrics:Metrics,routes:Routes,navigation:Navigation,roadmap:Roadmap,ar:AR}
  const Demo=components[kind]
  return <div className="td-demo"><Demo/></div>
}
