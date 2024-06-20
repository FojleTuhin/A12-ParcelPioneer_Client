
import Confetti from 'react-confetti'


const Success = () => {


    return (
        <div>
            <Confetti />

            <div className='h-full'>
                <p className='font-bold justify-center items-center flex'>Your payment successfully done</p>
            </div>
        </div>
    );
};

export default Success;