import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions = {{
            tabBarActiveTintColor: '#9100ff',
            headerStyle: {
                backgroundColor: '#161616',
            },
            headerShadowVisible: false,
            headerTintColor: '#dddddd',
            tabBarStyle: {
                backgroundColor: '#161616',
            },
        }}
    >
      <Tabs.Screen
        name = "index" 
        options = {{
            title: 'Home',
            tabBarIcon: ({ color, focused}) => (
                <Ionicons
                    name = {focused ? 'home-sharp' : 'home-outline'}
                    color = {color}
                    size = {24}
                />
            )
        }} />
      <Tabs.Screen 
        name="about" 
        options = {{
            title: 'About',
            tabBarIcon: ({ color, focused }) => (
                <Ionicons 
                    name = { focused ? 'information-circle' : 'information-circle-outline'}
                    color = {color}
                    size = {24}
                />
            )
        }} />
    </Tabs>
  );
}
