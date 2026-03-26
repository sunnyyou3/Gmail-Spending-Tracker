import { useEffect, useRef } from "react";
import { Animated  } from "react-native";

const Fade = (delay: number) => {
    const opacity = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(20)).current;

    useEffect(() => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 600,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 600,
          delay,
          useNativeDriver: true,
        }),
      ]).start();
    }, []);

    return {
      opacity,
      transform: [{ translateY }],
    };
  };

  export default Fade;