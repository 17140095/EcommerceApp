import { Text, Box, Heading, Center, ScrollView } from "native-base";
import Colors from "../Colors/colors";
import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartItems";

const CartScreen = () => {
  return (
    <Box flex={1} bg={Colors.secondary} safeAreaTop>
      <Center w="full" py={5}>
        <Text color={Colors.black} bold fontSize={20}>
          Cart
        </Text>
      </Center>
      {/* <CartEmpty /> */}
      <ScrollView showVerticalScrollIndicator={false}>
        <CartItems />
      </ScrollView>
    </Box>
  );
};

export default CartScreen;
