import React from 'react';

import { TextComponent } from './styles';

import { TextInterface } from './interfaces';

export default function Text (props: TextInterface) {
    return <TextComponent {...props} />
}