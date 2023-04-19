import { Text, Box, Center, Pressable, HStack, Image, VStack, Button } from "native-base";
import {SwipeListView} from "react-native-swipe-list-view";
import Products from "../data/Products";
import Colors from "../Colors/colors";
import { FontAwesome } from "@expo/vector-icons";

const Swiper = () => (
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey={"0"}
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={Products}
    renderHiddenItem={hiddenItems}
    renderItem={renderItems}
    showsVerticalScrollIndicator={false}
  />
);

const renderItems = (data) => (
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack
        alignItems="center"
        bg={Colors.white}
        shadow={1}
        rounded={10}
        overflow="hidden"
      >
        <Center w="25%" bg={Colors.primaryLight}>
          <Image 
            source={{uri: data.item.image}}
            alt={data.item.name}
            w="full"
            h={24}
            resizeMode="contain"
          />
        </Center>
        <VStack p={2} w="60%" space={3}>
          <Text bold isTruncated fontSize={14} color={Colors.black} >{data.item.name}</Text>
          <Text color={Colors.grey} bold>${data.item.price}</Text>
        </VStack>
        <Button bg={Colors.primary} _pressed={{bg: Colors.primary}} _text={{color: Colors.white}}>
          5
        </Button>
      </HStack>
    </Box>
  </Pressable>
);
const hiddenItems = () => (
  <Pressable
    w={50}
    roundedTopRight={10}
    roundedBottomRight={10}
    h="88%"
    ml="auto"
    justifyContent="center"
    bg={Colors.red}
  >
    <Center alignItems="center">
      <FontAwesome name="trash" size={24} color={Colors.white} />
    </Center>
  </Pressable>
);



const CartItems = () => {
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
};

export default CartItems;
