import { WrapperContainer } from './styles';
import { IWrapperProps } from './types';

const Wrapper = ({ children }: IWrapperProps) => {
    return (
      <WrapperContainer>
        {children}
      </WrapperContainer>
    );
  }
  
  export default Wrapper;