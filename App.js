import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./src/navigation/navigators/RootNavigator";

export default function App() {
    return <NavigationContainer>{RootNavigator}</NavigationContainer>;
}
