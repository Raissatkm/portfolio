export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  primary?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}