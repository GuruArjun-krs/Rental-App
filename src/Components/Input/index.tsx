import React, { ComponentProps, useState } from 'react'
import { StyleProp, TextInput, TextStyle, TouchableOpacity, View } from 'react-native'

import { Typo } from '@/Components'
import useColorTheme from '@/Utils/Themes/ColorSchema'
import { styles } from './styles'
import { EyeCloseIcon, EyeOpenIcon, SearchIcon } from '@/Assets/Svg'

interface InputProps {
    label?: string
    name: string;
    isMandatory?: boolean
    isSearch?: boolean
    value: string | undefined
    editable?: boolean
    multiline?: boolean
    inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'
    onChange: (value: string) => void
    onBlur?: (name: string) => void
    secureTextEntry?: boolean
    onFocus?: ComponentProps<typeof TextInput>['onFocus']
    style?: StyleProp<TextStyle>
    error?: string
    placeHolderText?: string
}

const CustomInput = ({
    name,
    label,
    isMandatory = false,
    isSearch = false,
    value,
    editable = true,
    multiline = false,
    inputMode = 'text',
    onChange,
    onBlur,
    secureTextEntry = false,
    onFocus,
    style,
    error,
    placeHolderText = 'Enter'
}: InputProps) => {
    const { errorClr, placeHolderColor, white, primaryTextColor, borderColor } = useColorTheme()
    const [textShow, setTextShow] = useState(false);

    return (
        <View style={styles.inputWrapper}>
            <View style={styles.labelWrapper}>
                {label && (
                    <Typo title={label} />
                )}
                {isMandatory && (
                    <Typo title={'*'} variant="bodyMediumSecondary" color={errorClr} />
                )}
            </View>

            <View>
                {isSearch && (
                    <View style={styles.searchIcon}>
                        <SearchIcon color={placeHolderColor} />
                    </View>
                )}

                <TextInput
                    style={[
                        {
                            borderWidth: 1,
                            borderColor: error ? errorClr : borderColor,
                            padding: 12,
                            borderRadius: 8,
                            color: primaryTextColor,
                            paddingLeft: isSearch ? 34 : 20,
                            ...(multiline && styles.multilineContainer),
                            ...(!editable ? { backgroundColor: borderColor } : { backgroundColor: white })
                        },
                        style,
                    ]}
                    value={value}
                    editable={editable}
                    multiline={multiline}
                    inputMode={inputMode}
                    onChangeText={(text: any) => onChange(text)}
                    onBlur={() => onBlur && onBlur(name)}
                    placeholderTextColor={placeHolderColor}
                    numberOfLines={multiline ? 4 : 1}
                    secureTextEntry={secureTextEntry ? (textShow ? false : true) : false}
                    onFocus={onFocus}
                    placeholder={placeHolderText}
                />

                {secureTextEntry && (
                    <TouchableOpacity onPress={() => setTextShow(prev => !prev)} style={styles.secureIcon}>
                        {textShow ? <EyeOpenIcon color={placeHolderColor} /> : <EyeCloseIcon color={placeHolderColor} />}
                    </TouchableOpacity>
                )}
            </View>
            {error && <Typo title={error} style={{ paddingLeft: 2 }} variant="bodySmallTertiary" color={errorClr} />}
        </View>
    )
}

export default CustomInput