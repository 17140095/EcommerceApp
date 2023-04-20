import { NativeBaseProvider, Text, View } from "native-base";
import PlaceOrderScreen from './src/Screens/PlaceOrderScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <PlaceOrderScreen />
      </View>
    </NativeBaseProvider>
  );
}
