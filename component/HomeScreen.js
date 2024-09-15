
import { useLayoutEffect, useState } from "react";
import { Image, View } from "react-native"
import { Avatar, Button, Text, Title } from "react-native-paper";


const HomeScreen =({navigation,route})=>{
    const {userName} = route.params
    console.log(userName)
    const Avatar =()=>{
        return(
            <Image source={require("../image/logo.png")}
                style={{width:50, height:50}}
            />
        )
    }
    const [count,setCount] = useState(0)
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:"Hello " + userName,
            headerLeft:(props)=> <Avatar/>,
            headerRight:(props)=> <Button {...props } mode='contained' onPress={()=> setCount(count+1)}> Update Account</Button>
        })
    }, [navigation, count])// khi ma count change thi no se render lai man hinh 
    return(
        <View style={{flex:1}}>
            <Text>Count {count}</Text>
        </View>
    )

}

export default HomeScreen;