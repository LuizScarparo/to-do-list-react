import { StyleSheet } from "react-native";
import { Inter_400Regular, useFonts } from "@expo-google-fonts/inter";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
        marginLeft: 24,
        marginRight: 24,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 8,
        borderColor: "#333333",
        borderWidth: 1,
        borderStyle: "solid",
    },
    bgColor: {
        backgroundColor: "#262626"
    },
    text: {
        fontFamily: "Inter_400Regular",
        color: "white",
        fontSize: 14,
        flex: 1,
        flexWrap: "wrap"
    }
})
