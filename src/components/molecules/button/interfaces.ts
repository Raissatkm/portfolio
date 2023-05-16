import {  IconInterface } from '../../atoms/icon/interfaces'

export interface ButtonInterface {
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
  isDisabled?: boolean;
  label?: string;
  IconProps?: IconInterface;
}