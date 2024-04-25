import { Stack, useLocalSearchParams } from 'expo-router'

import { ScrollView } from 'react-native'
import { IArticle } from '../(Home)/components/IArticle'
import NewsDetails from '../(Home)/components/NewsDetails'
import Screen from '../../components/Screen'

export default function Page() {
  const article = useLocalSearchParams() as unknown as IArticle

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: 'News Details',
          headerStyle: { backgroundColor: 'orange' },
          headerTintColor: '#111',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      />

      <ScrollView>
        <NewsDetails article={article} />
      </ScrollView>
    </Screen>
  )
}
