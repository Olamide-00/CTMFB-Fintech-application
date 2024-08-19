import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, Alert, TouchableOpacity } from "react-native";
import BackButton from "../../component/button/backButton";
import { styles } from "./style";
import CustomTextInput from "../../component/customTextInput";
import CustomButton from "../../component/button/customButton";
import { useNavigation } from "@react-navigation/native";
import * as LocalAuthentication from 'expo-local-authentication';

export default function Password() {
    const navigation = useNavigation();

    // State for password input and error
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Validation function
    const validatePassword = () => {
        if (!password.trim()) {
            setError("Password is required.");
            return false;
        } else if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return false;
        }
        setError(""); // Clear error if valid
        return true;
    };

    // Handle form submission
    const handleLogin = () => {
        if (validatePassword()) {
            // Navigate to the next screen if the password is valid
            navigation.navigate("Home-tab"); 
        }
    };

    // Biometric Authentication function
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
            // Perform login or navigate to the next screen
            navigation.navigate("Home-tab");
        } else {
            Alert.alert("Error", "Authentication failed. Please try again.");
        }
    };

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.btnContainer}>
                <BackButton onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.container}>
                <Image
                    source={require("../../../assets/avatar.png")}
                    style={styles.image}
                />
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>Damilare</Text>
                    <Text style={styles.details}>Kindly enter your login details.</Text>
                </View>
                <CustomTextInput
                    isNumber={false}
                    isPassword={true}
                    label={"Password"}
                    placeholder={"*******"}
                    value={password}
                    onChangeText={setPassword}
                />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                <View style={styles.buttonContainer}>
                    <CustomButton title={"Login"} onPress={handleLogin} />
                </View>

                {/* Biometric Authentication Trigger */}
                <TouchableOpacity onPress={handleBiometricAuth}>
                    <Image
                        source={require("../../../assets/thumb.png")}
                        style={styles.avatar} // The image that triggers biometric auth
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
