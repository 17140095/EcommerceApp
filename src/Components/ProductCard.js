import { Box, Text, Pressable, Image, Heading } from 'native-base';
import Colors from '../Colors/colors';

export default function ProductCard({product}) {
  return (
    <Pressable key={product._id} w="47%" bg={Colors.white} my={3} p={2} rounded="md">
        <Image 
            alt="Product"
            h={24}
            w="full"
            resizeMode="contain"
            source={{uri: product.image}}
        />
      <Box px={2} pt={1}>
        <Heading size="sm" bold>{product.price}</Heading>
        <Text fontSize={12} mt={1} isTruncated>{product.description}</Text>
      </Box>
    </Pressable>
  )
}