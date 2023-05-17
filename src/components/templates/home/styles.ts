import styled from 'styled-components';
import { HomeInterface } from './interfaces';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image';
import Button from '../../molecules/button';

export const HomeComponent = styled.body<HomeInterface>`
background-color: #191B1A;
`
export const TextComponent = styled(Text)``;
export const ImageComponent = styled(Image)``;
export const ButtonComponent = styled(Button)``;