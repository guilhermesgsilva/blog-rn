import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import IndexScreen from "./src/screens/IndexScreen";
import DetailScreen from "./src/screens/DetailScreen";
import CreateScreen from "./src/screens/CreateScreen";

import { Provider as BlogProvider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Detail: DetailScreen,
    Create: CreateScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
