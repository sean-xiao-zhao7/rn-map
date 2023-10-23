import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { Text } from "@rneui/themed";

const ProfileScreen = () => {
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
            <Text h4>Profile</Text>
        </View>
    );
};

export default ProfileScreen;
