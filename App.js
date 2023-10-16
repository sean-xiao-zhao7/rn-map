import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";

const rootStack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <rootStack.Navigator>
                <rootStack.Screen name="Home" component={HomeScreen} />
            </rootStack.Navigator>
        </NavigationContainer>
    );
}
