import { useContext } from "react";
import { LanguageContext } from "../core/contexts/languageContext";

import { Avatar, Flex, Text } from "@chakra-ui/react";

export function Card(){
    const { langSchema } = useContext(LanguageContext)

    return(
       <Flex w="100vw" justify="center" mt="80px">
            <Flex w="450px" h="300px" p="8" bg="blue.400" align="center" direction="column" rounded="2xl">
                <Avatar 
                    name="João Gabriel" 
                    src="https://github.com/joaogkvalho.png" 
                    size="xl" 
                    mb="4"
                />

                <Flex direction="column" textAlign="center" mb="10">
                    <Text fontSize="xl" color="gray.50">
                        {langSchema?.card?.name}: João Gabriel
                    </Text>
                    <Text fontSize="xl" color="gray.50">
                        {langSchema?.card?.function}: Desenvolvedor Front End
                    </Text>
                    <Text fontSize="xl" color="gray.50">
                        {langSchema?.card?.area}: ReactJS e NextJS
                    </Text>
                    <Text fontSize="xl" color="gray.50">
                        {langSchema?.card?.favoriteFood}: Strogonnoff
                    </Text>
                </Flex>
            </Flex>
       </Flex>
    )
}