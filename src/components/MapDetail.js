import React , { useState }from "react";

import { Box, Image, Pressable,Text,Center,useColorMode} from "native-base"
import {Alert,TouchableOpacity,StyleSheet} from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {LinearGradient} from 'expo-linear-gradient';


const MapDetail = props => {
  const { colorMode } = useColorMode();
  let { album } = props;
  
  return (
    

      <Box flex={1} justifyContent="center"  _dark={{bg:"#574E45"}} _light={{bg: "#FEFFEF"}}  > 
    <Center  paddingLeft={12} paddingTop={2} paddingRight={0} _dark={{bg:"#574E45"}}
      >
      
      <Box  flex="1"  >
        <Pressable>
      <Image
          source={{uri: album.image}}
          borderRadius={7}
          height={310} width={196}
          alt="type"
          
           />  
      
      </Pressable>
         
         
      </Box>
          
          
          
    </Center>
    
    </Box>
   
    
  
  )
 
  
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    // width: 390,
    // height: 844,
  }
 
});




export default MapDetail;