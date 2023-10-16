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
            <Text>Auth Screen</Text>
        </View>
    );
};

export default AuthScreen;
