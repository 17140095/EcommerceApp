import { Text, Box, Heading, Center, ScrollView, HStack, Button } from "native-base";
import Colors from "../Colors/colors";
import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartItems";
import ButtonCustom from '../Components/Button';

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
        <Center mt={5}>
          <HStack pl={5} rounded={50} bg={Colors.white} w="90%" justifyContent="space-between" alignItems="center" shadow={2}>
            <Text bold color={Colors.black}>Total</Text>
            <Button bg={Colors.primary} rounded={50} h={45} px={10}
             _pressed={{
              bg: Colors.primary,
             }}
             _text={{
              color: Colors.white,
              fontWeight: "semiBold",
             }}
            >
            $385</Button>
          </HStack>
        </Center>
        <Center px={5}>
         <ButtonCustom mt={10} bg={Colors.black} color={Colors.white}>CHECKOUT</ButtonCustom>
        </Center>
        
      </ScrollView>
    </Box>
  );
};

export default CartScreen;
