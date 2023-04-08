import { Text } from 'native-base';
import { Flex, ScrollView } from 'native-base';
import Products from '../data/Products'

export default function HomeProducts() {
  return (
    <ScrollView flex={1}>
      <Flex flexWrap="wrap" direction="row" justifyContent="space-between" px={6}>
        {
            Products.map((product)=>(
                <Text>{product.name}</Text>
            ))
        }
      </Flex>
    </ScrollView>
  )
}