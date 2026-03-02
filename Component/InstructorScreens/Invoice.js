import { StyleSheet, Text, View, ScrollView, StatusBar, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const Invoice = () => {
  const navigation = useNavigation();
  const [showData, setShowData] = useState(false);
  const [refund, setRefund] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ bottom: 0, right: 0 });

  const handleToggleData = (event) => {
    setShowData(!showData);
    setRefund(false);
    event.target.measure((fx, fy, width, height, px, py) => {
      setPopupPosition({ bottom: 'auto', top: py + height, right: moderateScale(47) });
    });
  };

  const handleToggleRefund = (event) => {
    setRefund(!refund);
    setShowData(false);
    event.target.measure((fx, fy, width, height, px, py) => {
      setPopupPosition({ bottom: 'auto', top: py + height, right: moderateScale(47) });
    });
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View
          style={{
            flexDirection: 'row',
            marginTop: moderateScale(54),
            marginLeft: moderateScale(21),
            gap: moderateScale(10),
            marginBottom: moderateScale(20)
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Image source={require("../Icons/arrow.png")} />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: '500', color: '#000000' }}>
            Invoice
          </Text>
        </View>

        <View style={styles.lessonContainer}>
          <View style={styles.lesson}>
            <View style={styles.lesson_flex}>
              <View style={styles.car_bg}>
                <Image source={require('../Icons/lessonGirl.png')} />
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
                <Text style={styles.time}>11:00AM - 01:00 P.M</Text>
              </View>
            </View>
            <View>
              <Text style={{ color: '#679436', fontSize: 15, fontWeight: '500' }}>Paid</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Feb 02, 2023.</Text>
            <Text>
              <Image source={require("../Icons/true.png")} />
              <Text style={{ color: '#A22722' }}> Completed</Text>
            </Text>
          </View>
        </View>

        <View style={styles.lessonContainer}>
          <View style={styles.lesson}>
            <View style={styles.lesson_flex}>
              <View style={styles.car_bg}>
                <Image source={require('../Icons/lessonGirl.png')} />
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
                <Text style={styles.time}>11:00AM - 01:00 P.M</Text>
              </View>
            </View>
            <TouchableOpacity onPress={(event) => handleToggleData(event)}>
              <Image source={require("../Icons/dots.png")} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Feb 02, 2023.</Text>
            <Text style={{ color: '#679436', fontSize: 15, fontWeight: '500' }}>Paid</Text>
          </View>
        </View>

        <View style={styles.lessonContainer}>
          <View style={styles.lesson}>
            <View style={styles.lesson_flex}>
              <View style={styles.car_bg}>
                <Image source={require('../Icons/lessonGirl.png')} />
              </View>
              <View>
                <Text style={styles.lesson_name}>Lesson 3</Text>
                <View style={styles.man}>
                  <Image
                    style={styles.man_image}
                    source={require('../Icons/Group.png')}
                  />
                  <Text style={{ color: 'black' }}>Student Name</Text>
                </View>
                <Text style={styles.time}>11:00AM - 01:00 P.M</Text>
              </View>
            </View>
            <TouchableOpacity onPress={(event) => handleToggleRefund(event)}>
              <Image source={require("../Icons/dots.png")} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Feb 02, 2023.</Text>
            <Text style={{ color: '#679436', fontSize: 15, fontWeight: '500' }}>Paid</Text>
          </View>
        </View>

        {(showData || refund) && (
          <View style={[styles.popupContainer, popupPosition]}>
            <TouchableOpacity onPress={() => navigation.navigate("RefundInvoice")}>
              <Text style={styles.popupText}>
                Refund
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Invoice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lessonContainer: {
    backgroundColor: '#F6F7FC',
    marginHorizontal: moderateScale(20),
    marginTop: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(20),
  },
  car_bg: {
    backgroundColor: 'white',
    width: moderateScale(81.4),
    height: moderateScale(76.31),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(6),
  },
  lesson: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lesson_flex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
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
    color: '#262626',
  },
  man_image: {
    height: moderateScale(16),
    width: moderateScale(17),
  },
  popupContainer: {
    width: moderateScale(184),
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderRadius: 8,
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  popupText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    margin: 10,
  },
});
