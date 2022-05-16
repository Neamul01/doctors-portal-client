import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    const formatedDate = format(date, 'PP');

    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.mobile.value
        }
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-left">
                    <div className='flex items-center'>
                        <label htmlFor="booking-modal" className="btn my-2 mr-2 text-xl btn-circle absolute right-2 top-2">x</label>
                        <h3 className="font-bold text-xl text-secondary">{name} </h3>
                    </div>

                    <form onSubmit={handleSubmit} className=' mt-9'>
                        <input type="text" value={format(date, 'PP')} disabled className="input my-3 input-bordered w-full max-w-full" />
                        <select name='slot' type='select' className="input my-3 input-bordered w-full max-w-full">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input my-3 input-bordered w-full max-w-full" />
                        <input name='mobile' type="number" placeholder="Mobile Number" className="input my-3 input-bordered w-full max-w-full" />
                        <input name='email' type="email" disabled value={user.email || ' '} className="input mt-3 input-bordered w-full max-w-full" />
                        <input type="submit" placeholder="Submit"
                            className="btn btn-accent input mt-3 input-bordered w-full max-w-full"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;