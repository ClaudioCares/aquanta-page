import { Link } from 'react-router-dom'

/** Link interno (React Router) o externo (<a target=_blank>) según el destino. */
export default function SmartLink({ to, href, children, ...rest }) {
  const dest = to || href || '#'
  if (/^(https?:|mailto:|tel:)/.test(dest)) {
    const ext = dest.startsWith('http')
    return (
      <a href={dest} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <Link to={dest} {...rest}>
      {children}
    </Link>
  )
}
