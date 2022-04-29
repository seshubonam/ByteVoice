import {StyleSheet} from "react-native";

const colorIO = {
    primary: "#2f3136",
    secondary: "#2c2f33",
    accent: "#5865F2",
    white: "#FFFFFF"
}

/**
 * Default Dark App Theme.
 */
export default StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: "row"
    },
    column: {
        flex: 1,
        flexDirection: "column"
    },
    container: {
        flex: 1,
        backgroundColor: colorIO.primary,
        minWidth: "80%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 50,
        color: colorIO.white,
        borderWidth: 0,
        borderRadius: 20,
        backgroundColor: colorIO.secondary,
        paddingLeft: 10,
        marginBottom: 15,
    },
    button: {
        borderWidth: 0,
        borderRadius: 20,
        backgroundColor: colorIO.accent,
        color: colorIO.white,
    },
    light: {
        color: colorIO.white,
        fontSize: 50,
        fontWeight: "400",
        textTransform: "uppercase"
    },
    bold: {
        color: colorIO.white,
        fontSize: 50,
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    login: {
        minWidth: "80%",
        borderRadius: 20,
        height: 50,
        justifyContent: "center",
        padding: 20
    },
    description: {
        color: colorIO.accent,
        textAlign: "center",
        marginBottom: 30,
        marginTop: 30
    },
    form: {
        paddingBottom: 10
    },
    link: {
        color: colorIO.accent,
        paddingLeft: 10
    }
});
