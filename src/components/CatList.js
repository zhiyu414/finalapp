import React from "react";
import { FlatList } from "native-base";
import CatDetail from "./CatDetail";

const CatList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <CatDetail album={item} navigation={navigation} />;
  return (
    
    <FlatList
    _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "#FEFFEF" }}
    marginTop={329}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />    
  );  
}

export default CatList;

