import styled from 'styled-components';

const primaryStyles = `
    width: 300px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 4px;
    background: #855AFF;
    outline: none;
    border: none;
    color: #FFFFFF;
`;

const secondaryStyles = `
    color: #855AFF;
    padding: 0;
    border: none;
    background-color: transparent;
`;

const disabledStyles = `
    touch-action: none;
    opacity: 0.75;
`;

export const ButtonWrapper = styled.button<{ type: string, disabled: boolean }>`
    ${props => props.type === 'primary' ? primaryStyles : secondaryStyles}
    ${props => props.disabled && disabledStyles}
    cursor: ${props => props.disabled ? `auto` : `pointer`};
    color: ${props => props.disabled && `#adadaf`};
    text-align: center;
    font-family: 'Exo 2', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: ${props => props.type === 'primary' ? `40px;` : `20px`}
`;