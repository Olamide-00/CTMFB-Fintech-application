import { View, Text, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../constant/color";




export default function Dashboard() {
    return(
        <View style={styles.container}>
            <Image
                source={require("../../../assets/Union.png")}
                style={styles.image}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: hp(22),
        backgroundColor: Color.brandColor,
        borderRadius: 5
    },
    image: {
        height: hp(22),
        position: "absolute",
        right: wp(-1)
    }
})