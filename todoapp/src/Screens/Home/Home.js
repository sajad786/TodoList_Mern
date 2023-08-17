import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import stylesFunc from './styles'
import imagePath from '../../constants/imagePath'
import actions from '../../redux/actions'
import { getAllTodos, toggleTodo } from '../../redux/actions/todos'
import { useSelector } from 'react-redux'
// import { stylesfunc } from './styles'


const Home = () => {
    const styles = stylesFunc()
    const todos = useSelector(state => state?.todos)
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState()
    const [newTodo, setNewTodo] = useState('')
    const [selectedTodo, setSelectedTodo] = useState(null)

    const getAllTodos = () => {
        actions.getAllTodos().then(res => {
            console.log(res, " ressssGetAlltodos")
        }).catch(err => {
            console.log(err, "errrrr")
        })
    }

    useEffect(() => {
        getAllTodos()
    }, [])

    const addTodo = () => {
        let data = newTodo
        actions.addTodo(data).then(res => {
            if (!!res) {
                getAllTodos()
                setNewTodo('')
            }
        }).catch(err => {
            console.log(err, "errr")
        })
    }

    const onUpdateTodo = () => {
        actions.updateTodo(selectedTodo?._id, text).then(res => {
            console.log(res ,"updateTodod")
            if (!!res) {
                setIsEditing(false)
                getAllTodos()
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const onDeleteTodo = (id) => {
        actions.deleteTodo(id).then(res => {
            console.log(res, 'deleteress>>>>')
            if (!!res && res?.status == 200) {
                getAllTodos()
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const ontoggleTodo = (id) => {
        console.log(id, "tgogglee")
        actions.toggleTodo(id).then(res => {
            console.log(res, "ressTogglee")
            if (!!res && res?.status == 200) {
                getAllTodos()
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const onEditTodo = (item) => {
        setSelectedTodo(item)
        setText(item?.data)
        setIsEditing(true)
    }

    return (
        <ScrollView style={styles.container} >
            <Text style={styles.heading} >Todo App </Text>
            <View style={{ width: '100%', marginBottom: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                <TextInput
                    style={{ width: '70%', padding: 5, borderBottomWidth: 1, borderBottomColor: '#05445E' }}
                    placeholder='add new todo'
                    value={newTodo}
                    onChangeText={(text) => setNewTodo(text)}
                />
                <TouchableOpacity onPress={addTodo} style={{ width: '30%', alignItems: 'center' }} >
                    <Text style={{ color: 'white', backgroundColor: '#05445E', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 6, }} >Add</Text>
                </TouchableOpacity>
            </View>

            {!!todos?.length && todos.map((item, index) => {
                return (
                    <View key={index.toString()} style={styles.todosWrapper} >
                        <View style={{ width: '70%', }} >
                            <TouchableOpacity onPress={() => ontoggleTodo(item?._id)} >
                                <Text numberOfLines={2} style={{ ...styles.todosText, textDecorationLine: item?.done == true ? 'line-through' : 'none' }} >{item?.data}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '20%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <TouchableOpacity onPress={ () => onEditTodo(item) }>
                                    <Image style={{ ...styles.icon, marginRight: 10 }} source={imagePath.ic_edit} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => onDeleteTodo(item?._id)} >
                                    <Image style={styles.icon} source={imagePath.ic_delete} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )
            })}

            <Modal transparent={true} visible={isEditing} >
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }} >
                    <View style={{
                        padding: 16,
                        backgroundColor: 'white',
                        height: 200,
                        borderRadius: 10,
                        width: '90%'
                    }} >
                        <TextInput
                            multiline={true}
                            placeholder='Enter todo ...'
                            value={text}
                            onChangeText={(text) => setText(text)}
                        />

                        <TouchableOpacity onPress={onUpdateTodo} style={{
                            flex: 1,
                            width: '40%',
                            alignSelf: 'center',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            marginBottom: 10,
                        }} >
                            <Text style={{ color: 'white', textAlign: 'center', backgroundColor: '#05445E', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 6, fontSize: 20, }} >Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </ScrollView>
    )
}

export default Home;