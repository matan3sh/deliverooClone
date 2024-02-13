import Colors from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { Link } from "expo-router"
import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}></View>
        <Link href={"/"} asChild>
          <TouchableOpacity style={styles.optionButton}>
            <Ionicons name="options-outline" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    height: 60,
    backgroundColor: "#fff",
  },
  searchSection: {},
  searchField: {},
  optionButton: {},
})

export default SearchBar
