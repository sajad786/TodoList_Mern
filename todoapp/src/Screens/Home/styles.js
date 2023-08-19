
import { StyleSheet } from "react-native"

export default styles = (fontFamily, colors) => {
    return StyleSheet.create({
        container: {
            // width: '100%',
            padding: 16,
        },
        heading: {
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '600',
            color: '#189AB4',
            marginVertical: 10,
            letterSpacing: 2,
        },
        todosWrapper: {
            width:'100%',
            backgroundColor: '#75E6DA',
            padding: 10,
            marginVertical: 5,
            borderRadius:4,
            flexDirection:'row',
            elevation:5,shadowOpacity:0.2,shadowRadius:2,
            justifyContent:'space-between'
        },
        todosText: {
            color: '#000000',
            fontSize: 14,
            textAlign:'left'
        },
        icon:{
            height:25, 
            width:25
        }

    })
}