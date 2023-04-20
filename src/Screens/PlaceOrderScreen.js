
import {Text, Box, Center, ScrollView, Heading } from 'native-base';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import OrderInfo from '../Components/Order/OrderInfo';
import OrderItem from '../Components/Order/OrderItem';
import PlaceOrderModel from '../Components/Order/PlaceOrderModel';
import Colors from '../Colors/colors';


const PlaceOrderScreen = () => {
  return (
   <Box flex={1} pt={6} safeArea bg={Colors.secondaryLight}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo title="CUSTOMER" subTitle="Jhon Doe" text="admin@gmail.com" 
            icon=<FontAwesome name="user" size={30} color={Colors.white}/>
          />
          <OrderInfo title="SHIPPING INFO" subTitle="Shipping: Lahore, Pakistan" text="Payment Method: PayPal" 
            icon=<FontAwesome5 name="shipping-fast" size={30} color={Colors.white}/>
          />
          <OrderInfo title="DELIVER TO" subTitle="Shipping: " text="Street No 4, Gulberg, Lahore" 
            icon=<Ionicons name="location-sharp" size={30} color={Colors.white}/>
          />
        </ScrollView>
      </Box>
      <Box flex={1} px={5} pb={3}>
          <Heading isTruncated bold my={4} fontSize={15}>PRODUCTS</Heading>
          <OrderItem />
          <PlaceOrderModel />
      </Box>
   </Box>
  )
}

export default PlaceOrderScreen