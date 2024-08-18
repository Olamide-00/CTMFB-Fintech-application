import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";




export const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    container: {
        marginHorizontal: wp(3),
        marginTop: hp(5)
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    name: {
        fontWeight: "700",
        fontSize: 16
    },
    greeting: {
        fontSize: 12,
        fontWeight: "400"
    },
    imageContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    nameContainer: {
        marginLeft: wp(2)
    },
    iconContainer: {
        flexDirection: "row",
        gap: wp(3)
    }
})