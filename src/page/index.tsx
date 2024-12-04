import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";
import { styles } from "./styles";

import { SessionsLegend } from "../components/session-legend";
import { Tasks } from "../components/tasks";

import AntDesign from '@expo/vector-icons/AntDesign';

type Task = {
    key: string
    taskName: string
    checked: boolean
}

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [taskName, setTaskName] = useState("")
    const completedTasks = tasks.filter(task => task.checked).length
    
    function handleAddTask() {
        if(taskName === "") {
            Alert.alert("Aviso", "Você não pode adicionar uma tarefa vazia!")
        } else {
            setTasks(prevState => [...prevState, {key: Date.now().toString(), taskName, checked: false}])
            setTaskName("")
        }
    }

    function handleState(value: string) {
        setTaskName(value)
    }

    function handleRemoveRemoveTask(item: string) {
        Alert.alert("Remover", `Remover esta tarefa?`, [
            {
                text: "Sim",
                onPress: () => setTasks(prevState => prevState.filter(task => task.taskName !== item))

            },
            {
                text: "Não",
                style: "cancel"
            }
        ])
        
    }

    const toggleCheck = (key: string) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.key === key ? {...task, checked: !task.checked } : task
            )
        )
    }

    return (
        <View style={styles.page}>
            <View style={[styles.container, styles.bgDark]}>
                <View style={[styles.alignCenter, styles.container]}>
                    <Text>T</Text>
                    <Text style={{ fontSize: 44, color: "#4EA8DE", fontWeight: "bold" }}>to</Text>
                    <Text style={{ fontSize: 44, color: "#5E60CE", fontWeight: "bold" }}>do</Text>
                </View>
            </View>
            <View style={[styles.container, styles.inputContainer]}>
                <TextInput
                    style={[styles.alignCenter, styles.input]}
                    onChangeText={handleState}
                    value={taskName}
                    
                />
                <TouchableOpacity onPress={handleAddTask} style={styles.button}>
                    <AntDesign name="pluscircleo" size={16} color="white" style={styles.plusButton} />
                </TouchableOpacity>
            </View>
            <View style={[styles.container, styles.marginBottom]}>
                <SessionsLegend color="#4EA8DE" text='Criadas' value={tasks.length} />
                <SessionsLegend color="#5E60CE" text='Concluídas' value={completedTasks} />
            </View>
            <View>
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                        <Tasks
                            key={item.key}
                            taskName={item.taskName}
                            checked={item.checked}
                            item={item.key}
                            onRemove={() => handleRemoveRemoveTask(item.taskName)}
                            onToggleCheck={() => toggleCheck(item.key)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={[styles.noListContainer, styles.padding24]}>
                            <Text style={[{color: "#808080", fontWeight: 500}, styles.noListContainer]}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={[{color: "#808080", fontWeight: 500}, styles.noListContainer]}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}