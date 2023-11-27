import React, { PropsWithChildren } from "react";
import Navbar from "./navbar";
import { Toaster } from "@/components/ui/toaster";
const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar/>
            {children}
            <Toaster />
        </>
    );
};
export default Layout;