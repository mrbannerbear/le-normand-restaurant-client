/* eslint-disable react/prop-types */
const CheckReservation = ({reservedBookings}) => {
    console.log(reservedBookings)
    return (
        <div className="my-6 w-96 mx-auto p-8 bg-olive-50-transparent">
            { reservedBookings.length != 0 ?
                reservedBookings.map(each => (<>
                {
                    each.name
                }
                </>))
                :
                <span className="text-center w-full">You have no reservations currently.</span>
            }
        </div>
    );
};

export default CheckReservation;