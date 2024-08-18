import { SafeAreaView, View, Text, Image } from "react-native";
import BackButton from "../../component/button/backButton";
import { styles } from "./style";
import CustomTextInput from "../../component/customTextInput";
import CustomButton from "../../component/button/customButton";





export default function Password() {

    const Validation = () => {
        const error = "";
    };
    
    return(
        <SafeAreaView style={styles.root}>
            <View style={styles.btnContainer}>
                <BackButton/>
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
                    />
            <View style={styles.buttonContainer}>
                <CustomButton title={"Login"} />
            </View>
            <Image
                source={require("../../../assets/thumb.png")}
                style={styles.avatar}
            />
            </View>
        </SafeAreaView>
    )
}