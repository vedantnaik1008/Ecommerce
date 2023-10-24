'use client'

import { persistor } from "@/store"
import { PersistGate } from "redux-persist/integration/react"

export default function ProviderComponent({children}: {children: React.ReactNode}) {
   return(
    <PersistGate persistor={persistor}>{children}</PersistGate>
   )
}