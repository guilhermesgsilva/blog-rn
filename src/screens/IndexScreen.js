import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import { Feather } from "@expo/vector-icons";

import { Context as BlogContext } from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      {/* <Text>Index Screen</Text> */}
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.blogItem}>
              <Text style={styles.blogTitle}>{item.title}</Text>
              <Feather style={styles.deleteIcon} name="trash" />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  blogItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "grey",
  },
  blogTitle: {
    fontSize: 18,
  },
  deleteIcon: {
    fontSize: 24,
  },
});

export default IndexScreen;
