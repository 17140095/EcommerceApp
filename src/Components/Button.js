import { Button } from "native-base";

export default function ButtonCustom({ mt, bg, color, children, onPress }) {
  return (
    <Button
      w="full"
      h={55}
      mt={mt}
      bg={bg}
      rounded="full"
      _text={{ color: color, fontWeight: "bold" }}
      _pressed={{ bg: bg }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
}
