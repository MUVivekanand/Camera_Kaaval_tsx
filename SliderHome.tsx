import React, { useRef } from "react";
import { StyleSheet, Image, Dimensions, Text, View, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Swiper from "react-native-swiper";
import { NavigationProp } from "@react-navigation/native";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    paddingTop: 80,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  imageSlide: {
    alignSelf: "center",
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    height: h * 0.4,
    width: w * 0.8,
  },
  titleSlide: {
    marginTop: 40,
    fontSize: 24,
    textAlign: "center",
    marginHorizontal: 20,
    flexWrap: 'wrap',
    fontWeight: "bold",
  },
  textContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: "center",
    width: '100%',
  },
  textSlide: {
    color: "#767676",
    fontSize: 16,
    lineHeight: 25,
    textAlign: "center",
    flexWrap: 'wrap',
  },
  buttonSlide: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#90EE90",
  },
  buttonWrapperSlide: {
    backgroundColor: "transparent",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonLoginSlide: {
    height: 50,
    width: 140,
    borderRadius: 30,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#90EE90",
  },
  buttonTextSlide: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
  },
});

interface SliderHomeProps {
  navigation: NavigationProp<any>; // Adjust 'any' to the appropriate type based on your navigation stack
}

const SliderHome: React.FC<SliderHomeProps> = ({ navigation }) => {
  const swiperRef = useRef<Swiper | null>(null);

  const handleButtonPress = () => {
    navigation.navigate("Login");
  };

  return (
    <Swiper
      ref={swiperRef}
      buttonWrapperStyle={styles.buttonWrapperSlide}
      style={styles.wrapperSlide}
      showsButtons={true}
      loop={false}
      paginationStyle={{
        marginRight: w * 0.7,
        marginBottom: h * 0.02,
      }}
      activeDotColor="#008000"
      dotColor="#998FA2"
      nextButton={
        <View style={styles.buttonSlide}>
          <AntDesign name="arrowright" size={22} color="#000" />
        </View>
      }
      prevButton={
        <View style={[styles.buttonSlide, { marginHorizontal: 20 }]}>
          <AntDesign name="arrowleft" size={22} color="#000" />
        </View>
      }
    >
      <View style={styles.slideContainer}>
        <Image source={require("./images/sliderimg1.jpg")} style={styles.imageSlide} />
        <View style={styles.textContainer}>
          <Text style={styles.titleSlide}>Capture Violations, Earn Rewards, Improve Road Safety</Text>
        </View>
      </View>

      <View style={styles.slideContainer}>
        <Image source={require("./images/sliderimg2.png")} style={styles.imageSlide} />
        <View style={styles.textContainer}>
          <Text style={styles.titleSlide}>Report and Verify, Strive for Safer Streets!</Text>
        </View>
      </View>

      <View style={styles.slideContainer}>
        <Image source={require("./images/sliderimg3.jpg")} style={styles.imageSlide} />
        <View style={styles.textContainer}>
          <Text style={styles.titleSlide}>Spot Violations, Protect Lives, Make Every Report Matter</Text>
        </View>
        <TouchableOpacity style={styles.buttonLoginSlide} onPress={handleButtonPress}>
          <Text style={styles.buttonTextSlide}>Let's Start</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

export default SliderHome;
