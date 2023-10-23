import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, TouchableOpacity } from "react-native";
import { Text, Input, Icon, Button, Dialog } from "@rneui/themed";
import { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { Context as AuthContext } from "../context/AuthContext";

const AuthScreen = ({ navigation }) => {
    const insets = useSafeAreaInsets();

    // states
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [dialogVisible, setDialogVisible] = useState(false);

    // context
    const { loginAction, clearErrorAction, state } = useContext(AuthContext);

    useEffect(() => {
        if (state.authStatus) {
            navigation.navigate("AuthedFlow", { screen: "Home" });
        } else if (state.error) {
            setError(state.error);
            setDialogVisible(true);
        }
    }, [state.authStatus, state.error]);

    const onClickHandler = async () => {
        setLoading(true);
        await loginAction({ email, password });
        setLoading(false);
    };

    const closeErrorDialogHandler = async () => {
        await clearErrorAction();
        setDialogVisible(false);
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
            <Dialog
                isVisible={dialogVisible}
                onBackdropPress={closeErrorDialogHandler}
            >
                <Dialog.Title title="Unable to login" />
                <Text>{error}</Text>
            </Dialog>
            <View style={{ marginTop: 150, position: "absolute" }}>
                <Icon
                    name="public"
                    size={50}
                    color="teal"
                    type="material"
                    style={{ marginBottom: 20 }}
                />
                <Text h3>Login to Maps</Text>
            </View>
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
                    onChangeText={setEmail}
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
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    secureTextEntry={true}
                />
                <Button size="lg" onPress={onClickHandler} loading={loading}>
                    Login
                </Button>
                <Button
                    size="lg"
                    onPress={() => navigation.navigate("Register")}
                    loading={loading}
                    style={{ marginTop: 15 }}
                >
                    Register
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
