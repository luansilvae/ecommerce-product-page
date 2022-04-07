export const sneaker = {
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
    actual_price: 125,
    old_price: 250,
    discount: 50
  }
}

export type SneakerProps = typeof sneaker
