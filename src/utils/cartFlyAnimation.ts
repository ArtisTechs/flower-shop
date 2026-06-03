type CartFlyAnimationOptions = {
  sourceImage: HTMLImageElement | null
  trigger: HTMLElement
}

export function animateToCart({ sourceImage, trigger }: CartFlyAnimationOptions) {
  if (typeof window === 'undefined' || !sourceImage) {
    return
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const cartButton = document.querySelector<HTMLElement>('[data-cart-target="true"]')

  if (prefersReducedMotion || !cartButton) {
    cartButton?.classList.add('cart-icon-button--pulse')
    window.setTimeout(() => cartButton?.classList.remove('cart-icon-button--pulse'), 360)
    return
  }

  const imageRect = sourceImage.getBoundingClientRect()
  const cartRect = cartButton.getBoundingClientRect()
  const fallbackRect = document.querySelector<HTMLElement>('.navbar')?.getBoundingClientRect()
  const startSize = Math.min(imageRect.width, imageRect.height, 112)
  const endSize = 22
  const startX = imageRect.left + imageRect.width / 2 - startSize / 2
  const startY = imageRect.top + imageRect.height / 2 - startSize / 2
  const hasVisibleCart = cartRect.width > 0 && cartRect.height > 0
  const endCenterX = hasVisibleCart ? cartRect.left + cartRect.width / 2 : (fallbackRect?.right ?? window.innerWidth) - 34
  const endCenterY = hasVisibleCart ? cartRect.top + cartRect.height / 2 : (fallbackRect?.top ?? 18) + 28
  const endX = endCenterX - endSize / 2
  const endY = endCenterY - endSize / 2
  const flyer = document.createElement('img')

  flyer.src = sourceImage.currentSrc || sourceImage.src
  flyer.alt = ''
  flyer.setAttribute('aria-hidden', 'true')
  flyer.className = 'cart-flyer'
  flyer.style.left = `${startX}px`
  flyer.style.top = `${startY}px`
  flyer.style.width = `${startSize}px`
  flyer.style.height = `${startSize}px`

  document.body.appendChild(flyer)
  trigger.classList.add('flower-card__button--adding')

  const animation = flyer.animate(
    [
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1)',
      },
      {
        opacity: 0.88,
        offset: 0.55,
        transform: `translate3d(${(endX - startX) * 0.62}px, ${Math.min(endY - startY, endY - startY - 70)}px, 0) scale(0.58)`,
      },
      {
        opacity: 0,
        transform: `translate3d(${endX - startX}px, ${endY - startY}px, 0) scale(${endSize / startSize})`,
      },
    ],
    {
      duration: 680,
      easing: 'cubic-bezier(0.18, 0.8, 0.22, 1)',
      fill: 'forwards',
    },
  )

  animation.finished
    .catch(() => undefined)
    .finally(() => {
      flyer.remove()
      trigger.classList.remove('flower-card__button--adding')
      cartButton.classList.add('cart-icon-button--pulse')
      window.setTimeout(() => cartButton.classList.remove('cart-icon-button--pulse'), 360)
    })
}
