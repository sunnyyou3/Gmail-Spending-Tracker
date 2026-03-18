import { View } from "react-native";
import Svg, { Defs, RadialGradient, Stop, Circle } from "react-native-svg";

type OrbProps = {
  orbId: number;
  size: number;
  color: string;
  style?: any;
};

const Orbs = ({ orbId, size, color, style }: OrbProps) => {
  const radius = size / 2;

  const gradientId = "gradient-" + orbId;

  return (
    <View style={[{ position: "absolute" }, style]}>
      <Svg width={size} height={size}>
        <Defs>
          <RadialGradient
            id={gradientId}
            cx={radius}
            cy={radius}
            r={radius}
            gradientUnits="userSpaceOnUse"
          >
          <Stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <Stop offset="10%" stopColor={color} stopOpacity="0.5" />
          <Stop offset="50%" stopColor={color} stopOpacity="0.25" />
          <Stop offset="80%" stopColor={color} stopOpacity="0.08" />
          <Stop offset="100%" stopColor={color} stopOpacity="0" />
          </RadialGradient>
        </Defs>

        <Circle
          cx={radius}
          cy={radius}
          r={radius}
          fill={`url(#${gradientId})`}
        />
      </Svg>
    </View>
  );
};

export default Orbs;