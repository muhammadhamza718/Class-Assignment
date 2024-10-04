import link from "next/link";
import React from "react";

export default function Page() {
    return (
      <>
      <link href="/">Home </link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <link href="/aboutus">About us</link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <link href="/contactus">Contact us</link>&nbsp;|&nbsp;&nbsp;
      <link href="/country">Country</link>
      </>
  );
}
