import Image from 'next/image'
import Link from 'next/link'

import { Card, CardContent, CardFooter } from '@/components/Imported/ui/Scard'
import { Product } from '@/app/page'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      href="/"
      className="group rounded-lg outline-0 ring-primary transition duration-300 hover:ring-2 focus:ring-2"
    >
      <Card className="rounded-lg border-2">
        <CardContent className="py-4">
          <div className="relative aspect-square rounded-lg bg-foreground/5 dark:bg-background">
            <Image
              src={product.images?.[0]}
              alt={product.name}
              fill
              className="object-cover transition-all duration-300 group-hover:scale-105"
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start">
          <div>
            <p className="text-lg font-semibold">{product.name}</p>
            <p className="text-sm text-primary/80">{product.category}</p>
            <p>{product.price}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default ProductCard
