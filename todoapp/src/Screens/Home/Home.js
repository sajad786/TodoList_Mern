import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Modal, ImageBackground } from 'react-native'
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
    const [isLoading, setisLoading] = useState(false)

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
        setisLoading(true)
        let data = newTodo
        actions.addTodo(data).then(res => {
            if (!!res) {
                getAllTodos()
                setNewTodo('')
                setisLoading(false)
            }
        }).catch(err => {
            console.log(err, "errr")
            setisLoading(false)
        })
    }

    const onUpdateTodo = () => {
        setisLoading(true)
        actions.updateTodo(selectedTodo?._id, text).then(res => {
            console.log(res, "updateTodod")
            if (!!res) {
                setIsEditing(false)
                getAllTodos()
                setisLoading(false)
            }
        }).catch(err => {
            console.log(err)
            setisLoading(false)
        })
    }

    const onDeleteTodo = (id) => {
        setisLoading(true)
        actions.deleteTodo(id).then(res => {
            console.log(res, 'deleteress>>>>')
            if (!!res && res?.status == 200) {
                getAllTodos()
                setisLoading(false)
            }
        }).catch(err => {
            console.log(err)
            setisLoading(false)
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
        <ImageBackground resizeMode='cover' style={{ flex: 1, height: '100%', width: '100%' }} source={{ uri: 'https://png.pngtree.com/background/20210711/original/pngtree-around-the-world-travel-tour-poster-picture-image_1081770.jpg' }}>
            <ScrollView style={styles.container} >
                <Text style={styles.heading} >Todo App </Text>
                <View style={{ width: '100%', marginBottom: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                    <TextInput
                        style={{ width: '70%', padding: 5, borderBottomWidth: 1, borderBottomColor: '#05445E', color: '#189AB4', fontSize: 16 }}
                        placeholder='add new todo'
                        value={newTodo}
                        onChangeText={(text) => setNewTodo(text)}
                    />
                    <TouchableOpacity onPress={addTodo} style={{ width: '30%', alignItems: 'center' }} >
                        <Text style={{ color: 'white', backgroundColor: '#05445E', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 6, }} >Add</Text>
                    </TouchableOpacity>
                </View>
                {isLoading ? <View style={{  alignItems: 'center', justifyContent: 'center', }}>
                    <Image  source={{uri:'https://png.pngtree.com/png-clipart/20220102/original/pngtree-cartoon-snail-loading-gif-dynamic-diagram-png-image_6992584.png'}} style={{height:200,width:200,resizeMode:'contain'}} />
                </View> :
                    !!todos?.length && todos.map((item, index) => {
                        return (
                            <View key={index.toString()} style={styles.todosWrapper} >
                                <View style={{ width: '70%' }} >
                                    <TouchableOpacity onPress={() => ontoggleTodo(item?._id)} >
                                        <Text numberOfLines={2} style={{ ...styles.todosText, textDecorationLine: item?.done == true ? 'line-through' : 'none' }} >{item?.data}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '20%' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                        <TouchableOpacity onPress={() => onEditTodo(item)}>
                                            <Image style={{ ...styles.icon, marginRight: 10 }} source={imagePath.ic_edit} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => onDeleteTodo(item?._id)} >
                                            <Image style={styles.icon} source={imagePath.ic_delete} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }


                <Modal transparent={true} visible={isEditing}  >
                    <View style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.4)', paddingTop: 130, alignItems: 'center'
                    }} >
                        <View style={{
                            padding: 16,
                            height: 200,
                            backgroundColor: 'white',
                            borderRadius: 10,
                            width: '90%'
                        }} >
                            <TextInput
                                multiline={true}
                                placeholder='Enter todo ...'
                                style={{ backgroundColor: 'rgba(218, 223, 225,1)', marginTop: 10, paddingHorizontal: 10, borderRadius: 8 }}
                                value={text}
                                onChangeText={(text) => setText(text)}
                            />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 40 }}>

                                <TouchableOpacity onPress={() => setIsEditing(false)} style={{

                                    width: '40%',
                                    alignSelf: 'center',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    marginBottom: 10,
                                }} >
                                    <Text style={{ color: 'white', textAlign: 'center', backgroundColor: '#05445E', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 6, fontSize: 20, }} >Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={onUpdateTodo} style={{
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
                    </View>
                </Modal>

            </ScrollView>
        </ImageBackground>
    )
}

export default Home;