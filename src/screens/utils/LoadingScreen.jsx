import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, LinearProgress, Icon } from "@rneui/themed";

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
            <Icon
                name="public"
                size={50}
                color="teal"
                type="material"
                style={{ marginBottom: 20 }}
            />
            <Button
                containerStyle={
                    {
                        // width: 200,
                    }
                }
                title="Clear Button"
                type="clear"
                loadingStyle={{ color: "rgba(78, 116, 289, 1)" }}
                loadingProps={{
                    size: "large",
                    color: "rgba(111, 202, 186, 1)",
                }}
                loading
            />
            <LinearProgress style={{ marginVertical: 10 }} />
        </View>
    );
};

export default LoadingScreen;
