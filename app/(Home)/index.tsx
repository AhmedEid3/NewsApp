import { Link, Stack } from 'expo-router'
import {
  ActivityIndicator,
  Button,
  FlatList,
  Pressable,
  Text,
  View
} from 'react-native'

import Screen from '../../components/Screen'
import NewsListItem from './components/NewsListItem'
import { NewsProvider } from './components/NewsProvider/NewsProvider'
import { useNews } from './components/NewsProvider/useNews'
import { SearchNews } from './components/SearchNews'

export default function Page() {
  return (
    <NewsProvider>
      <NewsScreen />
    </NewsProvider>
  )
}

function NewsScreen() {
  const { news, searchedNews, setPage, error, loading, hasMore } = useNews()
  return (
    <Screen>
      <Stack.Screen
        options={{
          title: 'Home',
          headerStyle: { backgroundColor: 'orange' },
          headerTintColor: '#111',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      />

      <View style={{ paddingHorizontal: 10, marginBottom: 16 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold'
          }}
        >
          Daily News
        </Text>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 5
          }}
        >
          Feed
        </Text>
      </View>

      <SearchNews />

      {!!error && (
        <View style={{ marginVertical: 2 }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'red',
              fontSize: 14,
              marginVertical: 20
            }}
          >
            {error}
          </Text>
        </View>
      )}

      {loading && (
        <ActivityIndicator
          size="small"
          color="#007AFF"
          style={{ marginVertical: 10 }}
        />
      )}

      {searchedNews.length > 0 && (
        <View
          style={{
            marginVertical: 2
          }}
        >
          <Text>Search Results:</Text>
        </View>
      )}

      <FlatList
        data={searchedNews.length > 0 ? searchedNews : news}
        renderItem={({ item, index }) => (
          <View
            key={item.title}
            style={{
              marginHorizontal: 10,
              marginVertical: 5
            }}
          >
            <Link
              push
              href={{
                pathname: '/[newsId]',
                params: item
              }}
              asChild
            >
              <Pressable>
                <NewsListItem {...item} />
              </Pressable>
            </Link>
          </View>
        )}
        keyExtractor={(_item, index) => index.toString()}
      />

      {hasMore && (
        <View style={{ alignItems: 'center', marginVertical: 10 }}>
          <Button
            title="Load More"
            onPress={() => {
              setPage((page: number) => page + 1)
            }}
            color="orange"
          />
        </View>
      )}
    </Screen>
  )
}
