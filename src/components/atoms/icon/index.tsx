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

const Icon = ({ name, ...props }: IconProps) => {
  const Icon = icons[name];

  if (!Icon) return null;

  return (
    <StyledIcon name={name} {...props}>
      <Icon />
    </StyledIcon>
  );
};

export default Icon;
