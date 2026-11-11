import Seo from '../../components/ui/Seo.jsx'
import '../pages.css'

/** 15. Páginas de políticas: renderizan bloques (p, h2, ul, ol, signature, todo). */
export default function Policy({ data }) {
  const Item = ({ it }) => (typeof it === 'string' ? <li>{it}</li> : <li><strong>{it.strong}</strong> {it.text}</li>)
  return (
    <>
      <Seo {...data.seo} />
      <section className="policy">
        <div className="container">
          <h1>{data.h1}</h1>
          <div className="prose">
            {data.blocks.map((b, i) => {
              switch (b.type) {
                case 'h2': return <h2 key={i}>{b.text}</h2>
                case 'ul': return <ul key={i}>{b.items.map((it, j) => <Item key={j} it={it} />)}</ul>
                case 'ol': return <ol key={i}>{b.items.map((it, j) => <Item key={j} it={it} />)}</ol>
                case 'signature': return <div key={i} className="signature"><strong>{b.lines[0]}</strong><span>{b.lines[1]}</span></div>
                case 'todo': return <p key={i}><span className="todo">{b.text}</span></p>
                default: return <p key={i}>{b.text}</p>
              }
            })}
          </div>
        </div>
      </section>
    </>
  )
}
