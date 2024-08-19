import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screen/login";
import Password from "../screen/password";
import Home from "../screen/home";
import TabNavigator from "./tabNavigator";




export default function RootNavigation() {

    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Password" component={Password} />
                <Stack.Screen name="Home-tab" component={TabNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}