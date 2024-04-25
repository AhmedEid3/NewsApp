import { TextInput, View, StyleSheet } from 'react-native'
import { useState } from 'react'
import { useNews } from './NewsProvider/useNews'
import Icon from 'react-native-vector-icons/Feather'

export function SearchNews() {
  const { setQuery } = useNews()

  const [text, onChangeText] = useState('')

  const handleChangeText = (text: string) => {
    onChangeText(text)
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your search query"
          value={text}
          onChangeText={handleChangeText}
          onEndEditing={() => setQuery(text)} // Trigger search action when the user finishes typing
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 16
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff'
  },
  searchIcon: {
    marginRight: 10
  },
  input: {
    flex: 1,
    height: 40
  }
})
