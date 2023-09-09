export interface IButtonProps {
    type: string;
    name: string;
    disabled?: boolean;
    onClick: () => void;
  }
  
  export enum ButtonType {
    primary = 'primary',
    secondary = 'secondary'
  }