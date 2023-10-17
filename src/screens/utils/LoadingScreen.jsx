import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, LinearProgress } from "@rneui/themed";

const LoadingScreen = () => {
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
            <LinearProgress style={{ marginVertical: 10 }} />
            <Text h3>Loading...</Text>
            <LinearProgress style={{ marginVertical: 10 }} />
        </View>
    );
};

export default LoadingScreen;
