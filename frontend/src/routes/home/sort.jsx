import { Button } from "../../components/ui/button"
import {
  MenuContent,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger
} from "../../components/ui/menu"
import { useState } from "react"
import { HiSortAscending } from "react-icons/hi"
import { Flex } from "@chakra-ui/react"


const Sort = () => {
  const [value, setValue] = useState("asc")
  return (
    <MenuRoot>
        <Flex justifyContent="flex-end" width="100%">
            <MenuTrigger asChild>
            <Button variant="outline" size="sm">
                <HiSortAscending /> Sort
            </Button>
            </MenuTrigger>
        </Flex>
      <MenuContent minW="10rem">
        <MenuRadioItemGroup
          value={value}
          onValueChange={(e) => setValue(e.value)}
        >
          <MenuRadioItem value="ascPrio">Ascending By Priority</MenuRadioItem>
          <MenuRadioItem value="descPrio">Descending By Priority</MenuRadioItem>
          <MenuRadioItem value="ascDate">Ascending By Date</MenuRadioItem>
          <MenuRadioItem value="descDate">Descending By Date</MenuRadioItem>
        </MenuRadioItemGroup>
      </MenuContent>
    </MenuRoot>
  )
}

export default Sort