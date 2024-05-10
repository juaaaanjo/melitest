import React from 'react';
import { Text, Animated } from 'react-native';

const AnimatedText = Animated.createAnimatedComponent(Text);

const CommonText = ({ color, fontSize, fontWeight, marginTop, alignSelf, fontStyle, paddingLeft, width, textAlign, background, translateY, children }) => {
  return (
    <AnimatedText style={[
      {
        color: color || '#07287B',
        fontSize: fontSize || 16,
        fontWeight: fontWeight || '500',
        marginTop: marginTop || 0,
        alignSelf: alignSelf || 'center',
        fontStyle: fontStyle || 'normal',
        paddingLeft: paddingLeft || 0,
        width: width || undefined,
        textAlign: textAlign || 'left',
        backgroundColor: background || 'transparent',
        transform: [{ translateY: translateY || 0 }],
      }
    ]}>
      {children}
    </AnimatedText>
  );
};


export default CommonText;