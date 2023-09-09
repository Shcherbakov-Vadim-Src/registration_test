import styled from 'styled-components';

const textStyles = `
    color: #CFD2E3;
    font-family: 'Exo 2', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const InputWrapper = styled.input`
    ${textStyles}
    width: -webkit-fill-available;
    max-height: 40px;
    border: none;
    border-radius: 4px;
    background: #1E1F27;
    margin-top: 10px;
    padding: 12px 0 11px 10px;
`;

export const Lable = styled.label`
    ${textStyles}
    font-weight: 400;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: -webkit-fill-available;
    margin-bottom: 40px;
    max-height: 85px;
`;

export const NotificationText = styled.div`
    ${textStyles}
    color: #777B8E;
    font-size: 12px;
    font-weight: 400;
    margin-top: 4px;
`;

export const WarningText = styled.div`
    ${textStyles}
    color: #FF7549;
    font-size: 12px;
    font-weight: 400;
    margin-top: 4px;
`;

export const NotificationWrapper = styled.div`
    height: 14px;
`;