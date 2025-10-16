import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function NotFound() {
  return (
    <View style = { styles.container }>
      <Text style = { styles.text }>Error 404: Page not found</Text>
      <Link href='/(tabs)/index' style = { styles.button }>Go back to Home Page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: '#fff'
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff'
  },
});
