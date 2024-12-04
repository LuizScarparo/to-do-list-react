import { Text, View, Switch } from "react-native";
import { styles } from "./styles";

import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";

type Tasks = {
    key: string
    taskName: string
    checked: boolean
    item: string
    onToggleCheck: () => void
    onRemove: (item: string) => void
}

export function Tasks({ taskName, item, onRemove, checked, onToggleCheck }: Tasks) {
    return (
        <View style={[styles.container, styles.bgColor]}>
            <Switch 
                value={checked} 
                onValueChange={onToggleCheck}
                trackColor={{
                    false: "#4EA8DE",
                    true: "#5E60CE"
                }}
                thumbColor={checked ? "#363766" : "#33749c"}/>
            <Text style={[styles.text, checked && { textDecorationLine: 'line-through', color: 'grey' }]}>{taskName}</Text>
            <Ionicons name="trash-bin" size={24} color="grey" onPress={() => onRemove(item)}/>
        </View>
    )
}