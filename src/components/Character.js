import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';

const Character = ({name}) => {

    const [clicked, setClicked] = useState(false);

    return(
    <div>
        <div>{name}</div>
        <Button
        variant="contained"
        onClick={() => setClicked(!clicked)}
        >{clicked?"Show less": "Show more"}</Button>
    </div>
    )
    
}

export default Character;