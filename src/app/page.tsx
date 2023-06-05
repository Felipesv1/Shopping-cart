import Header from "@/components/Header";
import ProductCards from "@/components/ProductCards";
import BottomFixed from "@/components/BottomFixed";
import AuthProvider from "@/context/Auth";

export default function Home() {
  return (
    <main className="flex w-full   items-center justify-center text-[#F9FAFB]  ">
      <AuthProvider>
        <div className="  w-[428px] bg-[#18181B] max-[380px]:w-96">
          <Header />

          <ProductCards />

          <BottomFixed />
        </div>
      </AuthProvider>
    </main>
  );
}
