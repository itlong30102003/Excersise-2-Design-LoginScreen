import { useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


const CreateNewAccount=({navigation}) =>{
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [ReEnterPassword, setReEnterPassword] = useState("");

    const onPress =()=>{
        // Alert.alert('Login Info', `User Name: ${userName}\nPassword: ${password}`)
        if(password==ReEnterPassword || userName == "" || password =="" )
            navigation.navigate("Login")
        else
            Alert.alert(
                "Password Mismatch",
                "The passwords you entered do not match. Please try again.",
                [{ text: "OK" }]
            );
        
    }   
    return(
        <View style={myStyle.container}>

            <ImageBackground source={require('../image/BGLogin.png')} resizeMode="cover" style={myStyle.image}>
                
                <View style={myStyle.formLogin}>
                    <View style={{alignItems:'center'}}> 
                        <Text style={{...myStyle.title,alignItems:'center' ,fontSize:45}}>Create a new account</Text>
                    </View>
                
                    <Text style={myStyle.title}>User Name </Text>
                    <TextInput
                        style={myStyle.input}
                        placeholder="User Name"
                        placeholderTextColor="#aaa"
                        keyboardType="default"
                        value={userName}
                        onChangeText={setUserName}
                    />
                    <Text style={myStyle.title}>Password </Text>
                    <TextInput
                        style={myStyle.input}
                        placeholder="Password"
                        placeholderTextColor="#aaa"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />  
                    <Text style={myStyle.title}>Re-enter the Password </Text>
                    <TextInput
                        style={myStyle.input}
                        placeholder="Password"
                        placeholderTextColor="#aaa"
                        secureTextEntry
                        value={ReEnterPassword}
                        onChangeText={setReEnterPassword}
                    />  
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity style={myStyle.button} onPress={onPress}>
                            <Text style={myStyle.buttonText}>SignUp</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}


export default CreateNewAccount;


const myStyle = StyleSheet.create(
    {
        container: {
            flex: 1,
          },
        image: {
            flex: 1,
            justifyContent: 'center',
            alignItems:'center'
          },
        formLogin: {
            backgroundColor: "rgba(217, 221, 232, 0.2)",
            width: '90%',
            height: '50%',
            justifyContent: 'center',
            borderRadius: 20,
            padding: 20,
        },
        title: {
            color: 'white',
            fontSize: 30,
            },
        input: {
            width: '100%',
            height: 50,
            backgroundColor: 'white',
            borderRadius: 10,
            paddingHorizontal: 10,
            marginBottom: 15,
            },
        button: {
            width:'60%',
            height: 45,
            backgroundColor: '#58C4DC',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            },
        buttonText: {
            fontSize:18,
            color:'white'
        }
            
    }
)