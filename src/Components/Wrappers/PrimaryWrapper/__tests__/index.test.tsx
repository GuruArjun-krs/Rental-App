import React from 'react';
import { Text, StatusBar } from 'react-native';
import { render } from '@testing-library/react-native';
import PrimaryLayout from '@/Components/Wrappers/PrimaryWrapper';

const mockWhite = '#FFFFFF';
const mockUseIsFocused = jest.fn().mockReturnValue(true);

jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useIsFocused: () => mockUseIsFocused(),
}));

jest.mock('@/Utils/Themes/ColorSchema', () => ({
    __esModule: true,
    default: () => ({
        white: mockWhite,
    }),
}));

jest.mock('@/Utils/Themes/ColorPalatte', () => ({
    COLORS: {
        white: '#FFFFFF',
        black: '#000000',
    },
}));

jest.mock('react-native/Libraries/Components/StatusBar/StatusBar', () => {
    return {
        __esModule: true,
        default: jest.fn(() => null),
    };
});

describe('PrimaryLayout Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockUseIsFocused.mockReturnValue(true);
    });

    it('renders children correctly', async () => {
        const { getByText } = await render(
            <PrimaryLayout>
                <Text>Test Child</Text>
            </PrimaryLayout>
        );

        expect(getByText('Test Child')).toBeTruthy();
    });

    it('renders status bar with dark-content when background matches white (light background)', async () => {
        await render(
            <PrimaryLayout bgColor="#FFFFFF">
                <Text>Light BG</Text>
            </PrimaryLayout>
        );

        expect(StatusBar).toHaveBeenCalledWith(
            expect.objectContaining({
                barStyle: 'dark-content',
                animated: true,
            }),
            undefined
        );
    });

    it('renders status bar with light-content when background is a dark color', async () => {
        await render(
            <PrimaryLayout bgColor="#000000">
                <Text>Dark BG</Text>
            </PrimaryLayout>
        );

        expect(StatusBar).toHaveBeenCalledWith(
            expect.objectContaining({
                barStyle: 'light-content',
            }),
            undefined
        );
    });

    it('does not render StatusBar when the screen is not focused', async () => {
        mockUseIsFocused.mockReturnValue(false);
        jest.clearAllMocks();

        await render(
            <PrimaryLayout>
                <Text>Unfocused</Text>
            </PrimaryLayout>
        );

        expect(StatusBar).not.toHaveBeenCalled();
    });

    it('accepts custom background colors and styles', async () => {
        const { getByText } = await render(
            <PrimaryLayout bgColor="#123456" viewBg="#654321" edges="exceptBottom">
                <Text>Styled Layout</Text>
            </PrimaryLayout>
        );

        expect(getByText('Styled Layout')).toBeTruthy();
    });
});