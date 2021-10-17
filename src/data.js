import image1 from './images/image-product-1.jpg'
import image1Thumb from './images/image-product-1-thumbnail.jpg'
import image2 from './images/image-product-2.jpg'
import image2Thumb from './images/image-product-2-thumbnail.jpg'
import image3 from './images/image-product-3.jpg'
import image3Thumb from './images/image-product-3-thumbnail.jpg'
import image4 from './images/image-product-4.jpg'
import image4Thumb from './images/image-product-4-thumbnail.jpg'

export const imagesAndThumbs = [
    {
        id: 1,
        image: image1,
        thumb: image1Thumb
    },
    {
        id: 2,
        image: image2,
        thumb: image2Thumb
    },
    {
        id: 3,
        image: image3,
        thumb: image3Thumb
    },
    {
        id: 4,
        image: image4,
        thumb: image4Thumb
    },
    
]

export const singleProduct = {
    id: 1,
    itemName: 'Sapatilhas Fall Limited Edition',
    description: 'Estas sapatilhas de baixo perfil são o seu perfeito companheiro de uso casual. Apresentando uma sola exterior de borracha durável, resistirão a tudo o que o tempo pode oferecer.',
    price: 125,
    oldPrice: 250,
    images: imagesAndThumbs
}