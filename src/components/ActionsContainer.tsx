import {Box} from '@material-ui/core';
import React from 'react';

export default function ActionsContainer({children}: { children?: any }): React.ReactElement {
    return <Box display='flex'
                justifyContent='flex-end'
                p={1}>
        {children}
    </Box>

}
