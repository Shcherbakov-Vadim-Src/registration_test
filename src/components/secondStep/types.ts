import { Dispatch, SetStateAction } from 'react';
import { IFormData } from './../../types';

export interface ISecondStepComponentProps {
    setStep: Dispatch<SetStateAction<boolean>>;
    formData: IFormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}