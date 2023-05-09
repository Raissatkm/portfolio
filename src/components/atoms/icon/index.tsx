import { IconType } from 'react-icons';
import { IconProps } from './interfaces';
import { StyledIcon } from './styles';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const icons: { [key: string]: IconType } = {
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
    <StyledIcon name={name} size={size} color={color}>
      <Icon />
    </StyledIcon>
  );
};

export default Icon;