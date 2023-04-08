import { Text, Center, Box, Image, VStack,  } from 'native-base';
import Colors from '../Colors/colors';
import ButtonCustom from '../Components/Button';

const NotVerifyScreen = () => {
  return (
    <Box flex={1} bg={Colors.white} safeAreaTop>
      <Center w="full" h={250} >
        <Image
          alt="Logo"
          size="lg" 
          source={require('../../assets/favicon.png')}
        />
      </Center>
      <VStack space={5} px="6" alignItems="center">
      
      <ButtonCustom bg={Colors.primary} color={Colors.secondary}>Register</ButtonCustom>
      <ButtonCustom bg={Colors.secondary} color={Colors.primary}>Register</ButtonCustom>
      </VStack>
    </Box>
  )
}

export default NotVerifyScreen