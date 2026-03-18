import { View, StyleSheet } from "react-native";
import { Text } from "react-native";
import { GradientText } from "@/components/GradientText";

const Landing = () => {
  return (
    <View style={landingStyles.container}>
      <Text style={landingStyles.headline}>Ship faster with
      </Text>
      <GradientText>Pulse</GradientText>

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


// <h1 id="headline" class="fade-up fade-up-d3 font-bold leading-tight tracking-tight max-w-3xl" 
// style="font-family: Sora, sans-serif; font-size: 3.5rem; color: #e2e2e8;">Ship faster with 
// <span id="headline-accent" style="background: linear-gradient(135deg, #a78bfa, #22d3ee); 
// -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Pulse</span></h1><!-- Subtext -->

export default Landing;