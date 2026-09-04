import React from 'react'
import { View } from 'react-native'

import { Button, Input, PrimaryLayout, SuspenseLoader } from '@/Components'
import useColorTheme from '@/Utils/Themes/ColorSchema'

const AuthLoginScreen = () => {
  const { primaryClr } = useColorTheme()

  return (
    <PrimaryLayout bgColor={primaryClr} viewBg={primaryClr} edges={'exceptBottom'}>
      <View>

      </View>
    </PrimaryLayout>
  )
}

export default AuthLoginScreen