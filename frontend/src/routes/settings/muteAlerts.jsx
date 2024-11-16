import { HStack, Text, Icon } from "@chakra-ui/react";
import { Switch } from "../../components/ui/switch";
import { IoIosNotifications, IoIosNotificationsOff } from "react-icons/io";

function MuteAlert() {
    return (
        <HStack>
            <Text minW="600px">Mute Alerts</Text>
            <Switch colorPalette="red"
              size="lg"
              trackLabel={{
                on: (
                  <Icon color="white.400">
                    <IoIosNotificationsOff />
                  </Icon>
                ),
                off: (
                  <Icon color="yellow.400">
                    <IoIosNotifications />
                  </Icon>
                ),
              }}/>
          </HStack>
    );
}

export default MuteAlert;