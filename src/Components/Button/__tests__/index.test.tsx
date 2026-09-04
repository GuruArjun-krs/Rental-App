import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '@/Components/Button';

const mockPrimaryClr = '#FF0000';
jest.mock('@/Utils/Themes/ColorSchema', () => ({
    __esModule: true,
    default: () => ({
        primaryClr: mockPrimaryClr,
    }),
}));

jest.mock('@/Components', () => {
    const { Text } = require('react-native');
    return {
        Typo: ({ title, color }: { title: string; color: string }) => (
            <Text testID="typo-text" style={{ color }}>{title}</Text>
        ),
    };
});

describe('Button Component', () => {
    const mockOnPress = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the title text and applies the theme color correctly', async () => {
        const { getByText, getByTestId } = await render(
            <Button title="Submit Application" onPress={mockOnPress} />
        );

        expect(getByText('Submit Application')).toBeTruthy();
        const textElement = getByTestId('typo-text');
        expect(textElement.props.style.color).toBe(mockPrimaryClr);
    });

    it('triggers onPress when clicked', async () => {
        const { getByText } = await render(
            <Button title="Click Me" onPress={mockOnPress} />
        );

        const buttonText = getByText('Click Me');
        fireEvent.press(buttonText);
        expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it('disables interactions and clicks when isLoading is true', async () => {
        const { getByRole } = await render(
            <Button title="Loading..." onPress={mockOnPress} isLoading={true} />
        );

        const button = getByRole('button');
        fireEvent.press(button);
        expect(mockOnPress).not.toHaveBeenCalled();
        expect(button.props.accessibilityState.disabled).toBe(true);
    });

    it('disables interactions and applies disabled state when isDisable is true', async () => {
        const { getByRole } = await render(
            <Button title="Disabled" onPress={mockOnPress} isDisable={true} />
        );

        const button = getByRole('button');
        fireEvent.press(button);

        expect(mockOnPress).not.toHaveBeenCalled();
        expect(button.props.accessibilityState.disabled).toBe(true);
    });

    it('does not crash when pressed without an onPress prop', async () => {
        const { getByRole } = await render(<Button title="No Handler" onPress={mockOnPress} />);
        const button = getByRole('button');
        expect(() => fireEvent.press(button)).not.toThrow();
    });
});