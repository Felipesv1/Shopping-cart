"use client";
import Image from "next/image";
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { AuthContext } from "@/context/Auth";
type Products = {
  itemId: number;
  setStatus: Dispatch<SetStateAction<boolean>>;
  status:boolean
};
export default function ButtonCard({ itemId ,status,setStatus}: Products) {
  const { products, setProducts } = useContext(AuthContext);
 
 
  const increment = () => {
    let copyProducts = [...products];
    let item = copyProducts.find((product) => product.id === itemId);
    if (item) {
      item.quantidade += 1;
      item.copyPreco += item.preco
      setProducts(copyProducts);
      
    }
  };
  const decrement = () => {
    let copyProducts = [...products];
    let item = copyProducts.find((product) => product.id === itemId);
    console.log(item)
  
    if (item && item.quantidade > 1) {
      item.quantidade -= 1;
      item.copyPreco -= item.preco

      setProducts(copyProducts);
    }
  };
  return (
    <div className="flex h-[40px] w-[120px] items-center justify-around">
      <button 
      
        onClick={decrement}
        className="h-10 w-10 gap-2 rounded-lg border-[2px] border-solid border-[#3F3F46] p-3 drop-shadow-lg hover:border-[#A855F7]"
      >
        <Image src={minus} alt="minus" width={16} height={16} />
      </button>{" "}
     
      <button
        onClick={increment}
        className="h-10 w-10 gap-2 rounded-lg border-[2px] border-solid border-[#9747FF] p-3 drop-shadow-lg hover:bg-[#9333EA]"
      >
        <Image src={plus} alt="plus" width={16} height={16} />
      </button>
    </div>
  );
}
