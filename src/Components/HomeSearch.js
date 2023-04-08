import { HStack, Input, Pressable, Box } from 'native-base';
import Colors from '../Colors/colors';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeSearch() {
  return (
    <HStack space={3} px="6" py="4" alignItems="center" bg={Colors.primary} safeAreaTop>
        <Input 
            placeholder="Nike, Puma, Adidas, ....."
            width="85%"
            h={12}
            borderWidth={0}
            variant="filled"
            bg={Colors.white}
            _focus={{bg: Colors.white}}
            type="search"

        />
        <Pressable ml={3}>
        <FontAwesome name="shopping-basket" size={24} color={Colors.white} />
        <Box 
        px={1} 
        position="absolute" 
        rounded="full"
        top={-13}
        left={2} 
        bg={Colors.red} 
        _text={{
            color: Colors.white, 
            fontSize: "11px",
            }}>
            55
        </Box>
        </Pressable>
    </HStack>
  )
}