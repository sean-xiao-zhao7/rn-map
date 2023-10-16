import { createStackNavigator } from "@react-navigation/stack";

// screens
import HomeScreen from "../../screens/HomeScreen";

// options
import defaultOptions from "../options/defaultOptions";

const rootStack = createStackNavigator();

export default rootNavigator = (
    <rootStack.Navigator screenOptions={defaultOptions}>
        <rootStack.Screen name="Home" component={HomeScreen} />
    </rootStack.Navigator>
);
