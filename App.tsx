import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/Home";
import SettingsScreen from "./src/screens/Login";
import DetailsScreen from "./src/screens/Details";
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/Login";
import HomeHeader from "./src/components/HomeHeader";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      // screenOptions={{
      //   headerShown: false, // Hides the header for all screens in Tab Navigator
      // }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          // Set icons for each Tab
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Library") {
            iconName = "book";
          } else if (route.name === "Store") {
            iconName = "shopping-cart";
          } else if (route.name === "Setting") {
            iconName = "cog";
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#108554",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#000", // Set the background color of the bottom tab bar
          borderTopWidth: 0, // Optional: remove the border at the top of the tab bar
          elevation: 5, // Optional: add shadow/elevation
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <HomeHeader />, // Add custom header
        }}
      />
      <Tab.Screen name="Library" component={LoginScreen} />
      <Tab.Screen name="Store" component={LoginScreen} />
      <Tab.Screen name="Setting" component={LoginScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false, // Hides the header for the Login screen
          }}
        />
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{
            headerShown: false, // Hides the header for all screens in Tab Navigator
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
