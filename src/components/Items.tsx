type itemIprop = {
  nome: string;
  image: StaticImageData;
  preco: number;
  copyPreco: number;
  quantidade: number;
  id: number;
};
type itemPropArray = itemIprop[];

import { StaticImageData } from "next/image";
import monitor from "../assets/product-image-monitor.jpg";
import cadeira from "../assets/product-image-cadeira.jpg";
import teclado from "../assets/product-image-teclado.jpg";
import headset from "../assets/product-image-headset.jpg";
import patinho from "../assets/product-image-patinho.jpg";
export const items: itemPropArray = [
  {
    nome: "Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD",
    image: monitor,
    preco: 8599,
    copyPreco: 8599,
    quantidade: 1,
    id: 1,
  },
  {
    nome: "Cadeira Gamer  RGB - Preta com Iluminação (Led)",
    image: cadeira,
    preco: 959,
    copyPreco: 959,
    quantidade: 1,
    id: 2,
  },
  {
    nome: "Teclado Gamer Mecânico Low Profile RGB AW510K 580",
    image: teclado,
    preco: 1002,
    copyPreco: 1002,
    quantidade: 1,
    id: 3,
  },
  {
    nome: "Headset Gamer RGB Preto",
    image: headset,
    preco: 191,
    copyPreco: 191,
    quantidade: 1,
    id: 4,
  },
  {
    nome: "Patinho",
    image: patinho,
    preco: 80,
    copyPreco: 80,
    quantidade: 1,
    id: 5,
  },
];
