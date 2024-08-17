import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import { styles } from "./style";
import BackButton from "../../component/button/backButton";
import CustomTextInput from "../../component/customTextInput";
import CustomButton from "../../component/button/customButton";





export default function Login() {
    return(
        <SafeAreaView style={styles.root}>
            <View style={styles.btnContainer}>
                <BackButton/>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Login to your account</Text>
                <Text style={styles.description}>We are glad to have you, kindly enter {"\n"} your login details.</Text>
                <View style={styles.inputContainer}>
                    <CustomTextInput 
                        isNumber={false} 
                        isPassword={false} 
                        label={"Phone Number"} 
                        placeholder={"+234 809 531 6411"}
                    />

                    <CustomTextInput
                         isNumber={true} 
                         isPassword={true} 
                         label={"Password"} 
                         placeholder={"******"}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <CustomButton label={"Login"} onPress={() => {}}/>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.dontHaveAcct}>Don’t have an account? Sign up</Text>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}