import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListViewScreen from '../Components/ListViewScreen';
import ImageDetailScreen from '../Components/ImageDetailScreen';

const Stack=createNativeStackNavigator();

function MainAppRoutes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Image Gallery' component={ListViewScreen} options={({navigation,route})=>({headerTitle:'Image Gallery',headerStyle:{backgroundColor:'lightgreen'},headerTitleAlign:'center'})}/>
                <Stack.Screen name='Image Details' component={ImageDetailScreen} options={({navigation,route})=>({headerStyle:{backgroundColor:'lightgreen'},headerTitleAlign:'center'})}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainAppRoutes;