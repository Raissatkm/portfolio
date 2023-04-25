import { IconColor, IconSize, StyledIcon } from './Styles';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

type IconType = keyof typeof icons;

interface IconProps {
  name: IconType;
  size?: keyof typeof IconSize;
  color?: keyof typeof IconColor;
}

const icons = {
  email: FaEnvelope,
  phone: FaPhone,
  location: FaMapMarkerAlt,
  linkedin: FaLinkedin,
  github: FaGithub,
  instagram: FaInstagram
};

const Icon = ({ name, size = 'medium', color = 'black' }: IconProps) => {
  const Icon = icons[name];

  if (!Icon) return null;

  return (
    <StyledIcon size={size} color={color}>
      <Icon />
    </StyledIcon>
  );
};

export default Icon;
