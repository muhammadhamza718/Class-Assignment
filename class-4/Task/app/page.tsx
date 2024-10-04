import React from "react";

export default function Home() {
    return (
        <>
        <center>
        <div>
            <h1 style={{fontSize: "50px"}}>Countries</h1>
            <br />
            <ul>
                <li><a href="/country/pakistan" style={{fontSize: "20px"}}>Pakistan</a></li>
                <li><a href="/country/iran" style={{fontSize: "20px"}}>Iran</a></li>
                <li><a href="/country/china" style={{fontSize: "20px"}}>China</a></li>
                <li><a href="/country/bangladesh" style={{fontSize: "20px"}}>Bangladesh</a></li>
            </ul>
        </div>
        </center>
        </>
    )
}