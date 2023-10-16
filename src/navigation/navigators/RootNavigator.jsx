import { createStackNavigator } from "@react-navigation/stack";

// screens
import HomeScreen from "../../screens/HomeScreen";

const rootStack = createStackNavigator();

export default rootNavigator = (
    <rootStack.Navigator>
        <rootStack.Screen name="Home" component={HomeScreen} />
    </rootStack.Navigator>
);
