type SectionHeaderProps = {
  eyebrow?: string
  title: string
  text?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ eyebrow, title, text, align = 'center' }: SectionHeaderProps) {
  return (
    <header className={`section-header section-header--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </header>
  )
}
