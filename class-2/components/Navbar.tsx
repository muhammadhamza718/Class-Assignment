import link from "next/link";

function Navbar() {
  return (
    <ul className="flex justify-center gap-4">
      <li>
        <link href="/" className="bg-blue-400">
          home
        </link>
      </li>

      <li>
        <link href="/about">about</link>
      </li>

      <li>
        <link href="/contact">contact</link>
      </li>

      <li>
        <link href="/feedback">feedback</link>
      </li>
    </ul>
  );
}

export default Navbar;
