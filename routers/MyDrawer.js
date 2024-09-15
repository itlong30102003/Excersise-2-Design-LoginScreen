import { createDrawerNavigator } from "@react-navigation/drawer"
import LoginScreen from "../component/LoginScreen"
import HomeScreen from "../component/HomeScreen"
import CreateNewAccount from "../component/CreateNewAccount"
import ForgotPassword from "../component/ForgotPassword"

const Drawer = createDrawerNavigator()

const MyDrawer = () =>{
    return (
        <Drawer.Navigator
            initialRouteName="Login"
            >
            <Drawer.Screen name="Login" component={LoginScreen}/>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="CreateNewAccount" component={CreateNewAccount}/>
            <Drawer.Screen name="ForgotPassword" component={ForgotPassword}/>
        </Drawer.Navigator>
    )
}
export default MyDrawer