import { useContext, createContext } from "react";
export const CursorContext = createContext();
export const CursorProvider = CursorContext.Provider;
export const useCursor = ()=>{
    return useContext(CursorContext);
}