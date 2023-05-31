"use client"
import Image from "next/image";
import ButtonCard from "./ButtonCard";
import { useContext } from "react";
import { AuthContext } from "@/context/Auth";

export default function Card() {
  const {products} = useContext(AuthContext)
  return (
    <div className="w-[ 364px] flex h-[104px] flex-col items-center gap-6 max-sm:w-16 ">
      {products.map((item) => (
        <div key={item.id} className="w-full flex flex-row ">
          <Image 
            src={item.image}
            alt={item.nome}
            width={104}
            height={104}
            className="rounded-md object-cover"
          />
          <main
            className="ml-2 flex h-[104px] w-[236] flex-col items-center justify-between
    "
          >
            <h3 className="h-[48px] text-base font-medium text-[#E4E4E7]">
              {item.nome.substring(0, 47).concat("...")}
            </h3>
            <div className="flex h-10 flex-row items-center gap-2  ">
              <span className="w-[107.73px] text-base">
                <b>{`R$ ${item.preco}`}</b>{" "}
              </span>
              <ButtonCard itemId={item.id} />
              {item.quantidade}
            </div>
          </main>
        </div>
      ))}
    </div>
  );
}
