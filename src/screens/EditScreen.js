import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import BlogPostForm from "../components/BlogPostForm";

import { Context as BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { id } = navigation.state.params;

  const { state } = useContext(BlogContext);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        console.log(title, content);
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
