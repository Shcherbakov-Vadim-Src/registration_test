import { IFormData } from './../../types';

export interface IFirstStepComponentProps {
    setStep: (value: boolean) => void;
    formData: IFormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}