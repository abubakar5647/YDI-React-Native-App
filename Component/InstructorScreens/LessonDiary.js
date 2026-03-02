import { ScrollView, StyleSheet, Text, Image, View, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import { moderateScale } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import { setDate } from '../../Redux/FeedbackSlice';

const LessonDiary = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [calendar, setCalendar] = useState(true);
  const [selectedDate, setSelectedDate] = useState('');
  const [showData, setShowData] = useState(false);
  const [lesson, setLesson] = useState(false);

  const toggleData = () => {
    setShowData(!showData);
  };

  const toggleLesson = () => {
    setLesson(!lesson);
  }

  const onDayPress = (day) => {
    dispatch(setDate(day.dateString))
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar backgroundColor='transparent' translucent barStyle="light-content" />

      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {calendar && (
          <View style={styles.calendarContainer}>
            <View style={styles.navigation}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require("../Icons/arrow.png")} style={styles.arrowIcon} />
              </TouchableOpacity>
              <Text style={styles.headerText}>Start Date and Time</Text>
            </View>
            <ScrollView style={styles.calendarScroll}>
              <Calendar
                style={styles.calendar}
                theme={{
                  monthTextColor: '#FFFFFF',
                  textMonthFontSize: 20,
                  arrowColor: '#FFFFFF',
                  calendarBackground: '#000000',
                  dayTextColor: '#FFFFFF',
                  todayTextColor: '#FF0F88',
                  selectedDayTextColor: '#000000',
                }}
                onDayPress={onDayPress}
                markedDates={{
                  [selectedDate]: {
                    selected: true,
                    selectedColor: '#FF0F88',
                    customStyles: {
                      container: {
                        backgroundColor: '#FFFFFF',
                      },
                      text: {
                        color: '#000000',
                        fontWeight: 'bold',
                      },
                    },
                  },
                }}
                markingType={'custom'}
              />
            </ScrollView>
          </View>
        )}

        <View style={styles.container}>
          <View style={styles.position}>
            <View style={styles.lesson}>
              <View style={styles.lesson_flex}>
                <View style={styles.car_bg}>
                  <Image source={require('../Icons/car.png')} />
                </View>
                <View>
                  <Text style={styles.lesson_name}>Lesson 1</Text>
                  <View style={styles.man}>
                    <Image
                      style={styles.man_image}
                      source={require('../Icons/Group.png')}
                    />
                    <Text style={{ color: 'black' }}>Student Name</Text>
                  </View>
                  <Text style={styles.time}>30 Feb 11:00AM</Text>
                </View>
              </View>
              <TouchableOpacity onPress={toggleData}>
                <View style={styles.dots}>
                  <Image
                    style={styles.dots_image}
                    source={require('../Icons/dots.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.lesson2}>
              <View style={styles.lesson_flex}>
                <View style={styles.car_bg}>
                  <Image source={require('../Icons/car.png')} />
                </View>
                <View>
                  <Text style={styles.lesson_name}>Lesson 2</Text>
                  <View style={styles.man}>
                    <Image
                      style={styles.man_image}
                      source={require('../Icons/Group.png')}
                    />
                    <Text style={{ color: 'black' }}>Student Name</Text>
                  </View>
                  <Text style={styles.time}>30 Feb 11:00AM</Text>
                </View>
              </View>
              <TouchableOpacity onPress={toggleLesson}>
                <View style={styles.dots}>
                  <Image
                    style={styles.dots_image}
                    source={require('../Icons/dots.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </View>

        {
          showData ?

            <View
              style={{
                width: moderateScale(184),
                backgroundColor: 'white',
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                borderRadius: 8,
                alignSelf: 'flex-end',
                position: 'relative',
                bottom: "50%",
                right: 47
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("FeedBack")}>
                <Text style={{ color: '#000000', fontSize: 14, fontWeight: '500', margin: 10 }}>
                  Feedback
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("EditInvoice")}>
                <Text style={{ color: '#000000', fontSize: 14, fontWeight: '500', margin: 10 }}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View> : null
        }

        {
          lesson ?

            <View
              style={{
                width: moderateScale(184),
                backgroundColor: 'white',
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                borderRadius: 8,
                alignSelf: 'flex-end',
                position: 'relative',
                bottom: "33%",
                right: 47
              }}
            >
              <TouchableOpacity>
                <Text style={{ color: '#000000', fontSize: 14, fontWeight: '500', margin: 10 }}>
                  Feedback
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{ color: '#000000', fontSize: 14, fontWeight: '500', margin: 10 }}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View> : null
        }

      </View>
    </ScrollView>
  );
};

export default LessonDiary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 20
  },
  calendarContainer: {
    backgroundColor: '#000000',
  },
  navigation: {
    flexDirection: 'row',
    marginTop: StatusBar.currentHeight + moderateScale(20),
    marginLeft: moderateScale(21),
    gap: moderateScale(10),
    alignItems: 'center',
  },
  arrowIcon: {
    tintColor: '#FFFFFF',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  calendarScroll: {
    height: 200,
  },
  calendar: {
    height: 200,
    backgroundColor: '#000000',
  },
  lesson: {
    backgroundColor: '#f6f7fc',
    marginHorizontal: moderateScale(20),
    padding: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: moderateScale(6),
    marginTop: moderateScale(30)
  },
  lesson2: {
    backgroundColor: '#f6f7fc',
    marginHorizontal: moderateScale(20),
    padding: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: moderateScale(6),
    marginTop: moderateScale(10)
  },
  lesson_flex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  car_bg: {
    backgroundColor: 'white',
    width: moderateScale(81.4),
    height: moderateScale(76.31),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(6),
    elevation: 2,
  },
  lesson_name: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: '#262626',
    paddingBottom: moderateScale(5),
  },
  man: {
    flexDirection: 'row',
    gap: moderateScale(5),
    paddingBottom: moderateScale(5),
  },
  time: {
    fontSize: moderateScale(15),
    fontWeight: '500',
    color: '#679436',
  },
  man_image: {
    height: moderateScale(16),
    width: moderateScale(17),
  },
  dots_image: {
    height: moderateScale(10.75),
    width: moderateScale(4.25),
  },
  dots: {
    width: moderateScale(12),
    height: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
