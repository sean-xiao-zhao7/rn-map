import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { Text, Input, Icon, Button } from "@rneui/themed";
import { useState } from "react";

const AuthScreen = () => {
    const insets = useSafeAreaInsets();
    const [loading, setLoading] = useState(false);

    const onClickHandler = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

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
            <Text h3>Login</Text>
            <Input
                placeholder="Email"
                leftIcon={
                    <Icon name="user" size={24} color="black" type="evilicon" />
                }
            />
            <Input
                placeholder="Password"
                leftIcon={
                    <Icon
                        name="unlock"
                        size={24}
                        color="black"
                        type="evilicon"
                    />
                }
            />
            <Button size="lg" onPress={onClickHandler} loading={loading}>
                Login
            </Button>
        </View>
    );
};

export default AuthScreen;
