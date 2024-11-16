import { HStack, Text, Icon } from "@chakra-ui/react";
import { Switch } from "../../components/ui/switch";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

function ProfileVisibility() {
    return (
        <HStack>
            <Text minW="600px">Profile Visibility</Text>
            <Switch colorPalette="red"
              size="lg"
              trackLabel={{
                on: (
                  <Icon color="white.400">
                    <MdVisibilityOff />
                  </Icon>
                ),
                off: (
                  <Icon color="green.400">
                    <MdVisibility />
                  </Icon>
                ),
              }}/>
          </HStack>
    );
}

export default ProfileVisibility;