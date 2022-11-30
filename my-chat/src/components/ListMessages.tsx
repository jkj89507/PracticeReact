import { List, ListItem, ListItemText } from '@mui/material';
import { height, maxHeight } from '@mui/system';
import React, { FC } from 'react';

interface ListMessagesProps {
    message: Array<string>
}

export const ListMessages: FC<ListMessagesProps> = (props): JSX.Element => {
    return(
        <List sx={{
            position: 'absolute',
            bgcolor: '#dedfe0', 
            width: '50%', 
            margin: '0 auto auto 25%',
            height: '90vh',
            // maxWidth: '400',
            // maxHeight: '500',
            overflow: "scroll"
        }}>
            {
                props.message.map((value) => (
                    <ListItem
                        key={props.message.lastIndexOf(value)}
                        disableGutters
                        sx={{
                            bgcolor: props.message.lastIndexOf(value) % 2 === 0 ? "green" : "blue"
                        }}
                    >
                        <ListItemText
                            sx={{
                                textAlign: props.message.lastIndexOf(value) % 2 === 0 ? 'right' : 'left'
                            }}
                            primary={value}
                        />
                    </ListItem>
                ))
            }
        </List>
    );
}
