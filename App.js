import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";

const rootStack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <rootStack.Navigator>
                <rootStack.Screen name="Home" component={HomeScreen} />
            </rootStack.Navigator>
        </NavigationContainer>
    );
}
