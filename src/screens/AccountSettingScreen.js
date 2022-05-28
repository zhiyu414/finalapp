import React, { useState } from 'react';
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Box, Text, Center, useColorMode } from "native-base";


export default function TabVAccountSettingScreeniewExample() {
   const [selectedIndex, setSelectedIndex] = useState(0);
   const { colorMode } = useColorMode();

   const SegmentedContent = () => {
      if (selectedIndex == 1) {
         return (
            <Center flex={1}
               _dark={{ bg: "blueGray.900" }}
               _light={{ bg: "blueGray.50" }}>
               <Text>This is an Advanced Account Setting Page</Text>
            </Center>
         )
      } else {
         return (
            <Center flex={1}
               _dark={{ bg: "blueGray.900" }}
               _light={{ bg: "blueGray.50" }}>
               <Text>This is a General Account Setting Page</Text>
            </Center>
         )
      }
   }

   return (
      <Box flex={1}
         _dark={{ bg: "blueGray.900" }}
         _light={{ bg: "blueGray.50" }}>
         <SegmentedControlTab
            values={["General", "Advanced"]}
            tabStyle={{ 
               marginTop: 60, borderColor: colorMode == "light" ? "#fff" : "black", 
               borderWidth: colorMode=="light"? 0: 4,
               backgroundColor: colorMode == "light" ? "white" : "black" 
            }}
            firstTabStyle={{ marginLeft: 50 }}
            lastTabStyle={{ marginRight: 50 }}
            tabTextStyle={{ fontSize: 15, padding:3, color: colorMode == "light" ? "gray" : "#88898B", }}
            activeTabStyle={{ borderBottomWidth:2 ,borderBottomColor:"#000",backgroundColor:"#fff"}}
            activeTabTextStyle={{ color: "#000" }}
            selectedIndex={selectedIndex}
            onTabPress={(index) => setSelectedIndex(index)}
         />
         <SegmentedContent />
      </Box>
   );
}