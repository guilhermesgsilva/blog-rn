import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Context as BlogContext } from "../context/BlogContext";

const DetailScreen = ({ navigation }) => {
  const { id } = navigation.state.params;
  const { state } = useContext(BlogContext);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>
        {blogPost.title} - {blogPost.id}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailScreen;
