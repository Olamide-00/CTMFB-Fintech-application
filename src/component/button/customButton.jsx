import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../constant/color";



export default function CustomButton() {
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>Login</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.brandColor,
        height: hp(6),
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
       fontWeight: "600",
       fontSize: 16,
       color: Color.white
    }
})