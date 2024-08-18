import { View, Text, Image, StyleSheet, Switch } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"; "expo-checkbox"
import { Color } from "../../constant/color";




export default function Dashboard() {
    return(
        <View style={styles.container}>
            <Image
                source={require("../../../assets/Union.png")}
                style={styles.image}
            />
            <View>
                <Text style={styles.title}>Savings Account Balance</Text>
                <Text style={styles.amount}>NGN102,238.71</Text>
                <Text style={styles.name}>Adewole Temitope</Text>
            </View>
            <View style={styles.accountDetails}>
                <View style={styles.acctContainer}>
                    <Text style={styles.acctNumber}>2040011238</Text>
                    <FontAwesome name="copy" size={15} color={Color.white}/>
                </View>
                <View style={styles.balanceContainer}>
                    <Text style={styles.hide}>Hide balance</Text>
                    <Checkbox style={styles.checkbox}/>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: hp(22),
        backgroundColor: Color.brandColor,
        borderRadius: 5,
        paddingLeft: wp(6),
        paddingTop: hp(3)
    },
    image: {
        height: hp(22),
        position: "absolute",
        right: wp(-1)
    },
    title: {
        fontSize: 13,
        fontWeight: "400",
        color: Color.white
    },
    amount: {
        fontSize: 25,
        fontWeight: "700",
        color: Color.white,
        marginVertical: hp(2)
    },
    name: {
        fontSize: 13,
        fontWeight: "400",
        color: Color.white,
        marginVertical: hp(2) 
    },
    acctContainer: {
        flexDirection: "row"
    },
    balanceContainer: {
        flexDirection: "row"
    },
    accountDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: wp(5)
    },
    acctNumber: {
        color: Color.white,
        marginRight: wp(2),
        fontSize: 13,
        fontWeight: "400"
    },
    hide: {
        marginRight: wp(2),
        color: Color.white,
        fontSize: 13,
        fontWeight: "400"
    },
    checkbox: {
        borderRadius: 20,
        height: hp(2),
        borderColor: Color.white
    },
})