/* eslint-disable react/prop-types */
const CheckReservation = ({reservedBookings}) => {
    console.log(reservedBookings)
    return (
        <div className="min-h-screen my-6">
            {
                reservedBookings.map(each => (each.name))
            }
            hello
        </div>
    );
};

export default CheckReservation;