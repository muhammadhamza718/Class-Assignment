import link from "next/link";
import React from "react";

export default function Page() {
    return (
      <>
      <a href="/">Home </a>&nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="/aboutus">About us</a>&nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="/contactus">Contact us</a>&nbsp;|&nbsp;&nbsp;
      <a href="/country">Country</a>
      </>
  );
}
