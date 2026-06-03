import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { FlowerCard } from '../components/ui/FlowerCard'
import { Input } from '../components/ui/Input'
import { flowers } from '../data/flowers'

type FilterSelectProps = {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
}

function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  const [open, setOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!selectRef.current?.contains(event.target as Node)) setOpen(false)
    }

    document.addEventListener('mousedown', closeOnOutsideClick)
    return () => document.removeEventListener('mousedown', closeOnOutsideClick)
  }, [])

  const chooseOption = (option: string) => {
    onChange(option)
    setOpen(false)
  }

  return (
    <div className="field filter-select" ref={selectRef}>
      <span>{label}</span>
      <button className="filter-select__button" type="button" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen((current) => !current)}>
        <span>{value}</span>
      </button>
      {open && (
        <motion.ul className="filter-select__list" role="listbox" initial={{ opacity: 0, y: 8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }}>
          {options.map((option) => (
            <li key={option} role="option" aria-selected={option === value}>
              <button className={option === value ? 'is-selected' : ''} type="button" onClick={() => chooseOption(option)}>
                {option}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  )
}

export function Shop() {
  const [searchParams] = useSearchParams()
  const initialOccasion = searchParams.get('occasion') ?? 'All'
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [occasion, setOccasion] = useState(initialOccasion)
  const [sort, setSort] = useState('Featured')

  const categories = ['All', ...Array.from(new Set(flowers.map((flower) => flower.category)))]
  const occasions = ['All', ...Array.from(new Set(flowers.map((flower) => flower.occasion)))]

  const filteredFlowers = useMemo(() => {
    const results = flowers
      .filter((flower) => flower.name.toLowerCase().includes(search.toLowerCase()) || flower.description.toLowerCase().includes(search.toLowerCase()))
      .filter((flower) => category === 'All' || flower.category === category)
      .filter((flower) => occasion === 'All' || flower.occasion === occasion)

    return [...results].sort((a, b) => {
      if (sort === 'Price Low to High') return a.price - b.price
      if (sort === 'Price High to Low') return b.price - a.price
      if (sort === 'Rating') return b.rating - a.rating
      return a.id - b.id
    })
  }, [category, occasion, search, sort])

  return (
    <motion.section className="page section-shell" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      <header className="page-header">
        <p className="eyebrow">Shop</p>
        <h1>Browse refined floral arrangements</h1>
      </header>
      <div className="filters">
        <Input label="Search flowers" name="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by name or mood" />
        <FilterSelect label="Category" value={category} options={categories} onChange={setCategory} />
        <FilterSelect label="Occasion" value={occasion} options={occasions} onChange={setOccasion} />
        <FilterSelect label="Sort by" value={sort} options={['Featured', 'Price Low to High', 'Price High to Low', 'Rating']} onChange={setSort} />
      </div>
      {filteredFlowers.length ? (
        <div className="product-grid">
          {filteredFlowers.map((flower) => <FlowerCard flower={flower} key={flower.id} />)}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No arrangements found</h2>
          <p>Try a different search, occasion, or category.</p>
        </div>
      )}
    </motion.section>
  )
}
