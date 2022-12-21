import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

const SearchBar = ({
    placeholder = "",
    width = "w-full",
    className = "",
    onChange,
    ...props
}) => {
    const handleChange = (() => {
        let timeout;
        console.log("timeout", timeout);

        return (...args) => {
            const later = () => {
                clearTimeout(timeout);
                onChange(...args);
            };

            clearTimeout(timeout);
            timeout = setTimeout(later, 250);
        };
    })();

    return (
        <div className="relative rounded-md shadow">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                    className="h-5 w-5 text-grey-6"
                    aria-hidden="true"
                />
            </div>
            <input
                type="text"
                name={placeholder}
                className={classNames(
                    "block",
                    "p-2",
                    "pl-10",
                    "max-w-full",
                    "rounded-sm",
                    "border",
                    "sm:text-sm",
                    "border-grey-5-32",
                    "bg-grey-1",
                    "focus:border-grey-5-32",
                    "focus:outline-none",
                    "focus:ring-grey-7",
                    "focus-visible:outline-grey-7",
                    "focus-visible:outline-offset-0",
                    "placeholder-grey-6",
                    "placeholder:font-body-medium",
                    "font-bold",
                    width,
                    className
                )}
                placeholder={placeholder}
                aria-describedby={placeholder}
                onChange={(e) => handleChange(e.target.value)}
                {...props}
            />
        </div>
    );
};

export default SearchBar;