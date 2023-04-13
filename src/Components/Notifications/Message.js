import { Center, Text } from "native-base";

export default function Message({ color, bg, size, children }) {
  return (
    <Center bg={bg} rounded={5} p={4}>
      <Text color={color} fontSize={size}>
        {children}
      </Text>
    </Center>
  );
}
