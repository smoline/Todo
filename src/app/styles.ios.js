import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef235f',
    padding: 40
  },
  box: {
    backgroundColor: 'yellow',
    width: width / 2,
    height: height / 4,
    position: 'absolute',
    top: 100,
    left: 100,
    borderRadius: 30
  },
  text: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold'
  }
})