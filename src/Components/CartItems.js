import { Text, Box, Center, Pressable, HStack } from "native-base";
import SwipeListView from "react-native-swipe-list-view";
import Products from "../data/Products";
import Colors from "../Colors/colors";
import { FontAwesome } from "@expo/vector-icons";

const Swiper = () => (
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={Products.slice(0, 2)}
    renderHiddenItem={hiddenItems}
    renderItem={renderItems}
    showsVerticalScrollIndicator={false}
  />
);

const renderItems = (data, rowMap) => (
  <Pressable>
    <Box ml={6} mb={3}>
      {/* <HStack
        alignItems="center"
        bg={Colors.white}
        shadow={1}
        rounded={10}
        overflow="hidden"
      >
        <Center w="25%" bg={Colors.primaryLight}></Center>
      </HStack> */}
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
    {/* <Center alignItems="center" space={2}>
      <FontAwesome name="trash" size={24} color={Colors.white} />
    </Center> */}
  </Pressable>
);

export default function CartItems() {
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
}
