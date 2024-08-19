import { View, Text, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../constant/color";
import HistoryItem from "../historyItem";



export default function TransactionHistory() {
    return(
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Recent Transactions</Text>
                <Text style={styles.viewAll}>View all</Text>
            </View>
            <View>
                <HistoryItem/>
                <HistoryItem/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {

    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: hp(2)
    },
    title: {
        fontSize: 20,
        fontWeight: "700"
    },
    viewAll: {
        fontSize: 14,
        fontWeight: "400",
        color: Color.brandColor
    }
})