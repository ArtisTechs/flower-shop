type TestimonialCardProps = {
  name: string
  role: string
  quote: string
  rating: number
  image: string
}

export function TestimonialCard({ name, role, quote, rating, image }: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__person">
        <span className="testimonial-card__avatar">
          <img src={image} alt={name} loading="lazy" />
        </span>
        <div>
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
      <p className="testimonial-card__quote">&ldquo;{quote}&rdquo;</p>
      <div className="testimonial-card__rating" aria-label={`Rated ${rating} out of 5`}>
        <span aria-hidden="true">&#9733;</span>
        <strong>{rating}</strong>
      </div>
    </article>
  )
}
