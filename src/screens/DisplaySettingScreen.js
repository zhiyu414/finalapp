// import React from 'react';
// import { Box, Center, Switch, HStack, Text, useColorMode } from 'native-base';

// const DisplaySettingScreen = () => {
//    const { colorMode, toggleColorMode } = useColorMode();

//    return (
//       <Box
//          flex={1}
//          _dark={{ bg: "blueGray.900" }}
//          _light={{ bg: "blueGray.50" }}
//       >
//          <Center
//             shadow={2} width="90%"
//             mt="2" px="2" py="4"
//             _dark={{ bg: "blueGray.800", borderColor: 'blueGray.500', borderWidth: 0.6 }}
//             _light={{ bg: "white" }}
//             borderRadius="md"
//             alignSelf="center"
//          >
//             <HStack space={8} alignItems="center" >
//                <Text fontSize="lg">{colorMode == "light" ? "Light Mode" : "Dark Mode"}</Text>
//                <Switch
//                   name="light Mode"
//                   isChecked={colorMode === "light"}
//                   onToggle={toggleColorMode}
//                   accessibilityLabel="display-mode"
//                   accessibilityHint="light or dark mode"
//                />
//             </HStack>
//          </Center>
//       </Box>

//    );
// };

// export default DisplaySettingScreen;


import { Dimensions } from 'react-native';
import { Center, Box, Text, Pressable, useColorMode } from 'native-base';
import Animated, {
   interpolateColor,
   useAnimatedStyle,
   useDerivedValue,
   withTiming,
} from 'react-native-reanimated';
import Ionicon from 'react-native-vector-icons/Ionicons';

const AnimatedBox = Animated.createAnimatedComponent(Box);
const AnimatedCenter = Animated.createAnimatedComponent(Center);
const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedIonicon = Animated.createAnimatedComponent(Ionicon);

const WIDTH = Dimensions.get('window').width * 0.7;

const Colors = {
   dark: {
      background: '#574E45',
      circle: '#35322E',
      icon: '#000',
      text: '#F8F8F8',
   },
   light: {
      background: '#FEFFEF',
      circle: '#FFF',
      icon: '#F4F4F5',
      text: '#1E1E1E',
   },
};

export default function App() {
   const { colorMode, toggleColorMode } = useColorMode();

   const progress = useDerivedValue(() => {
      return withTiming(colorMode === 'dark' ? 1 : 0, { duration: 2000 });
   });

   const animatedStyle = useAnimatedStyle(() => {
      const backgroundColor = interpolateColor(
         progress.value,
         [0, 1],
         [Colors.light.background, Colors.dark.background]
      );

      return {
         backgroundColor,
      };
   });

   const animatedCircleStyle = useAnimatedStyle(() => {
      const backgroundColor = interpolateColor(
         progress.value,
         [0, 1],
         [Colors.light.circle, Colors.dark.circle]
      );

      return {
         backgroundColor,
      };
   });

   const animatedIconStyle = useAnimatedStyle(() => {
      const backgroundColor = interpolateColor(
         progress.value,
         [0, 1],
         [Colors.light.icon, Colors.dark.icon]
      );

      return {
         backgroundColor,
      };
   });

   const animatedTextStyle = useAnimatedStyle(() => {
      const color = interpolateColor(
         progress.value,
         [0, 1],
         [Colors.light.text, Colors.dark.text]
      );

      return {
         color,
      };
   });


   return (
      <AnimatedCenter flex={1} style={animatedStyle}>
         {/* <AnimatedText
            fontSize={20}
            fontWeight={'700'}
            letterSpacing={10}
            marginBottom={35}
            style={animatedTextStyle}
         >
            切換主題
         </AnimatedText> */}
         <Pressable onPress={toggleColorMode}>
         <AnimatedCenter
            w={WIDTH}
            h={WIDTH}
            borderRadius={WIDTH / 2}
            shadow="4"
            style={animatedCircleStyle}
         >
            {/* <Pressable onPress={toggleColorMode}> */}
               <AnimatedBox borderRadius={40} style={animatedIconStyle}>
                  <AnimatedIonicon
                     name={colorMode == 'dark' ? "moon-outline" : "sunny-outline"}
                     size={40}
                     style={animatedTextStyle}
                  />
               </AnimatedBox>
            {/* </Pressable> */}
         </AnimatedCenter>
         </Pressable>
      </AnimatedCenter>
   );
}
