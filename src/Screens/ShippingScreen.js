
import { Box, Text, Center, ScrollView, VStack, FormControl, Input } from 'native-base';
import Colors from '../Colors/colors';
import ButtonCustom from '../Components/Button';
import { useNavigation } from '@react-navigation/native';

const ShippingInputs = [
  {
    label: "ENTER CITY",
    type: "text",
  },
  {
    label: "ENTER COUNTRY",
    type: "text",
  },
  {
    label: "ENTER POSTAL",
    type: "text",
  },
  {
    label: "ENTER STREET",
    type: "text",
  },
]

const ShippingScreen = () => {

  const navigation = useNavigation();

  return (
    <Box flex={1} bg={Colors.primary} safeAreaTop py={5}>
     <Center pb={15}>
      <Text color={Colors.white} bold fontSize={14}>DELIVERY ADDRESS</Text>
     </Center>
     <Box h="full" px={5} bg={Colors.white}>
      <ScrollView showVerticalScrollIndicator={false}>
        <VStack space={6} mt={5}>
        {
          ShippingInputs.map((input) => (
            <FormControl key={input.label}>
            <FormControl.Label _text={{fontSize:"14px", fontWeight:"bold"}}>
              {input.label} 
            </FormControl.Label>
            <Input borderWidth={0.5} py={4} bg={Colors.secondary} px={2} color={Colors.primary}
              borderColor={Colors.secondary} type={input.type} 
              _focus={{bg: Colors.secondary, borderWidth: 1, borderColor: Colors.primary}}
              _text={{fontSize: "30px", fontWeight:"bold"}}
            />
          </FormControl>
          ))
        }
        <ButtonCustom bg={Colors.primary} color={Colors.white} mt={5} onPress={()=>navigation.navigate("Checkout")}>CONTINUE</ButtonCustom>
        </VStack>
      </ScrollView>
     </Box>
    </Box>
  )
}

export default ShippingScreen;