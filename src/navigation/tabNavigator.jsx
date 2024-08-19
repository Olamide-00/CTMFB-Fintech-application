import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "../screen/home";
import photo from "../../assets/send.png"; 

export default function TabNavigator() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    backgroundColor: "#fff",
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home", // Show label
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={"home"}
                            size={24}
                            color={focused ? "#489648" : "#8e8e93"}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Transactions"
                component={Home}
                options={{
                    tabBarLabel: "Transactions", // Show label
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={"timer-outline"}
                            size={24}
                            color={focused ? "#489648" : "#8e8e93"}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Home2"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                width: 70,
                                height: 70,
                                backgroundColor: "green", // Background for middle tab
                                borderRadius: 35,
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: 30, // Adjust position
                            }}
                        >
                            <Image
                                source={photo}
                                style={{
                                    width: 30, // Custom icon size
                                    height: 30,
                                    tintColor: "#fff", // Optional: tint color to match design
                                    marginTop: 12
                                }}
                            />
                        </View>
                    ),
                    tabBarLabel: "", // Hide label for middle tab
                    tabBarButton: (props) => (
                        <View
                            style={{
                                top: 0,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Icon.Button
                                name="alert"
                                backgroundColor="green"
                                size={50}
                                borderRadius={50}
                                iconStyle={{ marginBottom: 0 }}
                                {...props}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Cards"
                component={Home}
                options={{
                    tabBarLabel: "Cards", // Show label
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={"card"}
                            size={24}
                            color={focused ? "#489648" : "#8e8e93"}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="More"
                component={Home}
                options={{
                    tabBarLabel: "More", // Show label
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={"grid-outline"}
                            size={24}
                            color={focused ? "#489648" : "#8e8e93"}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
