import { Box, ScrollView, VStack, FormControl, Input } from 'native-base';
import Colors from '../../Colors/colors';
import ButtonCustom from '../Button';

const Inputs=[
    {
        name:"Username",
        type: "text"
    },
    {
        name:"Email",
        type:"text"
    },
    {
        name:"New Password",
        type:"password" 
    },
    {
        name:"Confirm Password",
        type:"password" 
    }
];

const Profile = () => {
  return (
    <Box h="full" px={5} bg={Colors.white}>
     <ScrollView showVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} mb={10}>
        {
            Inputs.map((s) => (
                <FormControl key={s.name}>
                <FormControl.Label _text={{ fontSize: '12px', fontWeight: 'bold' }} > 
                    {s.name}
                </FormControl.Label>
                <Input borderWidth={0.2} bg={Colors.secondaryLight} color={Colors.primary} py={3} fontSize={15}
                    _focus={{bg: Colors.secondaryLight, borderColor: Colors.primary, borderWidth: 1}}
                    type={s.type}
                />
            </FormControl>
            ))
        }
          <ButtonCustom bg={Colors.primary} color={Colors.secondary}>UPDATE PROFILE</ButtonCustom>  
        </VStack>
     </ScrollView>
    </Box>
  )
}

export default Profile