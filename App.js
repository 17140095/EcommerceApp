import { NativeBaseProvider,Text, View } from 'native-base';
import HomeScreen from "./src/Screens/HomeScreen";

export default function App() {
  return (
    <NativeBaseProvider >
    <View flex={1}>
      <HomeScreen />
    </View>
    </NativeBaseProvider>
  );
}

