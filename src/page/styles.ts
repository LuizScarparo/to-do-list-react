import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    page: {
        backgroundColor: "#1E1E1E",
        flex: 1
    },
    bgDark: {
        backgroundColor: "#0D0D0D",
        height: 173,
    },
    alignCenter: {
        flex: 1,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        height: 54,
        top: -25,
        marginLeft: 24,
        marginRight: 24,
        gap: 4
    },
    input: {
        backgroundColor: "#262626",
        borderWidth: 1,
        borderColor: "#0D0D0D",
        borderStyle: "solid",
        borderRadius: 6,
        height: 54,
        color: "white"
    },
    button: {
        height: 54,
        width: 54,
        backgroundColor: "#1E6F9F",
        borderRadius: 6
    },
    plusButton: {
        color: "white",
        lineHeight: 54,
        justifyContent: "center",
        textAlign: "center"
    },
    noListContainer: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center"
    },
    padding24: {
        padding: 24
    },
    marginBottom: {
        marginBottom: 24
    }

})