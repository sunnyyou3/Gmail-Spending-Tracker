import { View, StyleSheet } from "react-native";
import { colors } from "../../constants/color";
import Orbs from "./orbs";
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

const orbStyles = StyleSheet.create({
  orb_1: {
        opacity: .6,
        top: '-30%',
        right: '0%',
    },
    orb_2: {
        opacity: 0.4,
        bottom: '-10%',
        left: '-5%',
    },
    orb_3: {
        opacity: 0.35,
        top: '30%',
        left: '52%',
    }
});

export default Background;