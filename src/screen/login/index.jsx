import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, Alert, TouchableOpacity } from "react-native";
import { styles } from "./style";
import BackButton from "../../component/button/backButton";
import CustomTextInput from "../../component/customTextInput";
import CustomButton from "../../component/button/customButton";
import { useNavigation } from "@react-navigation/native";
import * as LocalAuthentication from 'expo-local-authentication';  // Import expo-local-authentication

export default function Login() {
    const navigation = useNavigation();

    // State for form inputs and errors
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ phoneNumber: "", password: "" });

    // Validation function
    const validateForm = () => {
        let isValid = true;
        let newErrors = { phoneNumber: "", password: "" };

        // Phone number validation (basic example, you can improve)
        if (!phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone number is required.";
            isValid = false;
        } else if (phoneNumber.length < 10) {
            newErrors.phoneNumber = "Phone number must be at least 10 digits.";
            isValid = false;
        }

        // Password validation
        if (!password.trim()) {
            newErrors.password = "Password is required.";
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleLogin = () => {
        if (validateForm()) {
            // If valid, navigate to the next screen
            navigation.navigate("Password");
        }
    };

    // Biometric Authentication
    const handleBiometricAuth = async () => {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        if (!hasHardware) {
            Alert.alert("Error", "Your device does not support biometric authentication.");
            return;
        }

        const isEnrolled = await LocalAuthentication.isEnrolledAsync();
        if (!isEnrolled) {
            Alert.alert("Error", "No biometric authentication is set up on this device.");
            return;
        }

        const authResult = await LocalAuthentication.authenticateAsync({
            promptMessage: "Authenticate with FaceID or Fingerprint",
            fallbackLabel: "Use Passcode",
            disableDeviceFallback: false, // Fallback to passcode if biometrics fail
        });

        if (authResult.success) {
            Alert.alert("Success", "Authentication successful!");
            // Navigate or perform action after authentication success
            navigation.navigate("Password");
        } else {
            Alert.alert("Error", "Authentication failed. Please try again.");
        }
    };

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.btnContainer}>
                <BackButton onPress={() => navigation.canGoBack()} />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Login to your account</Text>
                <Text style={styles.description}>We are glad to have you, kindly enter {"\n"} your login details.</Text>

                <View style={styles.inputContainer}>
                    <CustomTextInput 
                        isNumber={true} 
                        isPassword={false} 
                        label={"Phone Number"} 
                        placeholder={"+234 809 531 6411"}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                    {errors.phoneNumber ? <Text style={styles.errorText}>{errors.phoneNumber}</Text> : null}

                    <CustomTextInput
                        isNumber={true} 
                        isPassword={true} 
                        label={"Password"} 
                        placeholder={"******"}
                        value={password}
                        onChangeText={setPassword}
                    />
                    {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
                </View>

                <View style={styles.btnContainer}>
                    <CustomButton title={"Login"} onPress={handleLogin} />
                </View>

                <View style={styles.footer}>
                    <Text style={styles.dontHaveAcct}>Don’t have an account? Sign up</Text>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>

                    {/* TouchableOpacity added to trigger biometric auth on image press */}
                    <TouchableOpacity onPress={handleBiometricAuth}>
                        <Image
                            source={require("../../../assets/thumb.png")}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    
                    <Text style={styles.version}>v1.1.1</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
