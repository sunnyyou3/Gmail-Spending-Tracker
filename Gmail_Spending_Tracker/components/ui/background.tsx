import { View } from "react-native";
import { colors } from "../../constants/color";
import { BackgroundProps } from "../../constants/type";
import { Orbs } from "./orbs";
import { orbStyles } from "@/constants/style";


export const Background = ({ children }: BackgroundProps) => {
  return (
    <View style={{ backgroundColor: colors.background_color, flex: 1 }}> 
    <Orbs style={orbStyles.orb_1} />
    <Orbs style={orbStyles.orb_2} />
    <Orbs style={orbStyles.orb_3} />
    
    {children} 

    </View>
  )
};