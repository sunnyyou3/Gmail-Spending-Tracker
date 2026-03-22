import { View, StyleSheet } from "react-native";
import { Text } from "react-native";
import GradientText  from "@/components/GradientText";
import { Link } from "expo-router";
import PillText from "@/components/PillText";

const Landing = () => {
  return (
    <View style={landingStyles.container}>
      <View style={landingStyles.pillContainer}>
        <PillText>Lightning Fast</PillText>
        <PillText>Secure by Default</PillText>
      </View>
      <Text style={landingStyles.headline}>Ship faster with{' '}
        <GradientText style={landingStyles.headline} gradientColors={["#a78bfa", "#22d3ee"]}>
          Pulse
        </GradientText>
      </Text>
      <Text style={landingStyles.description}>
        The modern developer platform that turns ideas into production-ready apps — no boilerplate, no hassle.
      </Text>
      <Link href="./login">
        <GradientText style={landingStyles.buttonText} gradientColors={[ "#7c3aed", "#6d28d9", "#7c3aed", "#8b5cf6"]}>
          Get Started
        </GradientText>
      </Link>
    </View>
  );
}

const landingStyles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 10,
    flex: 1,
    paddingTop: -80,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  pillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 32,
    gap: 12
  },
  headline: {
    fontFamily: "Sora, sans-serif",
    fontSize: 56,
    fontWeight: "bold",
    color: "#e2e2e8",
    lineHeight: 28,
    letterSpacing: -0.5,
    maxWidth: 768
  },
  description: {
    position: "relative",
    fontFamily: "DM Sans, sans-serif",
    fontSize: 17.6,
    color: "#8a8a9a",
    marginTop: 40,
    marginBottom: 20,
    maxWidth: 412,
    lineHeight: 30
  },
  buttonText: {
    fontFamily: "Sora, sans-serif",
    color: "#0a0a0f",
    position: "relative"
  }
});

export default Landing;