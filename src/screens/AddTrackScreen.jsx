import { Text } from "@rneui/themed";
import { ScrollView, StyleSheet, View } from "react-native";

const TracksScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={style.scrollView}>
            <Text h4>Add a new track</Text>
            <View></View>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    scrollView: {
        padding: 15,
    },
});

export default TracksScreen;
