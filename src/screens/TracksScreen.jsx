import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { Text, Input, Icon, Button, Dialog } from "@rneui/themed";
import { useContext, useEffect, useState } from "react";

const TracksScreen = () => {
    const insets = useSafeAreaInsets();
    const [loading, setLoading] = useState(false);

    const addNewTrackHandler = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    return (
        <View
            style={{
                flex: 1,
                // justifyContent: "space-between",
                alignItems: "center",

                // Paddings to handle safe area
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
                backgroundColor: "white",
            }}
        >
            <Text h4>Tracks App</Text>
            <Button
                size="lg"
                onPress={addNewTrackHandler}
                loading={loading}
                style={{ marginTop: 15 }}
            >
                Add new track
            </Button>
        </View>
    );
};

export default TracksScreen;
