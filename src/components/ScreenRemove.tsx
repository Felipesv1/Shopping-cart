import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { AuthContext } from "@/context/Auth";

type ProductsStatus = {
  setStatus: Dispatch<SetStateAction<boolean>>;
  status: boolean;
};
export default function ScreenRemove({
  status,
  setStatus,
}: ProductsStatus) {
  const {setConfirmRemove,selectItemId,removeItem} = useContext(AuthContext)
  let toogleConfirmationModal = () => {
    setStatus(!status);
  };

  return (
    <div className="w-70 absolute left-1/2 top-1/2 z-10 flex h-40  translate-x-[-50%] translate-y-[-50%] transform flex-col items-center justify-center rounded-sm border-[2px] border-solid border-[#9747FF] bg-[#18181B] ">
      <span className="flex h-20 w-full items-center justify-center border-b-[2px] border-[#9747FF] p-2 ">
        Você quer remover esse Produto ?
      </span>
      <div className="flex h-40  w-full flex-row items-center justify-around">
        <button
          onClick={() => {
            setConfirmRemove(false)
            toogleConfirmationModal()
            }
          }
          className="h-10 w-10 gap-2 rounded-lg border-[2px] border-solid border-[#3F3F46] drop-shadow-lg hover:bg-[#9333EA]"
        >
          Não
        </button>
        <button onClick={() => {
            setConfirmRemove(true)
            toogleConfirmationModal()
            removeItem(selectItemId)  
        }}
          className="h-10 w-10 gap-2 rounded-lg border-[2px] border-solid border-[#9747FF]  drop-shadow-lg hover:bg-[#9333EA]"
        >
          Sim
        </button>
      </div>
    </div>
  );
}
