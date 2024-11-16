import { FaMoon, FaSun } from "react-icons/fa";
import { HStack, Text, Icon } from "@chakra-ui/react";
import { Switch } from "../../components/ui/switch";

function LightTheme() {
    return (
        <HStack>
            <Text minW="600px">Light Theme</Text>
            <Switch colorPalette="blue"
            size="lg"
            trackLabel={{
                on: (
                <Icon color="yellow.400">
                    <FaSun />
                </Icon>
                ),
                off: (
                <Icon color="blue.400">
                    <FaMoon />
                </Icon>
                ),
            }}/>
        </HStack>
    );
}

export default LightTheme;