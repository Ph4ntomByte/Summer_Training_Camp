import Link from 'next/link'
export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            {idx > 0 && <span>/</span>}
            <Link href={item.href} className="text-forest-dark hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}