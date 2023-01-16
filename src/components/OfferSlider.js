import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import img1 from "../../assets/img1.jpg";
import img3 from "../../assets/img3.jpg";
import img2 from "../../assets/img2.jpg";
import module from "../globals/style";
import Swiper from "react-native-swiper";

const OfferSlider = () => {
  const data = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },

    {
      id: 3,
      image: img3,
    },
  ];
  return (
    <View>
      <View style={styles.OfferSlider}>
        <Text style={styles.OfferSliderText}>Exciting Offers</Text>
        <Swiper style={styles.Swiper} autoplay={true} activeDotColor="red">
          <View style={styles.slide}>
            <Image source={img1} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={img2} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={img3} style={styles.image} />
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default OfferSlider;

const styles = StyleSheet.create({
  OfferSlider: {
    marginVertical: 25,
    width: "95%",

    height: 260,
    backgroundColor: module.colors.col1,
    alignItems: "center",
  },
  OfferSliderText: {
    color: module.colors.text1,
    borderBottomColor: module.colors.text1,
    borderBottomWidth: 1,
    fontSize: 20,
    paddingVertical: 5,
    marginVertical: 5,
  },
  slide: {
    width: "100%",
    height: 150,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    // marginHorizontal: 5,
  },
});
