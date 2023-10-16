import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text } from "react-native";

const AuthScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center",

                // Paddings to handle safe area
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}
        >
            <Text>
                Similar to options, you can also pass a function to
                screenOptions. The function will receive the navigation prop and
                the route prop for each screen. This can be useful if you want
                to configure options for all the screens in one place based on
                the route:Similar to options, you can also pass a function to
                screenOptions. The function will receive the navigation prop and
                the route prop for each screen. This can be useful if you want
                to configure options for all the screens in one place based on
                the route:Similar to options, you can also pass a function to
                screenOptions. The function will receive the navigation prop and
                the route prop for each screen. This can be useful if you want
                to configure options for all the screens in one place based on
                the route:Similar to options, you can also pass a function to
                screenOptions. The function will receive the navigation prop and
                the route prop for each screen. This can be useful if you want
                to configure options for all the screens in one place based on
                the route:Similar to options, you can also pass a function to
                screenOptions. The function will receive the navigation prop and
                the route prop for each screen. This can be useful if you want
                to configure options for all the screens in one place based on
                the route:Similar to options, you can also pass a function to
                screenOptions. The function will receive the navigation prop and
                the route prop for each screen. This can be useful if you want
                to configure options for all the screens in one place based on
                the route:Similar to options, you can also pass a function to
                screenOptions. The function will receive the navigation prop and
                the route prop for each screen. This can be useful if you want
                to configure options for all the screens in one place based on
                the route:
            </Text>
        </View>
    );
};

export default AuthScreen;
