import React from "react";
import { HiSearch } from "react-icons/hi";
import { GrFilter } from "react-icons/gr";
import { Button, Input } from "@nextui-org/react";
const TicketsNav: React.FC = () => {
    return (
        <div className="flex w-screen justify-between h-5vh">
            <div className="flex items-center  bg-secondary w-1/3 justify-between px-3 text-2xl">
                <div className="">
                    <Input
                        type="search"
                        size="large"
                        shadow={false}
                        contentLeft={
                            <HiSearch className="text-dark dark:text-white" />
                        }
                    />
                </div>
                <div className="border-r-2 pr-4">
                    <Button
                        auto
                        flat
                        rounded
                        color="background"
                        icon={<GrFilter />}
                    />
                </div>
            </div>
            <div className="bg-secondary w-2/3"></div>
        </div>
    );
};

export default TicketsNav;
