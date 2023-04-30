import React from 'react';
import qzone1 from "../../../assets/qZone1.png"
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"
const Qzone = () => {
    return (
        <div className='bg-dark py-4 px-2 rounded-3'>
            <h3 className='text-white text-center'>QZone</h3>
            <img className='w-100' src={qzone1} alt="" />
            <img className='w-100' src={qzone2} alt="" />
            <img className='w-100'src={qzone3} alt="" />
        </div>
    );
};

export default Qzone;