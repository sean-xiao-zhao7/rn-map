import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Icon } from "@rneui/themed";

// navigators
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import LoadingScreen from "./src/screens/utils/LoadingScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import TracksScreen from "./src/screens/TracksScreen";
import AddTrackScreen from "./src/screens/AddTrackScreen";
import AuthScreen from "./src/screens/AuthScreen";
import RegisterScreen from "./src/screens/RegisterScreen";

// options
import defaultOptions, {
    defaultBottomTabOptions,
} from "./src/navigation/options/defaultOptions";
import { authOptions } from "./src/navigation/options/authOptions";

// context
import { Provider as AuthProvider } from "./src/context/AuthContext";

const rootStack = createStackNavigator();
const TracksStack = createStackNavigator();
const MainBottomTab = createBottomTabNavigator();

const TracksFlow = () => (
    <TracksStack.Navigator
        screenOptions={defaultOptions}
        initialRouteName="TracksList"
    >
        <TracksStack.Screen name="TracksList" component={TracksScreen} />
        <TracksStack.Screen
            name="AddTrack"
            component={AddTrackScreen}
            options={{
                presentation: "transparentModal",
                headerShown: true,
                cardOverlayEnabled: true,
                cardStyle: {
                    marginHorizontal: 15,
                    marginTop: 50,
                    backgroundColor: "white",
                },
            }}
        />
    </TracksStack.Navigator>
);

const AuthedFlow = () => (
    <MainBottomTab.Navigator
        screenOptions={defaultBottomTabOptions}
        sceneContainerStyle={{ backgroundColor: "white" }}
    >
        <rootStack.Screen
            name="Tracks"
            component={TracksFlow}
            options={{
                tabBarLabel: "Tracks",
                tabBarIcon: ({ color, size }) => (
                    <Icon
                        name="public"
                        size={40}
                        color={color}
                        type="material"
                        style={{ marginBottom: 20 }}
                    />
                ),
            }}
        />
        <rootStack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color, size }) => (
                    <Icon
                        name="account-circle"
                        size={40}
                        color={color}
                        type="material"
                        style={{ marginBottom: 20 }}
                    />
                ),
            }}
        />
    </MainBottomTab.Navigator>
);

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
                        <rootStack.Screen
                            name="Auth"
                            component={AuthScreen}
                            options={authOptions}
                        />
                        <rootStack.Screen
                            name="Register"
                            component={RegisterScreen}
                            options={authOptions}
                        />
                        <rootStack.Screen
                            name="AuthedFlow"
                            component={AuthedFlow}
                            options={{
                                backgroundColor: "orange",
                            }}
                        />
                    </rootStack.Navigator>
                </AuthProvider>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
