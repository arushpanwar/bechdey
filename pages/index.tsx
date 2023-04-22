import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Categories from "@/components/Categories";
import ProductsList from "@/components/ProductsList";

export default function Home() {
  return (
    <>
    <Header />
    <img src="/banner.jpg" alt="Banner Image" className="mx-auto w-full" />
    <Categories />
    <ProductsList />
    <Footer />
    </>
  )
}