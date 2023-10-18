import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { Text, Input, Icon, Button } from "@rneui/themed";
import { useState } from "react";
import { StyleSheet } from "react-native";

const AuthScreen = () => {
    const insets = useSafeAreaInsets();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                alignItems: "center",

                // Paddings to handle safe area
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}
        >
            <Text h3 style={{ marginTop: 150, position: "absolute" }}>
                Login to Maps
            </Text>
            <View style={styles.centerSection}>
                <Input
                    placeholder="Email"
                    leftIcon={
                        <Icon
                            name="user"
                            size={24}
                            color="black"
                            type="evilicon"
                        />
                    }
                    value={email}
                    onTextInput={setEmail}
                    autoCapitalize="none"
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
                    value={password}
                    onTextInput={setPassword}
                    autoCapitalize="none"
                    secureTextEntry={true}
                />
                <Button size="lg" onPress={onClickHandler} loading={loading}>
                    Login
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    centerSection: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
    },
});

export default AuthScreen;
