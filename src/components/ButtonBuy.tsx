"use client";
import Image from "next/image";
import spinner from "../assets/spinner.svg";
import { setTimeout } from "timers";
import { useState } from "react";

export default function ButtomBuy({ precoTotal }: any) {
  const [status, setStatus] = useState(false);
  const [valor, setValor] = useState("Finalizar compra");
  const completedPurchase = () => {
    setTimeout(() => {
      if (precoTotal > 0) {
        setStatus(!status);
      }
    }, 1000);

    setTimeout(() => {
      if (precoTotal > 0) {
        setStatus(status);
        alert(`Compra Finalizada no valor de R$ ${precoTotal} ✅`);
        setValor("Finalizar Compra");
      } 
    }, 4000);
  };

  return (
    <div className="flex h-32 flex-col p-8">
      <button
        onClick={completedPurchase}
        className="btn_purchase flex h-16 w-[364px] items-center justify-center rounded-lg bg-[#9333EA] hover:text-[#F9FAFB] hover:bg-[#A855F7]  focus:outline max-sm:w-full"
      >
        {status && (
          <Image src={spinner} alt="spinner" className="animate-spin" />
        )
          ? status && (
              <Image src={spinner} alt="spinner" className="animate-spin" />
            )
          : valor}
      </button>
    </div>
  );
}
