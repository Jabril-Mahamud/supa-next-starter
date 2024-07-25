import Container from '@/components/Imported/Container'
import ProductList from '@/components/Imported/ProductList'
import { Button } from '@/components/Imported/ui/Sbutton'
import { ShoppingBag } from 'lucide-react'
import Loading from './loading'
import React from 'react'

export type Product = {
  id: string
  category: string
  name: string
  price: string
  images: string[]
}

const products: Product[] = [
  {
    id: '1',
    category: 'Camera',
    name: 'Sony FX3',
    price: '$3,999.00',
    images: ['/img/products/FX3.png'],
  },
  {
    id: '2',
    category: 'Camera',
    name: 'Sony A7S III',
    price: '$3,499.00',
    images: ['/img/products/7SIII.png'],
  },
  {
    id: '3',
    category: 'Camera',
    name: 'Sony A7C',
    price: '$1,599.00',
    images: ['/img/products/7C.png'],
  },
  {
    id: '4',
    category: 'Camera',
    name: 'Sony A7 IV',
    price: '$2,399.00',
    images: ['/img/products/7IV.png'],
  },
  {
    id: '5',
    category: 'Camera',
    name: 'Sony A7R III',
    price: '$2,499.00',
    images: ['/img/products/7RIII.png'],
  },
  {
    id: '6',
    category: 'Camera',
    name: 'Sony A7R V',
    price: '$3,899.00',
    images: ['/img/products/7RV.png'],
  },
  {
    id: '7',
    category: 'Camera',
    name: 'Sony A6700',
    price: '$1,799.00',
    images: ['/img/products/6700.png'],
  },
  {
    id: '8',
    category: 'Camera',
    name: 'Sony AZV-E10',
    price: '$699.00',
    images: ['/img/products/ZVE10.png'],
  },
]

export default function Home() {
  return (
    /*  <Loading/> */
    <main>
      <Container>
        <div className="md:pb-18 space-y-10 p-4 pb-8 sm:p-6 lg:p-8">
          <section
            style={{ backgroundImage: `url(/img/hero-1920x1080.jpg)` }}
            className="flex aspect-square w-full flex-col items-center justify-center gap-y-8 overflow-hidden rounded-lg bg-cover bg-fixed text-center first-line:marker:h-full md:aspect-[2.4/1]"
          >
            <div className="max-w-xs rounded-lg bg-secondary/60 p-4 text-3xl font-bold text-black dark:text-white sm:max-w-xl sm:text-5xl lg:text-6xl">
              Featured Products
              <Button size="lg" className="w-full py-6 text-xl">
                <ShoppingBag className="mr-2" />
                Shop Now
              </Button>
            </div>
          </section>

          <ProductList products={products} />
        </div>
      </Container>
    </main>
  )
}
