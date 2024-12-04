import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

type SessionsLegendProps = {
    text: string,
    value: number,
    color: string
}

export function SessionsLegend({ text, value, color }: SessionsLegendProps) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, { color }]}>{text}</Text>
            <View style={styles.valueContainer}>
                <Text style={styles.valueText}>{value}</Text>
            </View>
        </View>
    )
}