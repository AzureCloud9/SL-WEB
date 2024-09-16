import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/shadcn/ui/button";
import spinner from "../../../../assets/spinner.svg";

interface OverviewData {
    fileUploads: { user_id: string }[];
    recipients: {
        recipient_name: string;
        recipient_address: string;
        delivery_option: string;
        user_price: string;
    }[];
    senders: any[];
}

interface OrderSummaryProps {
    onBack: () => void;
    onPay: () => void; // Change this to match your actual type if it's not void
    sessionDetails: any;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
    onBack,
    onPay,
    sessionDetails,
}) => {
    const [overviewData, setOverviewData] = useState<OverviewData>({
        fileUploads: [],
        recipients: [],
        senders: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isPaying, setIsPaying] = useState(false); // New state to manage payment loading

    const fetchData = () => {
        setLoading(true);
        axios
            .get("/overview")
            .then((response) => {
                setOverviewData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handlePay = () => {
        const latestRecipient =
            overviewData.recipients.length > 0
                ? overviewData.recipients[overviewData.recipients.length - 1]
                : null;

        if (!latestRecipient) {
            setError("No recipient data available for payment.");
            return;
        }

        const orderData = {
            description: `Order for ${latestRecipient.recipient_name}`,
            order_id: overviewData.fileUploads[0].user_id,
        };

        setIsPaying(true); // Set loading state for payment
        axios
            .post("/create-payment", orderData)
            .then((response) => {
                window.location.href = response.data._links.checkout.href;
            })
            .catch((error) => {
                setError("Payment initiation failed.");
                console.error("Error creating payment:", error);
                setIsPaying(false); // Reset loading state if payment fails
            });
    };

    if (loading) {
        return <img src={spinner} alt="Loading..." />;
    }

    if (error) {
        return <p>There was an error loading the data: {error}</p>;
    }

    const latestRecipient =
        overviewData.recipients.length > 0
            ? overviewData.recipients[overviewData.recipients.length - 1]
            : null;

    return (
        <div>
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 h-full min-h-[200px]">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Bestellingsoverzicht{" "}
                </h2>
                <div className="space-y-4">
                    {overviewData.fileUploads.length > 0 && (
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">
                                Bestelnummer:
                            </span>
                            <span className="text-gray-900">
                                {overviewData.fileUploads[0].user_id}
                            </span>
                        </div>
                    )}
                    {latestRecipient && (
                        <>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 font-medium">
                                    Leveringsadres:
                                </span>
                                <span className="text-gray-900">
                                    {latestRecipient.recipient_address}
                                    
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 font-medium">
                                    Levertijd:
                                </span>
                                <span className="text-gray-900">
                                    {latestRecipient.delivery_option ===
                                    "Regulier"
                                        ? "3-5 werkdagen"
                                        : latestRecipient.delivery_option ===
                                          "Spoed"
                                        ? "1-2 werkdagen"
                                        : "2-3 werkdagen"}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 font-medium">
                                    Totale Kosten:
                                </span>
                                <span className="text-gray-900">
                                    €
                                    {parseFloat(
                                        latestRecipient.user_price
                                    ).toFixed(2)}
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <Button variant="back" onClick={onBack} disabled={isPaying}>
                    Terug
                </Button>
                <Button variant="next" type="submit" onClick={handlePay} disabled={isPaying}>
                    Betaal
                </Button>
            </div>
        </div>
    );
};

export default OrderSummary;