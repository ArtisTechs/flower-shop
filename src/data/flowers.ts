import floralBlush from '../assets/images/photo-blush-bouquet.png'
import floralIvory from '../assets/images/photo-ivory-wedding.png'
import floralRose from '../assets/images/photo-deep-rose.png'
import floralSage from '../assets/images/photo-sage-basket.png'

export type Flower = {
  id: number
  name: string
  category: string
  occasion: string
  price: number
  originalPrice: number
  discount: string
  image: string
  colors: string[]
  size: string
  rating: number
  tag: string
  description: string
  available: boolean
}

export const flowers: Flower[] = [
  {
    id: 1,
    name: 'Blush Serenity Bouquet',
    category: 'Bouquet',
    occasion: 'Anniversary',
    price: 1499,
    originalPrice: 2499,
    discount: '40% OFF',
    image: floralBlush,
    colors: ['Blush', 'Ivory', 'Sage'],
    size: 'Medium',
    rating: 4.9,
    tag: 'Best Seller',
    description: 'A soft and romantic arrangement of blush roses, ivory blooms, and fresh greenery.',
    available: true,
  },
  {
    id: 2,
    name: 'Ivory Garden Luxe',
    category: 'Luxury',
    occasion: 'Wedding',
    price: 3299,
    originalPrice: 3899,
    discount: '15% OFF',
    image: floralIvory,
    colors: ['Ivory', 'Cream', 'Gold'],
    size: 'Large',
    rating: 4.8,
    tag: 'Wedding Edit',
    description: 'Editorial white florals with sculptural greenery for ceremonies, gifting, and intimate events.',
    available: true,
  },
  {
    id: 3,
    name: 'Rose Atelier Wrap',
    category: 'Hand-Tied',
    occasion: 'Birthday',
    price: 1199,
    originalPrice: 1599,
    discount: '25% OFF',
    image: floralRose,
    colors: ['Deep Rose', 'Mauve', 'Sage'],
    size: 'Medium',
    rating: 4.7,
    tag: 'New',
    description: 'A refined hand-tied bouquet with layered roses, ranunculus, and seasonal texture.',
    available: true,
  },
  {
    id: 4,
    name: 'Golden Hour Posy',
    category: 'Posy',
    occasion: 'Graduation',
    price: 899,
    originalPrice: 1199,
    discount: '25% OFF',
    image: floralIvory,
    colors: ['Cream', 'Muted Gold', 'Warm Beige'],
    size: 'Small',
    rating: 4.6,
    tag: 'Gift Ready',
    description: 'Warm neutral blooms arranged for thoughtful congratulations and everyday gestures.',
    available: true,
  },
  {
    id: 5,
    name: 'Sage Romance Basket',
    category: 'Basket',
    occasion: 'Corporate Gifts',
    price: 2199,
    originalPrice: 2699,
    discount: '18% OFF',
    image: floralSage,
    colors: ['Sage', 'Ivory', 'Blush'],
    size: 'Large',
    rating: 4.9,
    tag: 'Premium',
    description: 'A lush basket arrangement with a calm sage palette and polished gift presentation.',
    available: true,
  },
  {
    id: 6,
    name: 'Quiet Grace Arrangement',
    category: 'Arrangement',
    occasion: 'Condolence',
    price: 1899,
    originalPrice: 2299,
    discount: '17% OFF',
    image: floralIvory,
    colors: ['White', 'Ivory', 'Soft Green'],
    size: 'Medium',
    rating: 4.8,
    tag: 'Thoughtful',
    description: 'A gentle composition designed with restraint, warmth, and respect.',
    available: true,
  },
  {
    id: 7,
    name: 'Velvet Valentine Roses',
    category: 'Roses',
    occasion: "Valentine's",
    price: 2599,
    originalPrice: 3299,
    discount: '21% OFF',
    image: floralRose,
    colors: ['Deep Rose', 'Wine', 'Blush'],
    size: 'Large',
    rating: 5,
    tag: 'Limited',
    description: 'Deep rose blooms with velvet tones, wrapped with premium paper and ribbon.',
    available: true,
  },
  {
    id: 8,
    name: 'Preserved Blush Keepsake',
    category: 'Preserved',
    occasion: 'Anniversary',
    price: 1799,
    originalPrice: 2199,
    discount: '18% OFF',
    image: floralBlush,
    colors: ['Blush', 'Beige', 'Ivory'],
    size: 'Small',
    rating: 4.7,
    tag: 'Long Lasting',
    description: 'Preserved florals arranged as an elegant keepsake for lasting sentimental moments.',
    available: false,
  },
]
