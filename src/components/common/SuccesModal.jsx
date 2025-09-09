import { X } from "lucide-react";
import Button from "./Button";

const SuccesModal = ({ setIsModalOpen, subTotal, title, subTitle, alertMessage }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white p-8 rounded-xl w-[400px] relative">
                <button
                    className="absolute top-4 right-4 text-xl font-bold"
                    onClick={() => setIsModalOpen(false)}
                >
                    <X />
                </button>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="mb-6">{subTitle}${subTotal.toFixed(2)}.</p>
                <Button
                    value="Confirm Purchase"
                    colorClass="bg-green-500 text-white w-full"
                    onClick={() => alert(alertMessage)}
                />
            </div>
        </div>
    );
};

export default SuccesModal;
