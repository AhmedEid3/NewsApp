import { Stack } from 'expo-router/stack'

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'orange'
        },
        headerTintColor: '#111',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    ></Stack>
  )
}
