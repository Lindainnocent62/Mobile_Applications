import { store } from "@/store";
import { Stack } from "expo-router";
import { Provider } from "react-redux";

export default function RootLayout() {
  return(
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false,  gestureEnabled: false,  }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false, gestureEnabled: false,}} />
        <Stack.Screen name="signin" options={{ headerShown: false, gestureEnabled: false,}} />
        <Stack.Screen name="signup" options={{ headerShown: false, gestureEnabled: false,}} />
        <Stack.Screen name="registration_details" options={{ headerShown: false, gestureEnabled: false,}} />
        <Stack.Screen name="success_signup" options={{ headerShown: false, gestureEnabled: false,}} />
        <Stack.Screen name="success_order" options={{ headerShown: false, gestureEnabled: false,}} />
        <Stack.Screen name="payment" options={{ headerShown: false, gestureEnabled: false,}} />
        <Stack.Screen name="product_description" options={{ headerShown: false, gestureEnabled: false,}} />
        <Stack.Screen name="edit_profile" options={{ headerShown: false, gestureEnabled: false,}} />
        <Stack.Screen name="t's_and_c's" options={{ headerShown: false, gestureEnabled: false,}} />
        <Stack.Screen name="privacy_policy" options={{ headerShown: false, gestureEnabled: false,}} />
        <Stack.Screen name="help_center" options={{ headerShown: false, gestureEnabled: false,}} />
        <Stack.Screen name="add_home_address" options={{ headerShown: false, gestureEnabled: false,}} />
        <Stack.Screen name="edit_name" options={{ headerShown: false, gestureEnabled: false,}} />
        <Stack.Screen name="edit_email" options={{ headerShown: false, gestureEnabled: false,}} />
        <Stack.Screen name="wallet" options={{ headerShown: false, gestureEnabled: false,}} />
      </Stack>
    </Provider>
  );
}
