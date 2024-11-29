import { Text, View } from "react-native";
import { styles } from "./styles";

import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

type Tasks = {
    key: string
    taskName: string
}

export function Tasks({ taskName }: Tasks) {
    return (
        <View style={styles.container}>
            <AntDesign name="pluscircle" size={24} color="black" />
            <Text>{taskName}</Text>
            <Ionicons name="trash-bin" size={24} color="black" />
        </View>
    )
}