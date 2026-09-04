import { Dimensions, StyleSheet } from "react-native";

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('window')

export const styles = StyleSheet.create({
    lottieWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lottieContainer:{
        width: ScreenWidth * 0.6,
         height: ScreenWidth * 0.5
    }
})