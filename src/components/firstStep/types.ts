import { IFormData } from './../../types';

export interface IFirstStepComponentProps {
    setStep: (value: boolean) => void;
    formData: IFormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}