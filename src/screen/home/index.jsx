import { SafeAreaView, View, Text, Image, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style";
import Dashboard from "../../component/dashboard";
import Services from "../../component/services";
import TransactionHistory from "../../component/transactionHistory";
import NewUser from "../../component/newUser";




export default function Home() {

    const newUser = true; // toggle between new user and existing user


    return(
        <SafeAreaView>
            <View style={styles.container} >
                <View style={styles.header}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require("../../../assets/image.png")}
                            style={styles.image}
                        />
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>Hi, Temitope</Text>
                            <Text style={styles.greeting}>How are you today?</Text>
                        </View>
                    </View>
                    <View style={styles.iconContainer}>
                        <FontAwesome name="moon-o" size={20}/>
                        <FontAwesome name="bell" size={20}/>
                    </View>
                </View>
                <View style={styles.dashboardContainer}>
                    <Dashboard/> 
                </View>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.serviceContainer}>
                        <Services/>
                    </View>
                    <View style={styles.historyContainer}>
                        {
                            newUser? <NewUser/> :  <TransactionHistory/>
                        }   
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}