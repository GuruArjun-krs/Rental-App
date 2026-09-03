import { useColorScheme } from "react-native";
import { COLORS } from "@/Utils/Themes/ColorPalatte";


const useColorTheme = () => {
    const isDark = useColorScheme() === 'dark';

    return {
        white: isDark ? COLORS.white : COLORS.black,
        primaryTextColor: isDark ? COLORS.primaryTextColorLight : COLORS.primaryTextColorDark,
        seondaryTextColor: isDark ? COLORS.secondaryTextColorLight : COLORS.secondaryTextColorDark,
        errorClr: COLORS.errorClr,
        placeHolderColor: COLORS.placeHolderColor,
        borderColor: COLORS.borderColor,
        primaryClr:isDark? COLORS.primaryClrDark: COLORS.primaryClrLight
    }
}

export default useColorTheme