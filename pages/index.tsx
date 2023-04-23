import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Categories from "@/components/Categories";
import ProductsList from "@/components/ProductsList";
import Hero from "@/components/Hero";
import Team from "@/components/Team"
export default function Home() {
  return (
    <>
    <Hero />
    <Categories />
    <ProductsList />
    <Team/>
    </>
  )
}