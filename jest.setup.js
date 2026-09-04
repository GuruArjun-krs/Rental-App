import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-screens', () => ({
    enableScreens: jest.fn(),
    ScreenContainer: 'ScreenContainer',
    Screen: 'Screen',
    NativeScreen: 'NativeScreen',
    NativeScreenContainer: 'NativeScreenContainer',
    ScreenStack: 'ScreenStack',
    ScreenStackHeaderConfig: 'ScreenStackHeaderConfig',
    ScreenStackHeaderSubview: 'ScreenStackHeaderSubview',
    SearchBar: 'SearchBar',
}));