import { NativeBaseProvider, Text, View } from "native-base";
import PaymentScreen from './src/Screens/PaymentScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <PaymentScreen />
      </View>
    </NativeBaseProvider>
  );
}
