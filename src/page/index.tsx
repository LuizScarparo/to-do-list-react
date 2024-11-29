import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import { styles } from "./styles";

import { SessionsLegend } from "../components/session-legend";
import { Tasks } from "../components/tasks";

import AntDesign from '@expo/vector-icons/AntDesign';

export function Home() {
    const [tasks, setTasks] = useState<string[]>([])
    const [taskName, setTaskName] = useState("")

    function handleState(value: string) {
        setTaskName(value)
    }

    function handleAddTask() {
        setTasks(prevState => [...prevState, taskName])
    }

    return (
        <View>
            <View style={styles.container}>
                <Text>to</Text>
                <Text>do</Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    onChangeText={handleState}
                    value={tasks}
                />
                <TouchableOpacity onPress={handleAddTask}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <SessionsLegend text='Criadas' value="1" />
                <SessionsLegend text='Concluídas' value="2" />
            </View>
            <View>
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <Tasks
                            key={item}
                            taskName={item}
                        />
                    )}
                />
            </View>
        </View>
    )
}