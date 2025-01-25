import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const coinPacks = [
  { id: "1", bonus: "150% BONUS", coins: 80, freeCoins: 120, price: "₹39" },
  { id: "2", bonus: "200% BONUS", coins: 160, freeCoins: 320, price: "₹79" },
  { id: "3", bonus: "200% BONUS", coins: 240, freeCoins: 480, price: "₹119" },
  { id: "4", bonus: "200% BONUS", coins: 400, freeCoins: 800, price: "₹199" },
  { id: "5", bonus: "200% BONUS", coins: 500, freeCoins: 1000, price: "₹249" },
];

export default function DiamondStore() {
  const navigation = useNavigation<any>();

  const renderItem = ({ item }) => (
    <View style={styles.packContainer}>
      <View style={styles.coinInfo}>
        <Text style={styles.bonusText}>{item.bonus}</Text>
        <Text style={styles.coinText}>
          <Ionicons name="diamond" size={14} color="white" /> {item.coins}{" "}
          <Text style={styles.freeCoinsText}>
            +{item.freeCoins} Free diamond
          </Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.priceButton}>
        <Text style={styles.priceText}>{item.price}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* Header */}
        <LinearGradient
          colors={["#3C3B3F", "#605C3C"]} // Darker gradient colors
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <Text style={styles.balanceText}>DIAMOND BALANCE</Text>
          <View style={styles.balanceContainer}>
            <Ionicons name="diamond" size={20} color="white" />
            <Text
              style={{
                fontSize: 18,
                color: "#fff",
                fontWeight: "bold",
                paddingLeft: 4,
                paddingRight: 9,
              }}
            >
              500
            </Text>
            <FontAwesome5
              onPress={() => navigation.navigate("PurchaseHistory")}
              name="arrow-right"
              size={16}
              color="#fff"
            />
          </View>
        </LinearGradient>

        {/* Coin Packs */}
        <Text style={styles.sectionTitle}>COIN PACKS</Text>
        <FlatList
          data={coinPacks}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />

        {/* About Coins */}
        <View style={styles.aboutSection}>
          <Text style={styles.sectionTitle}>ABOUT COINS</Text>
          <Text style={styles.aboutText}>
            • Your coins never expire — they are yours for life
          </Text>
          <Text style={styles.aboutText}>
            • Use your coins to unlock episodes of any series
          </Text>
          <Text style={styles.aboutText}>
            • Buying coins is safe and trusted by millions of users
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    marginVertical: 20,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  balanceCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  balanceTextContainer: {
    alignItems: "center",
  },
  balanceText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  balanceAmount: {
    color: "#FFD700",
    fontSize: 20,
    fontWeight: "bold",
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  packContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  coinInfo: {
    flex: 1,
  },
  bonusText: {
    color: "#8e8e8e",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
  coinText: {
    color: "#fff",
    fontSize: 16,
  },
  freeCoinsText: {
    color: "#FFD700",
    fontSize: 14,
  },
  priceButton: {
    backgroundColor: "#333",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  priceText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  aboutSection: {
    marginVertical: 20,
  },
  aboutText: {
    color: "#8e8e8e",
    fontSize: 12,
    marginVertical: 2,
  },
});
