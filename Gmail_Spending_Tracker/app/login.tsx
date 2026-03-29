import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GradientText  from "@/components/GradientText";
import GoogleOauth from "@/services/GoogleOauth";

const Login = () => {
  return (
    <View style={loginStyles.container}>
      <GradientText style={{ marginBottom: 40, fontWeight: "bold", fontSize: 30 }} gradientColors={["#a78bfa", "#22d3ee"]}>
        Buncha
      </GradientText>
      <View style={loginStyles.wrapper}>
        <View style={loginStyles.card}>
          
          <View style={loginStyles.header}>
            <Text style={loginStyles.title}>Sign In</Text>
            <Text style={loginStyles.subtitle}>Access your account</Text>
          </View>

          <TouchableOpacity style={loginStyles.googleBtn}>
            {/* <Text style={loginStyles.googleText}>Continue with Google</Text> */}
            <GoogleOauth />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const loginStyles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 10,
    flex: 1,
    marginBottom: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },
  card: {
    borderRadius: 20,
    padding: 32,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Outfit",
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.7)",
    fontFamily: "Outfit",
  },
  googleBtn: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    marginBottom: 24,
  },
  googleText: {
    color: "#fff",
    fontWeight: "500",
    fontFamily: "Outfit",
  }
});

export default Login;