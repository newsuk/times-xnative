import { AppRegistry, Text } from "react-native";
import AuthorProfileView from "./pages/author-profile";
import ArticleView from "./pages/article";

AppRegistry.registerComponent("AuthorProfile", () => AuthorProfileView);
AppRegistry.registerComponent("Article", () => ArticleView);
