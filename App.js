import { NativeBaseProvider, Text, View } from "native-base";
import ProfileScreen from "./src/Screens/ProfileScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <ProfileScreen />
      </View>
    </NativeBaseProvider>
  );
}
