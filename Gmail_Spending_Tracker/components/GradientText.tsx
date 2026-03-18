import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { useState } from "react";

export const GradientText = ({
  children,
  style,
}: {
  children: string;
  style?: any;
}) => {
  const [textLayout, setTextLayout] = useState({ width: 0, height: 0 });

  return (
    <MaskedView
      maskElement={
        <Text 
          style={[styles.text, style]}
          onLayout={(e) => setTextLayout(e.nativeEvent.layout)}
        >
          {children}
        </Text>
      }
    >
      <LinearGradient
        colors={["#3b82f6", "#22d3ee"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          styles.text,
          style,
          {
            height: textLayout.height || 60,
            width: textLayout.width || 150,
          },
        ]}
      />
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    fontWeight: "bold",
  },
});