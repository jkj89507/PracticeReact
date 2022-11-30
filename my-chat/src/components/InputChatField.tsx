import { TextField } from '@mui/material';
import React, { FC } from 'react';

interface InputChatFieldProps {
    defaultText?: string
    style?: React.CSSProperties
}

export const InputChatFileld: FC<InputChatFieldProps> = (props): JSX.Element => {
    return(
        <TextField defaultValue={props.defaultText} style={props.style}/>
    );
}