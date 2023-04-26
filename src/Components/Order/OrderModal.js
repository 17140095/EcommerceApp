
import { View, Text, Center, Modal, VStack, HStack, Button, Pressable, Image } from 'native-base';
import { useState } from 'react';
import ButtonCustom from '../Button';
import Colors from '../../Colors/colors';
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

const OrderModal = () => {
  const navigation = useNavigation();
  const [showModel, setShowModel] = useState(false);

  return (
    <Center>
      <ButtonCustom onPress={()=>setShowModel(true)} bg={Colors.primary} color={Colors.white} mt={5} >SHOW PAYMENT & TOTAL</ButtonCustom>
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
            <Pressable bg={Colors.orange} w="full" justifyContent="center" h={45} rounded={2} overflow="hidden"
             onPress={()=>setShowModel(false)}>
              <Image 
                source={{uri: "https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png"}}
                alt="paypal"
                w="full"
                h={34}
                resizeMode="contain"
              />
            </Pressable>
            <Button flex={1} bg={Colors.black} _pressed={{bg: Colors.black}} _text={{color: Colors.white}} mt={3}
            onPress={()=>{
              navigation.navigate("Home");
              setShowModel(false);
            }}>
              PAY LATER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  )
}

export default OrderModal