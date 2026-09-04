import React from 'react';
import { render } from '@testing-library/react-native';
import { styles } from '../styles';
import { Typo } from '@/Components';

const mockPrimaryTextColor = '#123456';
jest.mock('@/Utils/Themes/ColorSchema', () => ({
    __esModule: true,
    default: () => ({
        primaryTextColor: mockPrimaryTextColor,
    }),
}));

describe('Typo Component', () => {
    it('renders the title text correctly', async () => {
        const { getByText } = await render(<Typo title="Hello World" />);
        expect(getByText('Hello World')).toBeTruthy();
    });

    it('applies the default variant and default color when props are omitted', async () => {
        const { getByText } = await render(<Typo title="Default Text" />);
        const textElement = getByText('Default Text');

        expect(textElement.props.style).toEqual(
            expect.arrayContaining([
                styles.bodyMediumTertiary,
                undefined,
                { color: mockPrimaryTextColor },
            ])
        );
    });

    it('applies a custom variant and custom color when provided', async () => {
        const customColor = '#FF5733';
        const { getByText } = await render(
            <Typo title="Custom Text" variant="mainHeading" color={customColor} />
        );
        const textElement = getByText('Custom Text');

        expect(textElement.props.style).toEqual(
            expect.arrayContaining([
                styles.mainHeading,
                undefined,
                { color: customColor },
            ])
        );
    });

    it('merges extra custom styles passed via the style prop', async () => {
        const customStyle = { marginTop: 10 };
        const { getByText } = await render(
            <Typo title="Styled Text" style={customStyle} />
        );
        const textElement = getByText('Styled Text');

        expect(textElement.props.style).toEqual(
            expect.arrayContaining([
                styles.bodyMediumTertiary,
                customStyle,
                { color: mockPrimaryTextColor },
            ])
        );
    });
});