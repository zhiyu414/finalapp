import React from "react";
import { Text, HStack, Pressable, Center, Box} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ListItem = ({ title, navigation, destination }) => {
  return (
    <Pressable
      onPress={() => {
        destination ? navigation.navigate(destination) : null;
      }}
    >
      {/* <HStack
        _dark={{
          bg: "#4F5B57",
          borderColor: "#4F5B57",
          borderButtomWidth: 0.6,
        }}
        _light={{ bg: "#FEFFEF" }}
        px="4"
        py="4"
        borderTopWidth={0}
        borderColor="#E2D5C3"
        justifyContent="space-between"
        marginTop={0}
        
      >
        <Center width="30" height="30"   position= "absolute"  style={{elevation:2}} flex="1" borderRadius="9" marginTop={3} marginLeft={5} 
        _dark={{bg: "#4F5B57"}} _light={{bg:"#4F5B57"}}> 
         <MaterialCommunityIcons name="cog-outline" color="#fff"  size={26} />
         </Center>

        <Text fontSize={15} marginRight={150} >{title}</Text>
        <AntDesign name="right" color="gray" size={20} />

        

      </HStack> */}

      <Box w={341} h={67}  _dark={{ bg: "#35322E" }}
        _light={{ bg: "white" }} borderRadius={4} alignSelf="center" style={{elevation:2}} marginTop={30}>
        <HStack justifyContent="flex-start" marginTop={0}>
          <Center width="54" height="54"   position= "absolute"   borderRadius="9" marginTop={2} marginLeft={2} 
                _dark={{bg: "#BCB9A7" ,borderwidth:1,borderColor:"#fff"}} _light={{bg:"#F1E9C3"}}> 
            <MaterialCommunityIcons name="cog-outline" color="#000000"  size={32} />
          </Center>

          <Text fontSize={15} marginLeft={75} marginTop={6}>{title}</Text>
            
        </HStack>
      </Box>      
    </Pressable>
  );
};

export default ListItem;