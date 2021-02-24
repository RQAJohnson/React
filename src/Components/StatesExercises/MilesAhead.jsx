import {useState} from 'react';

const MilesAhead = () => { 
    const [step, setStep] = useState(0);

    function increment(){
        console.log(step)
        setStep(prev => prev+1);
    }

 return(
    <>
        <p>You've worked out for {step} days!</p>
        <br/>
        <button onClick={increment}>Add another workout </button>
        <button onClick={() => setStep(s => s-1)}> Missed a day</button>
    </>
);

}

export default MilesAhead;

