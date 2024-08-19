import { View, Text, Image, StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";




export default function HistoryItem() {
    return(
        <View style={styles.container}>
           <View style={styles.imageContainer}>
            <View style={styles.imageBg}>
                <Image
                    source={require("../../../assets/send.png")}
                    style={styles.image}
                />
            </View>
                <View>
                    <Text style={styles.name}>Grace Ameh</Text>
                    <Text style={styles.date}>15 Oct 2022, 10:00PM </Text>
                </View>
           </View>
           <View>
                <Text style={styles.amount}>-10,000</Text>
                <Text style={styles.balance}>NGN101,203.94</Text>
           </View>
        </View>
    )
}


const styles = StyleSheet.create({
    name: {
        fontSize: 16,
        fontWeight: "400",
        color: "#333333",
        marginBottom: hp(1)
    },
    imageContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    date: {},
    amount: {
        fontSize: 14,
        fontWeight: "700",
        color: "#CC0000",
        marginBottom: hp(1)
    },
    balance: {
        fontSize: 12,
        fontWeight: "400",
        color: "#666666"
    },
    image: {
        marginRight: wp(1.5)
    },
    imageBg: {
        backgroundColor: "lightgrey",
        padding: 8,
        borderRadius: 50,
        marginRight: wp(2)
    }
})