import { useContext } from "react"
import { LanguageContext } from "../core/contexts/languageContext"
import { LanguageTypes } from "../core/locales/schema"

import { Flex, Select, Text } from "@chakra-ui/react"

export function Header(){
    const { handleSelectLanguage } = useContext(LanguageContext)

    function handleChangeLanguage(event: any){
        const language = event.target.value

        handleSelectLanguage(language)
    }

    return(
        <Flex w="100%" h="75px" px="8" bg="blue.400" align="center" justify="center">
            <Flex w="100%" justify="space-between">
                <Text fontSize="xl" fontWeight="bold" color="gray.50">
                    TranslationProject
                </Text>

                <Select 
                    w="150px" 
                    bg="gray.50"
                    onChange={(e) => handleChangeLanguage(e)}
                >
                    {Object.entries(LanguageTypes).map(([key, value]) => {
                        return(
                            <option key={key} value={value.id}>
                                {value.name}
                            </option>
                        )
                    })}
                </Select>
            </Flex>
        </Flex>
    )
}