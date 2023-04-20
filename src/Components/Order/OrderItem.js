
import { FlatList, Text, Pressable, Box, HStack, Center, Image, VStack, Button } from 'native-base';
import Products from '../../data/Products';
import Colors from '../../Colors/colors';

const OrderItem = () => {
  return (
    <FlatList showsVerticalScrollIndicator={false}
      data={Products}
      renderItem={({item})=> <Pressable>
        <Box mb={3}>
          <HStack alignItems="center" bg={Colors.white} rounded={10} shadow={1} overflow="hidden">
            <Center w="25%" bg={Colors.secondary}>
              <Image source={{uri: item.image}} alt={item.name} w="full" h={24} resizeMode="contain" />
            </Center>
            <VStack w="60%" px={2}>
              <Text isTruncated bold fontSize={12} color={Colors.black}>{item.name}</Text>
              <Text fontSize={12} color={Colors.grey} mt={2} bold>${item.price}</Text>
            </VStack>
            <Center>
              <Button bg={Colors.primary} _pressed={{bg: Colors.primary}} _text={{color: Colors.white}}>5</Button>
            </Center>
          </HStack>
        </Box>
      </Pressable>
      }
    />
  )
}

export default OrderItem