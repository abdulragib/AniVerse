import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import bgLogin from "../../assets/bgLogin.png";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation<any>(); // Get the navigation object
  const handleLogin = () => {
    // Add your login logic here (e.g., Google sign-in)
    // Once login is successful, navigate to the Main screen
    navigation.navigate("Main");
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Background Section */}
      <View style={styles.background}>
        <Image
          source={bgLogin} // Replace with your image
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.8)"]}
          style={styles.overlay}
        />
      </View>

      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>
          Ani<Text style={styles.logoHighlight}>Verse</Text>
        </Text>
        <Text style={styles.subtitle}>Listen to what you love</Text>
      </View>

      {/* Login Button */}
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <FontAwesome
          name="google"
          size={20}
          color="white"
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Login with google</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>
        By continuing you will accept our T&C and Privacy Policy
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  logoHighlight: {
    color: "#F0505C",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginTop: 8,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0505C",
    paddingVertical: 15,
    borderRadius: 8,
    marginHorizontal: 40,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 12,
    marginBottom: 20,
  },
});
