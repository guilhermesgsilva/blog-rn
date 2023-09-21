import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { EvilIcons } from "@expo/vector-icons";

import { Context as BlogContext } from "../context/BlogContext";

const DetailScreen = ({ navigation }) => {
  const { id } = navigation.state.params;
  const { state } = useContext(BlogContext);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

DetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons style={styles.pencilIcon} name="pencil" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  pencilIcon: {
    fontSize: 32,
    marginRight: 15,
  },
});

export default DetailScreen;
