import { View, Text, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../constant/color";
import NewUserItem from "./newUserItem";
import correct from "../../../assets/correct.png";
import limit from "../../../assets/limit.png";
import print from "../../../assets/print.png";




export default function NewUser() {
    return(
        <View style={styles.root}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Things to do</Text>
                <Text style={styles.desc}>Done 1 of 3</Text>
            </View>
            <View style={styles.itemContainer}>
                <NewUserItem title={"Upgarde KYC level"} isDone={true} icon={correct}/>
                <NewUserItem  title={"Set Account Limit"} isDone={false} icon={limit}/>
                <NewUserItem  title={"Enable your Fingerprint"} isDone={false} icon={print}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "700"
    },
    desc: {
        fontSize: 14,
        fontWeight: "400",
        color: Color.brandColor
    },
    itemContainer: {
        gap: hp(2),
        marginTop: hp(2)
    },
    root: {
        marginBottom: hp(20)
    }
})