import PaginatedProducts from "@/components/app/browse/paginated-products"
import HeroCarousel from "@/components/ui/custom/hero-carousel"
import { getPaginatedProducts } from "@/gateway/store"
import { cookies } from "next/headers"

const BrowsePage = async () => {
  const _cookies = cookies() // Disable SSG
  const initialProducts = await getPaginatedProducts({})

  return (
    <PaginatedProducts initialProducts={initialProducts} />
  )
}

export default BrowsePage