import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeHeader:{
    backgroundColor: "#000",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
    borderRadius: 8,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    padding: 6,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
