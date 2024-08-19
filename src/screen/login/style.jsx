import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../constant/color";

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Color.white
    },
    btnContainer: {
        marginTop: hp(5),
        marginHorizontal: wp(4)
    },
    container: {
        marginHorizontal: wp(4)
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        color: Color.brandColor,
        marginTop: hp(5),
        marginBottom: hp(3)
    },
    description: {
        fontSize: 14,
        fontWeight: "500",
        color: Color.grey
    },
    inputContainer: {
        marginTop: hp(6),
        gap: hp(4.5)
    },
    buttonContainer: {
        marginTop: hp(5)
    },
    footer: {
        marginTop: hp(5),
        alignItems: "center",
        justifyContent: "center"
    },
    dontHaveAcct: {
        fontSize: 14,
        fontWeight: "400",
        color: Color.brandColor
    },
    forgotPassword: {
        fontWeight: "400",
        fontSize: 14,
        color: Color.grey,
        marginTop: hp(3)
    },
    image: {
        marginTop: hp(5)
    },
    version: {
        fontSize: 14,
        fontWeight: "400",
        color: Color.grey,
        marginTop: hp(5)
    },
    errorText: {
        marginTop: hp(-4),
        color: "red"
    }
})