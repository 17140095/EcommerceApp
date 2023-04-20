
import {Text, Box, Center, ScrollView, Heading } from 'native-base';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import OrderInfo from '../Components/Order/OrderInfo';
import OrderItem from '../Components/Order/OrderItem';
import Colors from '../Colors/colors';
import OrderModal from '../Components/Order/OrderModal';


const OrderScreen = () => {
  return (
   <Box flex={1} pt={6} safeArea bg={Colors.secondaryLight}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo title="SHIPPING INFO" subTitle="Shipping: Lahore, Pakistan" text="Payment Method: PayPal" 
            success icon=<FontAwesome5 name="shipping-fast" size={30} color={Colors.white}/>
          />
          <OrderInfo title="DELIVER TO" subTitle="Shipping: " text="Street No 4, Gulberg, Lahore" 
            danger icon=<Ionicons name="location-sharp" size={30} color={Colors.white}/>
          />
        </ScrollView>
      </Box>
      <Box flex={1} px={5} pb={3}>
          <Heading isTruncated bold my={4} fontSize={15}>PRODUCTS</Heading>
          <OrderItem />
          <OrderModal />
      </Box>
   </Box>
  )
}

export default OrderScreen