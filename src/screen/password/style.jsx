import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../constant/color";



export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff"
    },
    btnContainer: {
        marginTop: hp(5),
        marginHorizontal: wp(3)
    },
    container: {
        marginHorizontal: wp(3)
    },
    image: {
        alignSelf: "center",
        marginTop: hp(12),
    },
    name: {
        fontSize: 24,
        fontWeight: "600",
        color: Color.brandColor,
        marginTop: hp(5)
    },
    details: {
        fontWeight: "500",
        fontSize: 14,
        marginTop: hp(3)
    },
    nameContainer: {
        marginBottom: hp(7)
    },
    buttonContainer: {
        marginVertical: hp(5)
    },
    avatar: {
        alignSelf: "center"
    },
    errorText: {
        color: "red"
    }
})