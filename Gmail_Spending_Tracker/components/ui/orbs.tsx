import { LinearGradient } from 'expo-linear-gradient';

export const Orbs = ({ style }: any) => {
  return (
    <LinearGradient
      colors={["#6d28d9", "transparent"]}
      style={[
        style,
        {
          position: "absolute",
          borderRadius: 9999,
        },
      ]}
    />
  );
};