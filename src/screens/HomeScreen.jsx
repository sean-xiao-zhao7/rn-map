import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text } from "react-native";

const HomeScreen = () => {
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
                backgroundColor: "white",
            }}
        >
            <Text>Tracks App</Text>
        </View>
    );
};

export default HomeScreen;
