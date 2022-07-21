// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import SettingsScreen from './Components/SettingsScreen/SettingsScreen';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
           title :'Home',
          tabBarIcon:()=>{
            return(
              <Entypo name="home" size={24} color="black" />
            );
          },
        }} />
        
      

        <Tab.Screen name="Settings" component={SettingsScreen} options={{
          title :'Settings',
          tabBarIcon: () => {
            return(
              <Ionicons name="settings" size={24} color="black" />
            );
          },
          tabBarActiveTintColor : 'tomato'
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   baseText: {
//     fontWeight: 'bold'
//   },
//   innerText: {
//     color: 'red'
//   }

// });
