import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
    return (
  
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Feed') {
                iconName = focused
                  ? 'book'
                  : 'book-outline';
              } else if (route.name === 'CreatePost') {
                iconName = focused ? 'create' : 'create-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Feed" component={Feed} />
          <Tab.Screen name="CreatePost" component={CreatePost} />
        </Tab.Navigator>
    );
  }