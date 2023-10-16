import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

// navigators

// screens
import LoadingScreen from "./src/screens/utils/LoadingScreen";
import HomeScreen from "./src/screens/HomeScreen";
import TracksScreen from "./src/screens/TracksScreen";
import AuthScreen from "./src/screens/AuthScreen";
import RegisterScreen from "./src/screens/RegisterScreen";

// options
import defaultOptions from "./src/navigation/options/defaultOptions";

const rootStack = createStackNavigator();

export default function App() {
    const [loading, setLoading] = useState(true);
    const [authStatus, setAuthStatus] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
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
                <rootStack.Navigator screenOptions={defaultOptions}>
                    {authStatus !== false ? (
                        <>
                            <rootStack.Screen
                                name="Home"
                                component={HomeScreen}
                            />
                            <rootStack.Screen
                                name="Tracks"
                                component={TracksScreen}
                            />
                        </>
                    ) : (
                        <>
                            <rootStack.Screen
                                name="Auth"
                                component={AuthScreen}
                            />
                            <rootStack.Screen
                                name="Register"
                                component={RegisterScreen}
                            />
                        </>
                    )}
                </rootStack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
