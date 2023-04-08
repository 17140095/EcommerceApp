import { Text } from 'native-base';
import { Flex, ScrollView } from 'native-base';
import Products from '../data/Products'
import ProductCard from '../Components/ProductCard';

export default function HomeProducts() {
  return (
    <ScrollView flex={1}>
      <Flex flexWrap="wrap" direction="row" justifyContent="space-between" px={6}>
        {
            Products.map((product)=>(
                <ProductCard product={product}/>
            ))
        }
      </Flex>
    </ScrollView>
  )
}