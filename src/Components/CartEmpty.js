import { Box, Center, Text } from "native-base";
import Colors from "../Colors/colors";
import { FontAwesome } from "@expo/vector-icons";
import ButtonCustom from "./Button";

export default function CartEmpty() {
  return (
    <Box flex={1} px={4}>
      <Center h="90%">
        <Center w={200} h={200} rounded="full" bg={Colors.secondaryLight}>
          <FontAwesome
            name="shopping-basket"
            size={64}
            color={Colors.primary}
          />
        </Center>
        <Text bold fontSize={15} color={Colors.primary}>
          Empty Cart
        </Text>
      </Center>
      <ButtonCustom bg={Colors.primary} color={Colors.secondary}>
        Start shopping Now
      </ButtonCustom>
    </Box>
  );
}
