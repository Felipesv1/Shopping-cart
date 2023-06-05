"use client"
import Image from "next/image";
import ButtonCard from "./ButtonCard";
import { useContext } from "react";
import { AuthContext } from "@/context/Auth";
import  ScreenRemove  from "./ScreenRemove";

export default function Card() {

  const {products,status,setStatus,setSelectItemId} = useContext(AuthContext)


  return (
    <div className="w-full flex h-[104px] flex-col items-center gap-6 max-[428px]:w-full ">
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
            className="ml-2 flex h-[104px] w-[236] flex-col items-center justify- relative  ">
            <h3 className="h-[48px] text-base font-medium text-[#E4E4E7]">
              {item.nome.substring(0, 47).concat("...")}
            </h3>
            <div className="flex h-10 flex-row items-center gap-2  ">
              <span className="w-[107.73px] text-base">
                <b>{`R$ ${item.preco}`}</b>{" "}
              </span>
              <ButtonCard itemId={item.id} status={status} setStatus={setStatus} />
              {item.quantidade}
            </div>
          <button className="w-4  h-4 absolute top-0 left-64 flex items-center justify-center text-[#A855F7] rounded-full hover:text-black hover:bg-[#A855F7]" onClick={() =>{
             setSelectItemId(item.id)
             setStatus(!status)
             }}>x</button>
          </main>
        </div>
      ))}

      {status && <ScreenRemove status={status} setStatus={setStatus} />}
    </div>
  );
}
