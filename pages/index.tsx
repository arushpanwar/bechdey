import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <>
    <Header />
    <img src="/banner.jpg" alt="Banner Image" className="mx-auto w-full" />
    <Categories />
    <Footer />
    </>
  )
}