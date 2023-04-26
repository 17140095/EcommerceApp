import { Box, Text, Center, ScrollView, VStack, FormControl, Input, HStack, Image} from 'native-base';
import Colors from '../Colors/colors';
import ButtonCustom from '../Components/Button';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PaymentMethods = [
  {
    image: "https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png",
    alt: "PayPal",
    icon: "Ionicons"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Discover_Card_logo.svg/2560px-Discover_Card_logo.svg.png",
    alt: "Discover",
    icon: "fontAwesome"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png",
    alt: "GooglePay",
    icon: "fontAwesome"
  },
]

const PaymentScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} bg={Colors.primary} safeAreaTop py={5}>
     <Center pb={15}>
      <Text color={Colors.white} bold fontSize={14}>PAYMENT METHOD</Text>
     </Center>
     <Box h="full" px={5} bg={Colors.secondaryLight}>
      <ScrollView showVerticalScrollIndicator={false}>
        <VStack space={6} mt={5}>
        {
          PaymentMethods.map((method, i) => (
            <HStack key={i} alignItems="center" rounded={10} px={2} py={1} bg={Colors.white} justifyContent="space-between">
              <Box>
                <Image 
                  source={{uri: method.image}}
                  alt={method.alt}
                  w={60}
                  h={50}
                  resizeMode="contain"
                />
              </Box>
              {method.icon === "Ionicons" ? <Ionicons name="checkmark-circle" size={30} color={Colors.primary}/>
                : <FontAwesome name="circle-thin" size={30} color={Colors.primary}/>
              }
              
            </HStack>
          ))
        }
        
        <ButtonCustom bg={Colors.primary} color={Colors.white} mt={5} onPress={()=>navigation.navigate("PlaceOrder")}>CONTINUE</ButtonCustom>
        <Text italic textAlign="center">Payment method is <Text bold>PayPal</Text> by default</Text>
        </VStack>
      </ScrollView>
     </Box>
    </Box>
  )
}

export default PaymentScreen