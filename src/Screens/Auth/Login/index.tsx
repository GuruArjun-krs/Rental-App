import React from 'react'
import { View } from 'react-native'

import { Button, Input, PrimaryLayout } from '@/Components'

const AuthLoginScreen = () => {
  return (
    <PrimaryLayout bgColor='yellow' viewBg='blue'>
      <View style={{ flex: 1, backgroundColor: 'green', gap: 20 }}>
        <Input
          name='username'
          label='Username'
          isMandatory
          onChange={(e) => console.log(e)}
          value=''
          placeHolderText='Enter username'
          error='naskldnasld'
        />
        <Button
          title='Submit'
          onPress={() => { }}
          variant='secondary'
          isDisable={true}
        />
      </View>
    </PrimaryLayout>
  )
}

export default AuthLoginScreen