import { View, Text, StyleSheet, TouchableOpacity  } from "react-native";
import GradientText  from "@/components/GradientText";
import { Link } from "expo-router";
import PillText from "@/components/PillText";

const Landing = () => {
  return (
    <View style={{flex: 1}}>
      <View style={landingStyles.header}>
        <View style={landingStyles.leftHeader}>
          <GradientText style={{fontWeight: "bold", fontSize: 18}} gradientColors={["#a78bfa", "#22d3ee"]}>
              Pulse
          </GradientText>
        </View>
        <View style={landingStyles.nav}>
        <TouchableOpacity>
          <Text style={landingStyles.link}>Features</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={landingStyles.link}>Guide</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={landingStyles.link}>About</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style={landingStyles.container}>
          <View style={landingStyles.pillContainer}>
            <PillText>Lightning Fast</PillText>
            <PillText>Secure by Default</PillText>
          </View>
          <Text style={landingStyles.headline}>Budget Better With{' '}
            <GradientText style={landingStyles.headline} gradientColors={["#a78bfa", "#22d3ee"]}>
              Pulse
            </GradientText>
          </Text>
          <Text style={landingStyles.description}>
            The smart finance app that turns your emails into real-time spending insights — no manual tracking, no hassle.
          </Text>
          <Link href="./login">
            <GradientText style={landingStyles.buttonText} gradientColors={[ "#7c3aed", "#6d28d9", "#7c3aed", "#8b5cf6"]}>
              Get Started
            </GradientText>
          </Link>
          <Text style={landingStyles.bottomText}>
            Your inbox knows your spending—we make it visible.
          </Text>
        </View>
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
  header: {
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 70,
    paddingTop: 30,
  },
  leftHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  pillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 40,
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
    textAlign: "center",
    color: "#8a8a9a",
    marginTop: 40,
    marginBottom: 20,
    maxWidth: 450,
    lineHeight: 30
  },
  buttonText: {
    fontFamily: "Sora, sans-serif",
    color: "#0a0a0f",
    position: "relative"
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  link: {
    fontSize: 18,
    color: "#8a8a9a",
    fontWeight: "bold",
    fontFamily: "DM Sans",
  },
  bottomText: {
    marginTop: 48,
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: "#4a4a5a",
    // fontFamily: "DM Sans",
  },
});

export default Landing;