export type SneakerType = {
  id: number
  name: string
  brand: string
  description: string
  images: string[]
  price: {
    actualPrice: number
    oldPrice: number
    discount: number
  }
  amount: number
}

export const sneaker = {
  id: 1,
  name: 'Fall Limited Edition Sneakers',
  brand: 'Sneaker Company',
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole they'll withstand everything the weather can offer.",
  images: [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
  ],
  price: {
    actualPrice: 125,
    oldPrice: 250,
    discount: 50
  },
  amount: 0
}

export type SneakerProps = typeof sneaker
