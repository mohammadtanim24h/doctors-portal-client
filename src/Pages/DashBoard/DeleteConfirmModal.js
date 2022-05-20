import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { name, email } = deletingDoctor;

    const handleDelete = (email) => {
        fetch(`https://pacific-taiga-84729.herokuapp.com/doctor/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount === 1) {
                    toast.success(`Doctor ${name} was deleted successfully`);
                    refetch();
                    setDeletingDoctor(null);
                }
                console.log(data);
            });
    };
    return (
        <div>
            <input
                type="checkbox"
                id="delete-confirm-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">
                        Are you sure you want to delete doctor {name}?
                    </h3>
                    <p className="py-4">
                        You've been selected for a chance to get one year of
                        subscription to use Wikipedia for free!
                    </p>
                    <div className="modal-action">
                        <button
                            onClick={() => handleDelete(email)}
                            className="btn btn-sm bg-red-500 outline-0 border-0 text-white hover:bg-red-500 px-4"
                        >
                            Delete
                        </button>
                        <label
                            htmlFor="delete-confirm-modal"
                            className="btn btn-sm text-white"
                        >
                            Cancel
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;
