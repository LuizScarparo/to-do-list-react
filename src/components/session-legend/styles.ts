import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        gap: 14
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        alignItems: "center",
    },
    valueContainer: {
        backgroundColor: "#808080",
        height: 26,
        width: 32,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    valueText: {
        fontWeight: 'bold',
        color: "white",
        textAlign: "center",
    },

})