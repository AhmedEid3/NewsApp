import { Image, StyleSheet, Text, View } from 'react-native'
import { IArticle } from './IArticle'

interface Props {
  article: IArticle
}

const NewsDetails = ({ article }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.author}>{article.author}</Text>
      <Text style={styles.publishedAt}>{article.publishedAt}</Text>
      <Text style={styles.description}>{article.description}</Text>
      <Text style={styles.content}>{article.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    padding: 16
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  author: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5
  },
  publishedAt: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10
  },
  description: {
    fontSize: 18,
    marginBottom: 10
  },
  content: {
    fontSize: 16
  }
})

export default NewsDetails
