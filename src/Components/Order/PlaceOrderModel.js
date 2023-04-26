
import { View, Text, Center, Modal, VStack, HStack, Button } from 'native-base';
import { useState } from 'react';
import ButtonCustom from '../Button';
import Colors from '../../Colors/colors';
import OrderInfo from './OrderInfo';
import { useNavigation } from '@react-navigation/native';

const OrderInfos = [
  {
    title: "Products",
    price: 2245.45,
    color: "black"
  },
  {
    title: "Shipping",
    price: 225.30,
    color: "black"
  },
  {
    title: "Tax",
    price: 20.45,
    color: "black"
  },
  {
    title: "Total",
    price: 24515.26,
    color: "primary"
  },
  
];

const PlaceOrderModel = () => {
  const [showModel, setShowModel] = useState(false);
  const navigation = useNavigation();
  return (
    <Center>
      <ButtonCustom onPress={()=>setShowModel(true)} bg={Colors.black} color={Colors.white} mt={5} >SHOW TOTAL</ButtonCustom>
      <Modal isOpen={showModel} onClose={()=> setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order Info</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {
                OrderInfos.map((info) => (
                  <HStack key={info.title} justifyContent="space-between" alignItems="center">
                    <Text fontWeight="medium">{info.title}</Text>
                    <Text fontSize={14} bold color={info.color === "primary" ? Colors.primary: Colors.black}>${info.price}</Text>
                    
                  </HStack>
                ))
              }
             
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button flex={1} bg={Colors.primary} _pressed={{bg: Colors.primary}} _text={{color: Colors.white}}
            onPress={()=>{
              navigation.navigate("Order");
              setShowModel(false);
            }}>
              PLACE ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  )
}

export default PlaceOrderModel