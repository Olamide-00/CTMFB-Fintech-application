import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../constant/color";




export default function NewUserItem({ title, isDone, icon}) {
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.titleContainer}>
               <Image
                source={icon}
               />
                <Text style={styles.title}>{title}</Text>
            </View>
            {
                isDone && 
            <View>
                <Ionicons name="checkmark" color={Color.brandColor} size={20}/>
            </View>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 0.5,
        paddingHorizontal: wp(4),
        paddingVertical: hp(3),
        borderColor: "#666666",
        borderRadius: 8,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontSize: 14,
        fontWeight: "400",
        color: "#666666",
        marginLeft: wp(2)
    }
})