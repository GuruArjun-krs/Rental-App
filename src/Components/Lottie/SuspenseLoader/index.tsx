import React from 'react'
import LottieView from 'lottie-react-native'
import { View } from 'react-native'

import Loader from "@/Assets/Lottie/NearGearLoader.json"
import { styles } from './styles'


const SuspenseLoader = () => {
    return (
        <View style={styles.lottieWrapper}>
            <LottieView
                source={Loader}
                autoPlay
                loop
                style={styles.lottieContainer}
            />
        </View>
    )
}

export default SuspenseLoader