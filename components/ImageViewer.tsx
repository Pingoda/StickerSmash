import { ImageSourcePropType, ImageStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props = {
   imgSource: ImageSourcePropType;
   imgStyles?: ImageStyle;
   selectedImage?: string;
};

export default function ImageViewer({ imgSource, imgStyles = styles.image, selectedImage }: Props) {
   const imageSource = selectedImage ? { uri: selectedImage} : imgSource;
   
   return <Image source={imageSource} style={imgStyles} />;
}

const styles = StyleSheet.create({
   image: {
      width: 320,
      height: 440,
      borderRadius: 18,
   },
});
