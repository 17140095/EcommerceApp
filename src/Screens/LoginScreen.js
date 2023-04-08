import {Text, Box, Image, Heading, VStack, HStack, Input, Button,Pressable } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import Colors from '../Colors/colors';

const LoginScreen = () => {
  return (
    <Box flex={1}>
      <Image 
        flex={1}
        alt="Logo"
        source={require('../../assets/images/primary-bg.png')}
      />
      <Box w="full" h="full" top="10" px='6' position="absolute" justifyContent='center'  >
        <Heading>Login</Heading>
        <VStack space={5} pt={6}>
          <Input
          InputLeftElement={<Entypo name="mail" size={24} color={Colors.primary} />} 
          placeholder="user@gmail.com" variant="underlined" w="70%" pl={2} color={Colors.primary} 
          borderBottomColor={Colors.secondary} 
          />
          <Input
          InputLeftElement={<Entypo name="eye-with-line" size={24} color={Colors.primary} />} 
          placeholder="********" type="password" variant="underlined" w="70%" pl={2} color={Colors.primary} 
          borderBottomColor={Colors.secondary} 
          />
        </VStack>
        <Button
          _pressed={{
            bg: Colors.primary,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.primary}
          onPress={()=>{
            console.log('hello')
          }}
        >
          Login
        </Button>
        <HStack space={2} mt={2}>
          <Text>Don't have an account?</Text>
        <Pressable
          
          onPress={()=>{
            console.log('Sign Up')
          }}
        >
          <Text color={Colors.primary}>Sign Up</Text>
        </Pressable>
        </HStack>
      </Box>
    </Box>
  )
}

export default LoginScreen