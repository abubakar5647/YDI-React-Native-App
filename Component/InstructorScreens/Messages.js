import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, StatusBar, TextInput, FlatList } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

const Messages = () => {
  const navigation = useNavigation();
  const user = [
    {
      id: '1',
      image: require('../Icons/jimmy.png'),
      heading: "Jimmy Heather",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      time: "12:10 AM"
    },
    {
      id: '2',
      image: require('../Icons/heather.png'),
      heading: "Heather",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ",
      time: "12:7 AM"
    },
    {
      id: '3',
      image: require('../Icons/jimmy.png'),
      heading: "Heather",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      time: "12:00 AM"
    },
    {
      id: '4',
      image: require('../Icons/jimmy.png'),
      heading: "Jimmy Heather",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      time: "11:50 AM"
    },
  ]
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle="dark-content"
      />

      <View style={styles.container}>

        <View
          style={{
            flexDirection: 'row',
            marginTop: moderateScale(54),
            marginLeft: moderateScale(21),
            gap: moderateScale(10)
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Image source={require("../Icons/arrow.png")} />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: '500', color: '#000000' }}>Message</Text>
        </View>

        <View
          style={styles.inputBox}>
          <TextInput
            placeholder="Search....."
            placeholderTextColor='#A3A3A3'
            style={{ flex: 1 }}
          />
          <TouchableOpacity
            style={styles.searchBox}>
            <Image source={require("../Icons/search.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            data={user}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('ChatBox', { name: item.heading, image: item.image })}>
                <View style={styles.listItem}>
                  <Image source={item.image} style={styles.image} />
                  <View style={styles.textContainer}>
                    <View style={styles.header}>
                      <Text style={styles.heading}>{item.heading}</Text>
                      <Text style={styles.time}>{item.time}</Text>
                    </View>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>



      </View>
    </ScrollView>
  )
}

export default Messages

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: moderateScale(5),
    borderColor: '#DCDCE3',
    fontSize: moderateScale(12),
    fontWeight: '500',
    paddingHorizontal: moderateScale(15),
    marginHorizontal: moderateScale(20),
    backgroundColor: '#0000000D',
    borderRadius: moderateScale(21),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(20)
  },
  searchBox: {
    width: moderateScale(28),
    height: moderateScale(28),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(21)
  },
  listContainer: {
    flex: 1,
    marginHorizontal: moderateScale(15),
    marginTop: moderateScale(20),
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: '#ADADAD24',
    paddingVertical: moderateScale(20),
    gap: moderateScale(20),
  },
  image: {
    width: moderateScale(50),
    height: moderateScale(50),
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: moderateScale(15),
    fontWeight: '500',
    color: '#000000',
  },
  time: {
    fontSize: moderateScale(10),
    fontWeight: '400',
    color: '#3D50DF',
  },
  title: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: '#747474',
  },
})