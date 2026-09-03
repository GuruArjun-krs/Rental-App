import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    labelWrapper: {
        flexDirection: 'row',
        gap: 4
    },
    searchIcon: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 45,
        alignItems: 'center',
        paddingLeft: 10,
        zIndex: 99,
    },
    secureIcon: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 40,
        right: 10,
    },
    inputWrapper:{
        gap:4
    },
    multilineContainer:{
         height: 120,
          textAlignVertical: 'top'
    }
})