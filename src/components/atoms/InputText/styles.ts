
import styled from 'styled-components';

import { InputTextInterface } from './interfaces';


export const InputTextComponent = styled.input.attrs(({ type }: InputTextInterface) => ({
    type,
}))<InputTextInterface> `

    font-size: 15px;
    width: 389px;
    height: 70px;
    display: flex;
    border: 1px solid;
   

`;