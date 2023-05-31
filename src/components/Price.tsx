"use client"
import Image from "next/image"
import etiqueta from "../assets/tag.svg";


export default function Price({precoTotal}:any){
  
  return (
    <section className="w-full flex h-24 flex-col items-end justify-end ">
    <div className=" flex h-24 w-full flex-col gap-4 border-t border-solid  border-[#3F3F46]  pl-8 pt-8 " >
      <h2 className="w-full flex flex-row items-start justify-between gap-[232px] text-[#E4E4E7] max-sm:w-17 ">
        Total:{" "}
        <span className="h-6 w-32">
          {" "}
          <b>{`R$ ${precoTotal}`}</b>{" "}
        </span>
      </h2>
    </div>
    <div className="mr-5 flex h-6 w-[162px] items-start gap-2  ">
      <Image src={etiqueta} alt="etiqueta" />
      <input
        type="search"
        placeholder="Adicionar cupom"
        className="w-[150px]  bg-transparent text-base font-medium  placeholder:text-[#A855F7] hover:placeholder:text-[#C084FC] outline-none"
      />
    </div>
  </section>
  )
}