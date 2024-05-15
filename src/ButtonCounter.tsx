import React, {useState} from 'react';
import Button from './ButtonComponent';

const ButtonCounter = () => 
    {
    const [clicksCount, setClicksCount] = useState(0);

    const handleIncrement = () =>
    {
        setClicksCount(clicksCount +1);
    };

    const handleDecrement = () =>
        {
            setClicksCount(clicksCount -1);
        };

    return(
        <>
        <Button color='red' onClick={handleIncrement}>Increment</Button><br></br>
        <Button color='blue' onClick={handleDecrement}>Decrement</Button><br></br>
        You've clicked me {clicksCount} times
        </>
    );
};
export default ButtonCounter;