import { useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


const ForgotPassword=(navigation) =>{
    const [Email, setEmail] = useState("");

    const onPress =()=>{
        Alert.alert(
            "Password Reset",
            "An email has been sent to reset your password.",
            [{ text: "OK" }]  // Nút xác nhận
        );
    }   
    return(
        <View style={myStyle.container}>

            <ImageBackground source={require('../image/BGLogin.png')} resizeMode="cover" style={myStyle.image}>
                
                <View style={myStyle.formLogin}>
                    
                    <View style={{alignItems:'center'}}> 
                        <Text style={{...myStyle.title, fontSize:45}}>Reset your password </Text>
                    </View>
                
                    <TextInput
                        style={myStyle.input}
                        placeholder="Enter Email"
                        placeholderTextColor="#aaa"
                        keyboardType="default"
                        value={Email}
                        onChangeText={setEmail}
                    />
                    
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity style={myStyle.button} onPress={onPress}>
                            <Text style={myStyle.buttonText}>Send Reset Email</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}


export default ForgotPassword;


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
            alignItems:'center'
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