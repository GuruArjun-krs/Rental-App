import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Typo } from '@/Components'
import { styles } from './styles'
import useColorTheme from '@/Utils/Themes/ColorSchema'

interface buttonProps {
    title: string,
    onPress: () => void
    variant?: 'primary' | 'secondary' | 'tertiary'
    isLoading?: boolean
    isDisable?: boolean
}

const CustomButton = ({
    title,
    onPress,
    variant = 'primary',
    isLoading = false,
    isDisable = false
}: buttonProps) => {
    const { primaryClr } = useColorTheme()

    const buttonVariant = {
        primary: {
            borderColor: '#222220',
            backgroundColor: '#222220'
        },
        secondary: {
            borderColor: primaryClr
        },
        tertiary: {
            borderWidth: 0,
        }
    }

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            disabled={isLoading || isDisable}
            onPress={onPress}
            style={[
                styles.buttonWrapper,
                buttonVariant[variant],
                isDisable && styles.disableBtn
            ]}
        >
            <Typo title={title} color={primaryClr} />
        </TouchableOpacity>
    )
}

export default CustomButton