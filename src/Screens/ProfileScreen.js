import { Center, Image, Heading, Text } from 'native-base';
import Colors from '../Colors/colors';
import Tabs from '../Components/Profile/Tabs';

const ProfileScreen = () => {
  return (
    <>
    <Center bg={Colors.primary} pt={10} pb={6}>
      <Image
        source={{uri: "https://img.freepik.com/free-icon/user_318-563642.jpg?w=2000"}}
        alt="image"
        w={24}
        h={24}
        resizeMode="cover"
      />
      <Heading isTruncated bold fontSize={15} color={Colors.white} my={2}>Jhone Doe</Heading>
      <Text italic fontSize={10} color={Colors.white}>Joined 12 Dec, 2002</Text>
    </Center>
    <Tabs />
    </>
  )
}

export default ProfileScreen;