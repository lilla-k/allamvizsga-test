import Button from '@mui/material/Button';
import { useState } from 'react';
import LoadingMask from './LoadingMask';

const Subscription = ({onSubscribed}) => {

    const [inputVal, setInputVal] = useState("");
    const [loading, setLoading] = useState(false);
    const [subscribed, setSubscribed] = useState(false);

    const postEmail = async() => {
        const response = await fetch("https://demoapi.com/api/series/newsletter",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"email": inputVal})
        });
        console.log(response.status);

        if(response.status===201){
            setSubscribed(true);
            setLoading(false);
        }
        onSubscribed();
    }

    const onClickhandler = () => {
        setLoading(true);
        postEmail();
    }


    return(
        <div>
            <h2>Subscribe to our newsletter</h2>
            {!loading && !subscribed && <input
            type="email"
            value={inputVal}
            onChange={(e)=>setInputVal(e.target.value)}
            />}
            {!loading && !subscribed && <Button
                variant="text"
                disabled={inputVal.includes("@")&inputVal.includes(".")?false:true}
                onClick= {onClickhandler}
            >Submit</Button>}
            {loading && !subscribed && <LoadingMask/>}
            {subscribed && !loading && <div>Subscribed</div>}
        </div>
    )
}

export default Subscription;