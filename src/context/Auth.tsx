"use client";
import { StaticImageData } from "next/image";
import { items } from "../components/Items";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
interface IProps {
  children: ReactNode;
}
type AuthContextData = {
  products: itemPropArray;
  setProducts: Dispatch<SetStateAction<itemPropArray>>;
  status:boolean,
  setStatus:Dispatch<SetStateAction<boolean>>
  confirmRemove:boolean
  setConfirmRemove:Dispatch<SetStateAction<boolean>>
  removeItem:(itemId:number) => void
  selectItemId:number ,
  setSelectItemId:Dispatch<SetStateAction< number >>
};

type itemIprop = {
  nome: string;
  image: StaticImageData;
  preco: number;
  copyPreco: number;
  quantidade: number;
  id: number;
};
type itemPropArray = itemIprop[];

export const AuthContext = createContext({} as AuthContextData);
export default function AuthProvider({ children }: IProps) {

      const removeItem = (itemId:number) => {
      
        if( confirmRemove === true){
          let newArray = products.filter(item => item.id !== itemId)
          console.log(itemId)
          console.log(newArray)
          setProducts(newArray)
        }
      }
  const [products, setProducts] = useState<itemPropArray>(items);
  const [selectItemId,setSelectItemId] = useState(0)
  const [status,setStatus] = useState(false)
  const [confirmRemove,setConfirmRemove] = useState(true)
  return (
    <AuthContext.Provider value={{ products, setProducts,status,setStatus, confirmRemove,setConfirmRemove,removeItem,selectItemId,setSelectItemId}}>
      {children}
    </AuthContext.Provider>
  );
}
