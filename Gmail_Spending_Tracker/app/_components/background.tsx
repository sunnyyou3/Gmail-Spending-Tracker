import { View } from "react-native";
import { colors } from "../../constants/color";
import Orbs from "./orbs";
import { orbStyles } from "@/constants/style";
import GridBackground from "./grid";

export type BackgroundProps = {
  children?: React.ReactNode;
};

const Background = ({ children }: BackgroundProps) => {
  return (
    <View style={{ backgroundColor: colors.background_color, flex: 1 }}> 
    <GridBackground />
    <Orbs orbId={1} size={740} color={colors.accent_color} style={orbStyles.orb_1} />
    <Orbs orbId={2} size={580} color={colors.accent_color} style={orbStyles.orb_2} />
    <Orbs orbId={3} size={350} color={"#22d3ee"} style={orbStyles.orb_3} />
    
    {children} 

    </View>
  )
};

export default Background;