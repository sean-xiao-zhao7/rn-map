import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { Text } from "@rneui/themed";

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
            <Text h2>Login</Text>
        </View>
    );
};

export default AuthScreen;
