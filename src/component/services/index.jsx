import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../constant/color";
import { Data } from "../../data/services";



export default function Services() {


    const renderItem = ({ item }) => {
        return(
            <TouchableOpacity style={styles.serviceContainer}>
                <View style={[styles.imageBg, {backgroundColor: item.background}]}>
                    <Image
                        source={item.image}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.serviceName}>{item.name}</Text>
            </TouchableOpacity>
        )
    };

    return(
        <View>
            <View style={styles.container}>
                <Text style={styles.serviceText}>Services</Text>
                <View style={styles.seeAllContainer}>
                    <Text style={styles.seeAll}>View all</Text>
                </View>
            </View>
            <View>
                <FlatList
                    data={Data}
                    renderItem={renderItem}
                    bounces={false}
                    scrollEnabled={false}
                    numColumns={4}
                />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: hp(2)
    },
    serviceText: {
        fontSize: 21,
        fontWeight: "700",
    },
    seeAllContainer: {
        backgroundColor: "#DDEDF4",
        paddingHorizontal: wp(4),
        paddingVertical: hp(0.7),
        borderRadius: 5,
        alignSelf: "center"
    },
    seeAll: {
        color: Color.brandColor,
    },
    serviceContainer: {
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        marginVertical: 10,
        width: wp(18),
        height: hp(12),
    },
    image: {

    },
    serviceName: {
        fontSize: 12,
        fontWeight: "400",
        color: "#333333"
    },
    imageBg: {
        width: wp(18),
        height: hp(8),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginBottom: hp(1.5)
    },
})