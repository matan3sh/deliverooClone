import CustomHeader from "@/components/CustomHeader"
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { Stack } from "expo-router"

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
}

export default function RootLayoutNav() {
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => <CustomHeader />,
          }}
        />
      </Stack>
    </BottomSheetModalProvider>
  )
}
