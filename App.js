import { NativeBaseProvider, Text, View } from "native-base";
import CartScreen from "./src/Screens/CartScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <CartScreen />
      </View>
    </NativeBaseProvider>
  );
}
