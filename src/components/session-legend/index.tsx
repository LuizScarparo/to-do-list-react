import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

type SessionsLegendProps = {
    text: string,
    value: string

}

export function SessionsLegend({ text, value }: SessionsLegendProps) {
    return (
        <View style={styles.container}>
            <Text>{text}</Text>
            <TextInput value={value} />
        </View>
    )
}