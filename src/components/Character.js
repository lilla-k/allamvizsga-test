import * as React from 'react';
import { useState } from 'react';

import Button from '@mui/material/Button';

const Character = ({name, details}) => {

    const [clicked, setClicked] = useState(false);

    return(
    <div>
        <div>{name}</div>
        <Button
        variant="contained"
        onClick={() => setClicked(!clicked)}
        >{clicked?"Show less": "Show more"}</Button>
        {clicked && <div>{details}</div>}
    </div>
    )
    
}

export default Character;