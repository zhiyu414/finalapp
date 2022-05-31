import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable,Center ,ScrollView } from "native-base"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CatDetail = ({ album, navigation }) => {
  return (
    <Box 
    flex={1}
    _dark={{ bg: "#4F5B57" }}
    _light={{ bg: "#FEFFEF" }}
            
> 
<ScrollView>
    <Box
      marginLeft={29} marginRight={29} marginTop={10} borderRadius={4} shadow={2} 
      _dark={{ borderColor: 'blueGray.500', borderWidth: 0.6 }}  
    >
      
      <HStack  p={1} _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "white" }}>
          
        <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
          
          <HStack  >
         
            <Image
              source={{ uri: album.image }}
              alt="dog"
              style={{width:87,height:103}}
            />
            <VStack marginLeft={15} marginTop={30}>    

            <Box>     
            <Text
              style={{fontSize:16,}}
            >{album.name}</Text> 
            <Box position="absolute" top={-3} right={-13}>
            <MaterialCommunityIcons name="chevron-right" color="#574E45" size={25} />
            </Box>
            </Box>

            <Text
              style={{fontSize:12,color:"#A5A5A5"}}
            >{album.gender}</Text>  
            </VStack>

            <Box w={8} h={8} borderRadius={20} bgColor="#F9E6A1" position="absolute" top={35} left={250}>
            <Box position="absolute" top={1} right={1}>
            <MaterialCommunityIcons name="heart-outline" color="#574E45" size={25} />
            </Box>
            </Box>
          </HStack >
          
        </Pressable>
      </HStack >   
   
      
    </Box> 
    </ScrollView>
    </Box> 
  )};

export default CatDetail;