import { View } from "react-native";
import Background from "./_components/background";
import { Slot } from "expo-router";

export default function RootLayout() {
  return <Background >
          <Slot />
        </Background>
}
