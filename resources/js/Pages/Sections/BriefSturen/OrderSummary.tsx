import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/shadcn/ui/button";
import spinner from "../../../../assets/spinner.svg";
import { Switch } from "@/shadcn/ui/switch";

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
    const [switch1Checked, setSwitch1Checked] = useState(false); // State for the first switch
    const [switch2Checked, setSwitch2Checked] = useState(false); // State for the second switch

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
        <div className="mx-6">
            <div className="max-w-4xl mx-auto bg-white border-gray-200 border rounded-lg p-8 shadow-lg h-full min-h-[200px]">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Bestellingsoverzicht{" "}
                </h2>
                <div className="space-y-6 text-lg">
                    {overviewData.fileUploads.length > 0 && (
                        <div className="flex flex-col border-b border-gray-200 pb-4">
                            <span className="text-black font-bold">
                                Bestelnummer:
                            </span>
                            <span className="text-gray-700">
                                {overviewData.fileUploads[0].user_id}
                            </span>
                        </div>
                    )}
                    {latestRecipient && (
                        <>
                            <div className="flex flex-col border-b border-gray-200 pb-4">
                                <span className="text-black font-bold">
                                    Ontvanger Naam:
                                </span>
                                <span className="text-gray-700">
                                    {latestRecipient.recipient_name}
                                </span>
                            </div>
                            <div className="flex flex-col border-b border-gray-200 pb-4">
                                <span className="text-black font-bold">
                                    Leveringsadres:
                                </span>
                                <span className="text-gray-700">
                                    {latestRecipient.recipient_address}
                                </span>
                            </div>
                            <div className="flex flex-col border-b border-gray-200 pb-4">
                                <span className="text-black font-bold">
                                    Levertijd:
                                </span>
                                <span className="text-gray-700">
                                    {latestRecipient.delivery_option ===
                                    "Regulier"
                                        ? "3-5 werkdagen"
                                        : latestRecipient.delivery_option ===
                                          "Spoed"
                                        ? "1-2 werkdagen"
                                        : "2-3 werkdagen"}
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-black font-bold">
                                    Totale Kosten:
                                </span>
                                <span className="text-gray-900 font-semibold text-xl">
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

            {/* Terms & Conditions */}
            <div className="mt-10">
                <p className="mb-5 text-2xl font-semibold">
                    Wettelijke bepalingen en voorwaarden
                </p>
                <div className="flex items-center mb-4">
                    <Switch
                        checked={switch1Checked}
                        onCheckedChange={setSwitch1Checked}
                    />
                    <p className="ml-4 text-lg">
                        Ja, ik aanvaard de Algemene Voorwaarden en Privacybeleid
                    </p>
                </div>
                <div className="flex items-center">
                    <Switch
                        checked={switch2Checked}
                        onCheckedChange={setSwitch2Checked}
                    />
                    <p className="ml-4 text-lg">
                        Ja, ik ben me ervan bewust dat ik er verantwoordelijk
                        voor ben dat de brief voldoet aan alle wettelijke eisen
                        voor het beoogde gebruik.
                    </p>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-8">
                <Button variant="back" onClick={onBack} disabled={isPaying}>
                    Terug
                </Button>
                <Button
                    variant="next"
                    type="submit"
                    onClick={handlePay}
                    disabled={!switch1Checked || !switch2Checked || isPaying} // Disable unless both switches are checked
                >
                    Betaal
                </Button>
            </div>
        </div>
    );
};

export default OrderSummary;
