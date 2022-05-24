import { createContext, ReactNode, useEffect, useState } from 'react'
import { LanguageTypes, SchemaProps } from '../locales/schema'

import { pt } from '../locales/pt-br'
import { en } from '../locales/en-us'

interface LanguageContextProviderProps {
    children: ReactNode
}

interface LanguageContextProps {
    langSchema: SchemaProps
    handleSelectLanguage: (language: LanguageType) => void
}

export type LanguageType = keyof typeof LanguageTypes

export const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps)

export function LanguageContextProvider({ children }: LanguageContextProviderProps){
    const [selectedLanguage, setSelectedLanguage] = useState<SchemaProps>()

    useEffect(() => {
        setSelectedLanguage(pt)
    }, [])

    function handleSelectLanguage(language: LanguageType){
        let lang = language === 'pt' ? pt : en

        setSelectedLanguage(lang)
    }

    return(
        <LanguageContext.Provider value={{ langSchema: selectedLanguage, handleSelectLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}