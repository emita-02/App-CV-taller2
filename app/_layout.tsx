import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { CVProvider } from "../context/CVContext"
import { colors } from "../constants/colors"

export default function RootLayout() {
  return (
    <CVProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{
        headerStyle:{
          backgroundColor: colors.surface,
        },
        headerTintColor: colors.text,
        headerTitleStyle:{
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
      >
        <Stack.Screen 
          name="index"
          options={{
            title: "Crear CV",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="personal-info"
          options={{
            title: "Información Personal",
          }}
        />
        <Stack.Screen
          name="experience"
          options={{
            title: "Experiencia Laboral",
          }}
        />
        <Stack.Screen
          name="education"
          options={{
            title: "Educación"
          }}
        />
        <Stack.Screen
          name="preview"
          options={{
            title: "Vista Previa",
            presentation: "modal",
          }}
        />
      </Stack>
    </CVProvider>
  );
}