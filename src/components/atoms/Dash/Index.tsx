import { Border } from './Styles';

export interface BorderProps {
  height?: string;
  width?: string;
  background?: string;
  children: React.ReactNode;
  styles?: React.CSSProperties;
}

const GradientBorder: React.FC<BorderProps> = ({ children, ...rest }) => {
  return (
    <Border {...rest}>
      {children}
    </Border>
  );
};

export default GradientBorder;
