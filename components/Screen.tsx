import { SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

interface ScreenProps {
  children: React.ReactNode
}

export default function Screen({ children }: ScreenProps) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
})
