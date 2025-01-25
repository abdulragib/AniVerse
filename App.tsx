import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "./src/screens/Home";
import SettingsScreen from "./src/components/HomeHeader";
import LoginScreen from "./src/screens/Login";
import DetailsScreen from "./src/screens/Details";
import Search from "./src/screens/Search";
import HomeHeader from "./src/components/HomeHeader";
import DiamondStore from "./src/screens/DiamondStore";
import PurchaseHistory from "./src/screens/PurchaseHistory";
import Library from "./src/screens/Library";
import MySpace from "./src/screens/MySpace";
import SeriesOverview from "./src/screens/SeriesOverview";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Library") {
            iconName = "book";
          } else if (route.name === "Store") {
            iconName = "stack-exchange";
          } else if (route.name === "My Space") {
            iconName = "cog";
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#108554",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0,
          elevation: 5,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen} // Use the stack navigator for Home
        options={{
          header: () => <HomeHeader />, // Custom header for Home
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Store"
        component={DiamondStore}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="My Space"
        component={MySpace}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false, // Hide tabs on Login
          }}
        />
        {/* Main App with Tabs */}
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{
            headerShown: false, // Hide header for the tab navigator
          }}
        />

        <Stack.Screen
          name="PurchaseHistory"
          component={PurchaseHistory}
          options={{
            headerShown: false, // Show header for Details screen
          }}
        />

        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false, // Show header for Search screen
          }}
        />

        <Stack.Screen
          name="SeriesOverview"
          component={SeriesOverview}
          options={{
            headerShown: false, // Show header for Details screen
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
