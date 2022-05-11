import React from 'react';
import doctor from '../../../assets/images/doctor.png';
// import doctorbg from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center bg-appointment mx-0 mt-40'>
            <div className='flex-1 mt-[-130px]'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1 text-left'>
                <h2 className="capitalize text-xl text-primary">appointment</h2>
                <h3 className="text-3xl text-white my-6">Make an appointment Today</h3>
                <p className='text-white pr-40'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            </div>
        </section>
    );
};

export default MakeAppointment;