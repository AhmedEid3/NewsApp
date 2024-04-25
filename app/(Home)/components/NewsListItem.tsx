import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { IArticle } from './IArticle'

const NewsListItem = ({ title, description, urlToImage }: IArticle) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: urlToImage }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    // shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // shadow for Android
    elevation: 2
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5
  },
  textContainer: {
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  description: {
    fontSize: 12,
    color: '#666'
  }
})

export default NewsListItem
