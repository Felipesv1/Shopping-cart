"use client"

import Image from "next/image";
import close from "../assets/close.svg";
import { useContext } from "react";
import {AuthContext  } from '../context/Auth'

export default function Header(){

  const {products} = useContext(AuthContext)
  let total = products.reduce((acc,el) => acc + el.quantidade,0)
  return(
    <header className="flex h-[74px] items-center justify-center border-b border-gray-700">
    <h2 className=" h-[24px] w-[328px]">
      Seu carrinho tem <b>{total} itens</b>{" "}
      
    </h2>
    <Image src={close} alt="Close" className="cursor-pointer" />
  </header>
  )
}