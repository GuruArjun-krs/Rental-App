import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native';

import { COLORS } from '@/Utils/Themes/ColorPalatte';
import useColorTheme from '@/Utils/Themes/ColorSchema';
import { styles } from './styles';

interface LayoutType {
    appStyle?: any
    children: any
    bgColor?: string
    childStyle?: any
    viewBg?: string
    edges?: any
}

const PrimaryLayout = ({
    appStyle,
    children,
    bgColor = COLORS.white,
    childStyle,
    viewBg = COLORS.white,
    edges = ['top', 'left', 'right', 'bottom']
}: LayoutType) => {
    const isFocused = useIsFocused();
    const { white } = useColorTheme()
    const isLightBackground = bgColor === white

    return (
        <SafeAreaView edges={edges} style={[styles.safeareaWrapper, { backgroundColor: bgColor }, appStyle]}>
            {isFocused && (
                <StatusBar
                    barStyle={isLightBackground ? 'dark-content' : 'light-content'}
                    animated={true}
                />
            )}
            <View style={[styles.childrenContainer, { backgroundColor: viewBg }, childStyle]}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default PrimaryLayout