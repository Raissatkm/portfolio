import { IconSize, IconColor } from "./styles";

export interface IconProps {
  name: string;
  size: keyof typeof IconSize;
  color: keyof typeof IconColor;
}