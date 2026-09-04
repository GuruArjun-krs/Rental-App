import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import Input from '@/Components/Input';

const mockColors = {
    errorClr: '#FF0000',
    placeHolderColor: '#888888',
    white: '#FFFFFF',
    primaryTextColor: '#000000',
    borderColor: '#CCCCCC',
};

jest.mock('@/Utils/Themes/ColorSchema', () => ({
    __esModule: true,
    default: () => mockColors,
}));

jest.mock('@/Components', () => {
    const { Text } = require('react-native');
    return {
        Typo: ({ title, color, variant }: { title: string; color?: string; variant?: string }) => (
            <Text testID={`typo-${variant || 'default'}`} style={{ color }}>{title}</Text>
        ),
    };
});

jest.mock('@/Assets/Svg', () => {
    const { View } = require('react-native');
    return {
        SearchIcon: () => <View testID="search-icon" />,
        EyeOpenIcon: () => <View testID="eye-open-icon" />,
        EyeCloseIcon: () => <View testID="eye-close-icon" />,
    };
});

describe('Input Component', () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders placeholder and initial value correctly', async () => {
        const { getByPlaceholderText } = await render(
            <Input
                name="email"
                value="test@example.com"
                onChange={mockOnChange}
                placeHolderText="Enter your email"
            />
        );

        const input = getByPlaceholderText('Enter your email');
        expect(input).toBeTruthy();
        expect(input.props.value).toBe('test@example.com');
    });

    it('renders label and mandatory asterisk when provided', async () => {
        const { getByText } = await render(
            <Input
                name="username"
                label="Username"
                isMandatory={true}
                value=""
                onChange={mockOnChange}
            />
        );

        expect(getByText('Username')).toBeTruthy();
        expect(getByText('*')).toBeTruthy();
    });

    it('triggers onChange when text is typed', async () => {
        const { getByPlaceholderText } = await render(
            <Input
                name="searchQuery"
                value=""
                onChange={mockOnChange}
                placeHolderText="Search..."
            />
        );

        const input = getByPlaceholderText('Search...');
        fireEvent.changeText(input, 'New Value');

        expect(mockOnChange).toHaveBeenCalledWith('New Value');
    });

    it('triggers onBlur with the input name when blurred', async () => {
        const { getByPlaceholderText } = await render(
            <Input
                name="password"
                value=""
                onChange={mockOnChange}
                onBlur={mockOnBlur}
                placeHolderText="Password"
            />
        );

        const input = getByPlaceholderText('Password');
        fireEvent(input, 'blur');

        expect(mockOnBlur).toHaveBeenCalledWith('password');
    });

    it('renders search icon when isSearch is true', async () => {
        const { getByTestId } = await render(
            <Input
                name="search"
                isSearch={true}
                value=""
                onChange={mockOnChange}
            />
        );

        expect(getByTestId('search-icon')).toBeTruthy();
    });

    it('toggles password visibility when secureTextEntry eye icon is pressed', async () => {
        const { getByTestId, queryByTestId } = await render(
            <Input
                name="password"
                secureTextEntry={true}
                value="secret"
                onChange={mockOnChange}
            />
        );

        const closeIcon = getByTestId('eye-close-icon');
        expect(closeIcon).toBeTruthy();

        await act(async () => {
            fireEvent.press(closeIcon.parent!);
        });

        expect(getByTestId('eye-open-icon')).toBeTruthy();
        expect(queryByTestId('eye-close-icon')).toBeNull();
    });

    it('renders error message and applies error border when error prop is passed', async () => {
        const { getByText, getByPlaceholderText } = await render(
            <Input
                name="email"
                value=""
                onChange={mockOnChange}
                error="Invalid email address"
                placeHolderText="Email"
            />
        );

        expect(getByText('Invalid email address')).toBeTruthy();
        const input = getByPlaceholderText('Email');
        expect(input.props.style).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ borderColor: mockColors.errorClr }),
            ])
        );
    });
});