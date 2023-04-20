
import { View, Text, Center, Heading } from 'native-base';
import Colors from '../../Colors/colors';

const OrderInfo = ({icon, title, subTitle, text, success, danger}) => {
  return (
    <Center px={4} py={2} shadow={4} ml={5} mr={1} mb={2} rounded={10} bg={Colors.white} w={200}>
      <Center w={60} h={60} rounded="full" bg={Colors.primary}>{icon}</Center>
      <Heading bold color={Colors.black} isTruncated fontSize={12} mt={3} mb={2}>{title}</Heading>
      <Text fontSize={13} color={Colors.black}>{subTitle}</Text>
      <Text fontSize={13} italic textAlign="center" color={Colors.black}>{text}</Text>

      {success && (
        <Center py={2} mt={2} bg={Colors.blue} w="full" rounded={5}>
            <Text fontSize={12} color={Colors.white}> Paid on Jan 12, 2021</Text>
        </Center>
      )}
      {danger && (
        <Center py={2} mt={2} bg={Colors.red} w="full" rounded={5}>
            <Text fontSize={12} color={Colors.white}> Not Deliver</Text>
        </Center>
      )}
    </Center>
  )
}

export default OrderInfo