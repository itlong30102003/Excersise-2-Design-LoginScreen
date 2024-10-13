import "react-native-gesture-handler"
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./component/HomeScreen";
import LoginScreen from "./component/LoginScreen";
import MyStack from "./component/MyStack";
import MyDrawer from "./routers/MyDrawer";

const App =()=>{
  return(
    <NavigationContainer>
      <PaperProvider>
        {/* <MyDrawer/> */}
          <MyStack/>
        {/* <LoginScreen navigation={undefined}/> */}
        {/* <CreateNewAccount/> */}
        {/* <ForgotPassword/> */}
        {/* <HomeScreen/> */}
      </PaperProvider>
    </NavigationContainer>      
  )
}

export default App;