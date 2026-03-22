import { View, StyleSheet } from "react-native";
import { Text } from "react-native";
import GradientText  from "@/components/GradientText";
import { Link } from "expo-router";

const Landing = () => {
  return (
    <View style={landingStyles.container}>
      <Text style={landingStyles.headline}>Ship faster with{' '}
        <GradientText style={landingStyles.headline} gradientColors={["#a78bfa", "#22d3ee"]}>
          Pulse
        </GradientText>
      </Text>
      <Link href="./login">Get Started</Link>
    </View>
  );
}

const landingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headline: {
    fontFamily: "Sora, sans-serif",
    fontSize: 56,
    fontWeight: "bold",
    color: "#e2e2e8",
    lineHeight: 28,
    letterSpacing: -0.5,
    maxWidth: 768
  }
});

export default Landing;