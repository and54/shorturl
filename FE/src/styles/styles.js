import styled from 'styled-components';
import { colors } from './colors';

export const Card = styled('div')({
    padding: '20px 60px',
    background: colors.back,
    borderRadius: 6,
    color: colors.fontColor,
    fontSize: 20,
    flexDirection: 'column'
});

export const ErrorCard = styled(Card)({
    background: colors.secondary,
});

export const ElemContainer = styled('div')({
    margin: 6,
    fontSize: 16,
});

export const InfoText = styled(ElemContainer)({
    fontSize: 12,
    color: 'white',
});

export const TextField = styled('input')({
    padding: '8px 16px',
    border: 'none',
    borderRadius: 4,
    color: colors.back,
    fontSize: 14,
});

export const ButtonContainer = styled('div')({
    display: 'flex',
    justifyContent: 'right',
});

export const Button = styled('button')({
    padding: '8px 16px',
    borderRadius: 4,
    background: colors.primary,
    color: 'white',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    ':hover': {
        background: colors.secondary,
    }
});