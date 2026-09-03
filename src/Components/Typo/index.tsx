import React from 'react'
import { Text } from 'react-native'

import useColorTheme from '@/Utils/Themes/ColorSchema'
import { styles } from './styles'

type VarientType = 'mainHeading' | 'headingLargePrimary' | 'headingSecondaryPrimary' | 'headingMediumPrimary' | 'headingMediumSecondary' | 'headingSmallPrimary' | 'headingSmallSecondary' | 'titleLargePrimary' | 'titleLargeSecondary' | 'titleLargeTertiary' | 'titleMediumPrimary' | 'titleMediumSecondary' | 'titleMediumTertiary' | 'bodyLargePrimary' | 'bodyLargeSecondary' | 'bodyLargeTertiary' | 'bodyMediumPrimary' | 'bodyMediumSecondary' | 'bodyMediumTertiary' | 'bodySmallPrimary' | 'bodySmallSecondary' | 'bodySmallTertiary'

interface TypoProps {
    title: string
    color?: string
    style?: any
    variant?: VarientType
}

export const Typo = ({
    title,
    color,
    style,
    variant = 'bodyMediumTertiary'
}: TypoProps) => {
    const { primaryTextColor } = useColorTheme()
    return (
        <Text style={[styles[variant], style, { color: color ?? primaryTextColor }]}>
            {title}
        </Text>
    )
}
