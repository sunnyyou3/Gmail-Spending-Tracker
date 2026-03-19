import React from 'react';
import {
  Text,
  StyleSheet,
  Platform,
  View,
  TextStyle,
  StyleProp,
} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

type GradientTextProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  gradientColors: string[];
};

const GradientText: React.FC<GradientTextProps> = ({children, style, gradientColors }) => {
  if (Platform.OS === 'web') {
    return (
      <Text
        style={[
          style,
          {
            backgroundImage: `linear-gradient(90deg, ${gradientColors.join(',')})`,
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          } as any,
        ]}
      >
        {children}
      </Text>
    );
  }

  // mobile
  return (
    <MaskedView
      androidRenderingMode="software"
      maskElement={
        <View style={styles.center}>
          <Text style={[style, styles.maskText]}>
            {children}
          </Text>
        </View>
      }
    >
      <LinearGradient
        colors={gradientColors as [string, string, ...string[]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={[style, styles.hiddenText]}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  maskText: {
    color: 'black',
  },
  hiddenText: {
    opacity: 0,
  },
});