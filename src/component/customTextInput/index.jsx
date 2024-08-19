import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { Color } from "../../constant/color";




export default function CustomTextInput({ label, placeholder, isNumber, isPassword, value, onChangeText }) {

    const [isVisible, setIsVisible] = useState(true);
    const handleVisible = () => {
        setIsVisible(!isVisible)
    };


    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={placeholder}
                    style={styles.input}
                    secureTextEntry={isVisible}
                    keyboardType={isNumber? "numeric" : null}
                    value={value}
                    onChangeText={onChangeText}
                />
                {
                    isPassword && <Ionicons name={isVisible? "eye" : "eye-off"} size={20} onPress={handleVisible} />
                }
                
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        borderWidth: 0.6,
        height: hp(7),
        borderColor: Color.grey,
        borderRadius: 10,
        backgroundColor: "transparent",
        paddingHorizontal: wp(3),
        justifyContent: "center"
    },
    label: {
        fontWeight: 16, 
        fontWeight: "600",
        position: "absolute",
        paddingHorizontal: wp(1),
        // backgroundColor: Color.grey,
        top: -9,
        left: 10,
        backgroundColor: Color.white
    },
    input: {
        fontSize: 16,
        fontWeight: "400",
        width: wp(75)
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})