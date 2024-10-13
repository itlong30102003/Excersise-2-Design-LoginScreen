import { createStackNavigator } from "@react-navigation/stack";
import Login from "./LoginScreen";
import CreateNewAccount from "./CreateNewAccount";
import ForgotPassword from "./ForgotPassword";
import HomeScreen from "./HomeScreen";
import { Text } from "react-native-paper";
import { View } from "react-native";

const Stack = createStackNavigator()
const renderHeader =()=>{
    return(
        <View style={{
            height:50,
            backgroundColor:'aqua',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text>Hello</Text>
        </View>
    )
}
const MyStack =() =>{
    return(
        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{headerShown: true}}>

            <Stack.Screen name = "Login" component={Login}/>
            <Stack.Screen name = "CreateAcc" component={CreateNewAccount}/>
            <Stack.Screen name = "ForgotPass" component={ForgotPassword}/>
            <Stack.Screen name = "Home" component={HomeScreen}
            options={{
                header:renderHeader
            }}
            />
        </Stack.Navigator>
    )
}

export default MyStack;