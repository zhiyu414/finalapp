import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar, Divider, Image, Input, HStack, Box } from 'native-base';
import { extendTheme, useColorMode } from 'native-base';

import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DTypeScreen from '../screens/DTypeScreen'
import ContentScreen from '../screens/ContentScreen';
import DisplaySettingScreen from '../screens/DisplaySettingScreen';
import AccountSettingScreen from '../screens/AccountSettingScreen';
import NullScreen from '../screens/NullScreen';
import { lightTheme, darkTheme } from '../Theme';
import ActionButton from '../components/ActionButton';

import albumData from "../json/albums.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Navigation = () => {
  const { colorMode } = useColorMode();
  const MyTheme = colorMode == 'light' ? lightTheme : darkTheme;
  return (
    <NavigationContainer theme={MyTheme} >
      <StatusBar
        barStyle={colorMode == "light" ? "dark-content" : "light-content"}
        backgroundColor={colorMode == "light" ? "white" : "black"}
      />
      {Platform.OS == 'ios' ?
        <MyTabs /> :
        <MyTabs />
      }
    </NavigationContainer>
  );
}



const MyTabs = () => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarInactiveTintColor: colorMode == 'light' ? colors.light500 : 'gray',
        tabBarActiveTintColor: colorMode == 'light' ? colors.primary700 : 'white',
        tabBarStyle: { backgroundColor: colorMode == 'light' ? 'white' : 'black' },
        // headerShown: false
      }}
      >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="ActionButton"
        component={NullScreen}
        options={{
          tabBarButton: () => <ActionButton />
        }}
      /> */}
         <Tab.Screen
        name="DTypeStack"
        component={DTypeStack}
        options={{
          headerShown: false,
          title: "",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart-outline" color={color} size={31} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerShown: false,
          title: "Settings",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const SettingsStack = ({ navigation }) => {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : 'black',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
          
        }}
      />
      <Stack.Screen
        name="DisplaySetting"
        component={DisplaySettingScreen}
        options={{
          title: "Display",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : 'black',
          },
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      {/* <Stack.Screen
        name="AccountSetting"
        component={AccountSettingScreen}
        options={{
          title: "Account",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : 'black',
          },
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      /> */}

    </Stack.Navigator>
  );
}

const HomeStack = ({ navigation }) => {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false
    // }}
    >
      <Stack.Screen
        name="Home"
        component={AccountSettingScreen}
        options={{
          title: "浪浪別哭",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#F9E6A1' : 'black',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
          
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: "詳細",
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : 'black',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      
    </Stack.Navigator>
  );
}
const DTypeStack = ({ navigation }) => {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="DType"
        component={DTypeScreen}
        options={{
          title: "我的收藏",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : '#4F5B57',
          },
          
         
        }}
      />
      {/* <Stack.Screen
        name="Content"
        component={ContentScreen}
        options={({ route }) => ({
          title:"",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : '#4F5B57',
          },
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : '#4F5B57',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        })}
      /> */}
     
    </Stack.Navigator>
  );
}

export default Navigation;