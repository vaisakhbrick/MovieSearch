import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Search from '../screens/SearchScreen'
import { NavigationConstans } from '../constants/Constants'


const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    )
}

const AppStack = createNativeStackNavigator()


const Stack = () => {
    return (
        <AppStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <AppStack.Screen name={NavigationConstans.Search} component={Search} />
        </AppStack.Navigator>
    )
}

export default Navigation