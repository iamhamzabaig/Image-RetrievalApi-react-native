import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

//Tokens and URLS
const access_key = "GEKLBNRZLr5utYXM6Qln6Rx7r9vc3MOqhSH0OVmBxLEPrBWsWwY5UYpL";
const url = "https://api.pexels.com/v1/photos/2014422";

export default function ImageApiCall() {
  const [photosData, setPhotosData] = useState("");
  useEffect(() => {
    getPhotos();
  }, []);
  const getPhotos = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: access_key,
      },
    });
    const data = await response.json();
    setPhotosData(data);
  };
  console.log(photosData);

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}> {photosData.height}</Text>
      <Image source={{ uri: photosData.src.regular }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
});
