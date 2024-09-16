import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
} from "lucide-react";
import { Badge } from "@/shadcn/ui/badge";
import { Button } from "@/shadcn/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/shadcn/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/shadcn/ui/dropdown-menu";
import { Input } from "@/shadcn/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/shadcn/ui/sheet";

interface CompletedOrder {
    user_id: string;
    bestelnummer: string | null;
    recipient_name: string;
    recipient_address: string;
    recipient_postcode: string;
    recipient_city: string;
    recipient_country: string;
    delivery_option: string;
    user_price: string;
    file_name: string;
    file_path: string;
    created_at: string;
    updated_at: string;
}

interface Sender {
    user_id: string;
    bestelnummer: string;
    sender_first_name: string;
    sender_last_name: string;
    email: string;
}

interface DashboardProps extends PageProps {
    completedOrders: CompletedOrder[];
    senders: Sender[];
}

const ITEMS_PER_PAGE = 10;

export default function Dashboard({
    auth,
    completedOrders,
    senders = [],
}: DashboardProps) {
    const [category, setCategory] = useState<string>("all");
    const [search, setSearch] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);

    const handleDownload = (fileName: string) => {
        window.location.href = `/download/${fileName}`;
    };

    const sortAndFilterOrders = () => {
        const filtered = completedOrders
            .filter(
                (order) =>
                    order.recipient_name
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    order.bestelnummer
                        ?.toLowerCase()
                        .includes(search.toLowerCase()) ||
                    order.recipient_address
                        .toLowerCase()
                        .includes(search.toLowerCase())
            )
            .sort((a, b) => b.user_id.localeCompare(a.user_id));
        return filtered;
    };

    const sortAndFilterSenders = () => {
        const filtered = senders
            .filter(
                (sender) =>
                    sender.sender_first_name
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    sender.sender_last_name
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    sender.bestelnummer
                        .toLowerCase()
                        .includes(search.toLowerCase())
            )
            .sort((a, b) => b.user_id.localeCompare(a.user_id));
        return filtered;
    };

    const getPaginatedData = (data: any[]) => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return data.slice(startIndex, endIndex);
    };

    const filteredOrders = sortAndFilterOrders();
    const filteredSenders = sortAndFilterSenders();

    const paginatedOrders = getPaginatedData(filteredOrders);
    const paginatedSenders = getPaginatedData(filteredSenders);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <div className="hidden border-r bg-muted/40 md:block">
                    <div className="flex h-full max-h-screen flex-col gap-2">
                        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                            <a
                                href="/"
                                className="flex items-center gap-2 font-semibold"
                            >
                                <Package2 className="h-6 w-6" />
                                <span className="">SwiftLetters</span>
                            </a>
                            <Button
                                variant="main"
                                size="icon"
                                className="ml-auto h-8 w-8"
                            >
                                <Bell className="h-4 w-4" />
                                <span className="sr-only">
                                    Toggle notifications
                                </span>
                            </Button>
                        </div>
                        <div className="flex-1">
                            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                                <a
                                    href="#"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary"
                                >
                                    <Home className="h-4 w-4" />
                                    Dashboard
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <ShoppingCart className="h-4 w-4" />
                                    Orders
                                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                        6
                                    </Badge>
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary"
                                >
                                    <Package className="h-4 w-4" />
                                    Products{" "}
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <Users className="h-4 w-4" />
                                    Customers
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <LineChart className="h-4 w-4" />
                                    Analytics
                                </a>
                            </nav>
                        </div>
                        <div className="mt-auto p-4"></div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="main"
                                    size="icon"
                                    className="shrink-0 md:hidden"
                                >
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">
                                        Toggle navigation menu
                                    </span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="flex flex-col">
                                <nav className="grid gap-2 text-lg font-medium">
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 text-lg font-semibold"
                                    >
                                        <Package2 className="h-6 w-6" />
                                        <span className="sr-only">
                                            Acme Inc
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                    >
                                        <Home className="h-5 w-5" />
                                        Dashboard
                                    </a>
                                    <a
                                        href="#"
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                                    >
                                        <ShoppingCart className="h-5 w-5" />
                                        Orders
                                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                            6
                                        </Badge>
                                    </a>
                                    <a
                                        href="#"
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                    >
                                        <Package className="h-5 w-5" />
                                        Products
                                    </a>
                                    <a
                                        href="#"
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                    >
                                        <Users className="h-5 w-5" />
                                        Customers
                                    </a>
                                    <a
                                        href="#"
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                    >
                                        <LineChart className="h-5 w-5" />
                                        Analytics
                                    </a>
                                </nav>
                                <div className="mt-auto">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                Upgrade to Pro
                                            </CardTitle>
                                            <CardDescription>
                                                Unlock all features and get
                                                unlimited access to our support
                                                team.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button
                                                size="default"
                                                className="w-full"
                                            >
                                                Upgrade
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </SheetContent>
                        </Sheet>
                        <div className="w-full flex-1">
                            <form>
                                <div className="relative">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Search..."
                                        className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                    />
                                </div>
                            </form>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="secondary"
                                    size="icon"
                                    className="rounded-full"
                                >
                                    <CircleUser className="h-5 w-5" />
                                    <span className="sr-only">
                                        Toggle user menu
                                    </span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>
                                    My Account
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </header>
                    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                        <div className="flex items-center">
                            <h1 className="text-lg font-semibold md:text-2xl">
                                Dashboard
                            </h1>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <button
                                    className={`mr-4 ${
                                        category === "all" ? "font-bold" : ""
                                    }`}
                                    onClick={() => setCategory("all")}
                                >
                                    Show All
                                </button>
                                <button
                                    className={`mr-4 ${
                                        category === "orders" ? "font-bold" : ""
                                    }`}
                                    onClick={() => setCategory("orders")}
                                >
                                    Completed Orders
                                </button>
                                <button
                                    className={`${
                                        category === "senders"
                                            ? "font-bold"
                                            : ""
                                    }`}
                                    onClick={() => setCategory("senders")}
                                >
                                    Senders
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            {category !== "senders" &&
                                paginatedOrders.length > 0 && (
                                    <table className="min-w-full divide-y divide-gray-200 mb-8">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    User ID
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Bestelnummer
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Recipient Name
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Address
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Price
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Delivery Option
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    File Name
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Created At
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Download
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {paginatedOrders.map((order) => (
                                                <tr key={order.user_id}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {order.user_id}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {order.bestelnummer}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {order.recipient_name}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {
                                                            order.recipient_address
                                                        }
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        €
                                                        {parseFloat(
                                                            order.user_price
                                                        ).toFixed(2)}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {order.delivery_option}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {order.file_name}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {new Date(
                                                            order.created_at
                                                        ).toLocaleDateString()}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        <button
                                                            onClick={() =>
                                                                handleDownload(
                                                                    order.file_name
                                                                )
                                                            }
                                                            className="text-blue-600 hover:text-blue-900"
                                                        >
                                                            Download
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            {category !== "orders" &&
                                paginatedSenders.length > 0 && (
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    User ID
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Bestelnummer
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    First Name
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Last Name
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Email
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {paginatedSenders.map((sender) => {
                                                const matchingOrder =
                                                    completedOrders.find(
                                                        (order) =>
                                                            order.user_id ===
                                                            sender.user_id
                                                    );
                                                if (matchingOrder) {
                                                    return (
                                                        <tr
                                                            key={sender.user_id}
                                                        >
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                {sender.user_id}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                {
                                                                    sender.bestelnummer
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                {
                                                                    sender.sender_first_name
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                {
                                                                    sender.sender_last_name
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                {sender.email}
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </tbody>
                                    </table>
                                )}
                        </div>
                        {(category === "all" ||
                            paginatedOrders.length > 0 ||
                            paginatedSenders.length > 0) && (
                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={handlePreviousPage}
                                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={handleNextPage}
                                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
                                    disabled={
                                        (category === "orders" &&
                                            currentPage * ITEMS_PER_PAGE >=
                                                filteredOrders.length) ||
                                        (category === "senders" &&
                                            currentPage * ITEMS_PER_PAGE >=
                                                filteredSenders.length)
                                    }
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
