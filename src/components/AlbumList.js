import React from "react";
import { FlatList } from "native-base";
import AlbumDetail from "./AlbumDetail";

const AlbumList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <AlbumDetail album={item} navigation={navigation} />;
  return (
    
    <FlatList
    _dark={{ bg: "#574E45" }}
    _light={{ bg: "#FEFFEF" }}
    // marginTop={329}
    marginBottom={8}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />    
  );  
}

export default AlbumList;

