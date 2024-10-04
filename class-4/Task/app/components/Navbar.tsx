import link from "next/link";

export default function Navbar(){
    return (
        <ul className="flex justify-center items-center gap-4">
            <li><link href="/" className="bg-blue-400">
            Home
            </link></li>
            <li><link href="/about">
            About
            </link></li>
            <li><link href="/contact">
            Contact
            </link></li>
            <li><link href="/feedback">
            Feedback
            </link></li>
        </ul>
    )
} 