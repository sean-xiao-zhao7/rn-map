import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Icon } from "@rneui/themed";

// navigators
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import LoadingScreen from "./src/screens/utils/LoadingScreen";
import HomeScreen from "./src/screens/HomeScreen";
import TracksScreen from "./src/screens/TracksScreen";
import AuthScreen from "./src/screens/AuthScreen";
import RegisterScreen from "./src/screens/RegisterScreen";

// options
import defaultOptions, {
    defaultBottomTabOptions,
} from "./src/navigation/options/defaultOptions";

// context
import { Provider as AuthProvider } from "./src/context/AuthContext";

const rootStack = createStackNavigator();
const TracksStack = createStackNavigator();
const MainBottomTab = createBottomTabNavigator();

const AuthedFlow = () => (
    <MainBottomTab.Navigator screenOptions={defaultBottomTabOptions}>
        <rootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarLabel: "Tracks",
                tabBarIcon: ({ color, size }) => (
                    <Icon
                        name="public"
                        size={30}
                        color={color}
                        type="material"
                        style={{ marginBottom: 20 }}
                    />
                ),
            }}
        />
        <rootStack.Screen
            name="TracksFlow"
            component={TracksFlow}
            options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color, size }) => (
                    <Icon
                        name="account-circle"
                        size={30}
                        color={color}
                        type="material"
                        style={{ marginBottom: 20 }}
                    />
                ),
                ...defaultOptions,
            }}
        />
    </MainBottomTab.Navigator>
);

const TracksFlow = () => {
    <TracksStack.Navigator screenOptions={defaultOptions}>
        <TracksStack.Screen name="TracksList" component={TracksScreen} />
    </TracksStack.Navigator>;
};

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return (
            <SafeAreaProvider>
                <LoadingScreen />
            </SafeAreaProvider>
        );
    }

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <AuthProvider>
                    <rootStack.Navigator screenOptions={defaultOptions}>
                        <rootStack.Screen name="Auth" component={AuthScreen} />
                        <rootStack.Screen
                            name="Register"
                            component={RegisterScreen}
                        />
                        <rootStack.Screen
                            name="AuthedFlow"
                            component={AuthedFlow}
                        />
                    </rootStack.Navigator>
                </AuthProvider>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
