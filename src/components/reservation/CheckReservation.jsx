/* eslint-disable react/prop-types */
const CheckReservation = ({reservedBookings}) => {
    console.log(reservedBookings)
    return (
        <div className="my-6 w-96 mx-auto p-8 bg-olive-50-transparent text-center">
            <h2 className="text-center">{reservedBookings[0]?.name}</h2>
           {reservedBookings.length > 0 && <span> You have reservations on
                </span>} { reservedBookings.length != 0 ?
                reservedBookings.map(each => (<p key={each?._id}>
                {
                   each?.date
                } <span className="ml-1">for</span> {
                    each?.people 
                } <span className="mx-1">guests.</span>
                {
                    <span>({each?.service})</span>
                }
                </p>))
                :
                <span className="text-center w-full">You have no reservations currently.</span>
            }
        </div>
    );
};

export default CheckReservation;