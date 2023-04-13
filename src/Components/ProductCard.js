import { Box, Text, Pressable, Image, Heading, HStack } from "native-base";
import Colors from "../Colors/colors";
import { FontAwesome } from "@expo/vector-icons";
import ProductRating from "./ProductRating";

export default function ProductCard({ product }) {
  const value = 1;
  return (
    <Pressable w="47%" bg={Colors.white} my={3} p={2} rounded="md">
      <Image
        alt="Product"
        h={24}
        w="full"
        resizeMode="contain"
        source={{ uri: product.image }}
      />
      <Box px={2} pt={1}>
        <Heading size="sm" bold>
          {product.price}
        </Heading>
        <Text fontSize={12} mt={1} isTruncated>
          {product.description}
        </Text>
        <ProductRating rating={product.rating} />
      </Box>
    </Pressable>
  );
}
