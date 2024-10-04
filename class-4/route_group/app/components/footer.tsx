import Link from "next/link";
import React from "react";

export default function Page() {
    return (
        <>
                <Link href="/aboutus">About us</Link>&nbsp;|&nbsp;&nbsp;
                <Link href="/contactus">Contact us</Link>&nbsp;|&nbsp;&nbsp;
        </>
       
    );
}