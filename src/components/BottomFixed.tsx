'use client'
import Buttom from "./ButtonBuy";
import Price from "./Price";
import { AuthContext } from "@/context/Auth";
import { useContext } from "react";
export default function BottomFixed(){
  const { products } = useContext(AuthContext);
  let precoTotal = products.reduce((acc,el)=> acc + el.copyPreco,0)

  return(
    <section className="w-[428px]  fixed flex h-[260px] flex-col justify-start bg-[#18181B] max-[428px]:w-full ">
      <Price precoTotal={precoTotal}/>
      <Buttom precoTotal={precoTotal}/>
    </section>
  )
}