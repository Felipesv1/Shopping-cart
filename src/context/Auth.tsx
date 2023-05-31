"use client";
import { StaticImageData } from "next/image";
import { items } from "../components/Items";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
interface IProps {
  children: ReactNode;
}
type AuthContextData = {
  products: itemPropArray;
  setProducts: Dispatch<SetStateAction<itemPropArray>>;
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
  const [products, setProducts] = useState<itemPropArray>(items);

  return (
    <AuthContext.Provider value={{ products, setProducts }}>
      {children}
    </AuthContext.Provider>
  );
}
