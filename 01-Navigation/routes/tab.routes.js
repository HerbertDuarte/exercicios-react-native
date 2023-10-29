import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Home from '../screens/Home'
import Calendar from '../screens/Calendar'
import Profile from "../screens/Profile"
import Search from "../screens/Search"
import { HomeIcon, UserIcon, CalendarIcon, SearchIcon} from "lucide-react-native"
import { StyleSheet } from "react-native"

const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return(
        <Tab.Navigator sceneContainerStyle={{styles}} 
            screenOptions={{
                tabBarActiveTintColor : "#5c67c6",
                headerShown: false,
                tabBarShowLabel : false,
                tabBarStyle : {
                    paddingBottom : 10,
                }
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon : ({color, size, focused}) => (
                    <HomeIcon strokeWidth={focused ? 2.5 : 2} style={styles.icon} color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon : ({color, size, focused}) => (
                        <SearchIcon  strokeWidth={focused ? 2.5 : 2} style={styles.icon} color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={Calendar}
                options={{
                    tabBarIcon : ({color, size, focused}) => (
                    <CalendarIcon strokeWidth={focused ? 2.5 : 2} style={styles.icon} color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon : ({color, size, focused}) => (
                    <UserIcon strokeWidth={focused ? 2.5 : 2} style={styles.icon} color={color} size={size}/>
                    ),
                }}
            />

        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    icon : {
       marginTop : 10,
    }
})