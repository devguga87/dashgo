import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/router";
import { createContext, useContext } from "react";
import { useEffect } from "react";

interface SidebarDrawerProviderProps {
  children:React.ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

export const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps){
  const disclosure = useDisclosure() 
  const router = useRouter()

  useEffect(()=>{
    disclosure.onClose()
  },[router.asPath])
  
  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => {
  const context = useContext(SidebarDrawerContext)

  return context
}