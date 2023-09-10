import { Dispatch, SetStateAction } from 'react';
import { IFormData } from './../../types';

export interface ISecondStepComponentProps {
    setStep: Dispatch<SetStateAction<boolean>>;
    formData: IFormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}