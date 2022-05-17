import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "./BookingModal/BookingModal";
import BookService from "./BookService/BookService";

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    // eikhane treatment state ta set kora hoise karon amake eikhan theke modal e treatment data pathaite hobe. tai modal e data jate easily pathaite pari eijonno eikhane treatment state ta declare kore setTreatment ta BookService e pathai disi. jate BookService er bhitorer label e click korle treatment state change hoy and modal eo updated data ta paoa jay. ar modal ta prottekta bookservice er moddhe rakha hoise na karon jodi prottekta service e rakha hoy tahole beshi service hoye gele shudhu shudhu modal toiri hobe. eijonno central ekta jaygay BookingModal component ta rakha hoise. ekhon je button e click kora hobe shei onujai modal er data dekhabe.

    const formattedDate = date && format(date, "PP");

    // data fetch using react query
    const {
        data: services,
        isLoading,
        refetch,
    } = useQuery(["available", formattedDate], () =>
        fetch(`https://pacific-taiga-84729.herokuapp.com/available?date=${formattedDate}`).then(
            (res) => res.json()
        )
    );

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <h3 className="text-xl text-secondary text-center">
                Available Appointments on {date && format(date, "PP")}
            </h3>{" "}
            {/* eikhane date er value thaklei date ta format korte disi. karon jodi ami date select korar por abar oitate click kori tokhon date ta unselect hoye giye date er value undefined hoye jay and format korte giye error aisha pore. tai condition diye disi je date er value thaklei date format korbe nahole korbe na.*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-24">
                {services?.map((service) => (
                    <BookService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></BookService>
                ))}
            </div>
            {treatment && (
                <BookingModal
                    refetch={refetch}
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            )}
        </div>
    );
};

export default AvailableAppointments;
