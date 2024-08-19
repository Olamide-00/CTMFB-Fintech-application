import { TouchableOpacity, Text, StyleSheet} from "react-native";
import { Color } from "../../constant/color";
import { useNavigation } from "@react-navigation/native";



export default function BackButton({ onPress }) {

    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>Cancel</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 90,
        height: 35,
        borderWidth: 0.5,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
        borderColor: Color.brandColor
    },
    title: {
        fontSize: 12,
        fontWeight: "700",
        color: Color.brandColor
    }
})