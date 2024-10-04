import link from "next/link";

export default function page() {
    return (
        <div>
            <ul>
                <li><link href="/country/pakistan">Pakistan</link></li>
                <li>India</li>
            </ul>
        </div>
    );
}