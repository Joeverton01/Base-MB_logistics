// "use client";
// import Link from "next/link";
// import { useState } from "react";


// export default function Navbar() {
// const [open, setOpen] = useState(false);


// return (
// <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
// <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
// <Link href="/" className="text-xl font-bold">
// MainBridge
// </Link>


// <button className="md:hidden" onClick={() => setOpen(!open)}>
// ☰
// </button>


// <ul
// className={`${
// open ? "block" : "hidden"
// } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:flex space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0`}
// >
// <li>
// <Link href="/sobre">Sobre</Link>
// </li>
// <li>
// <Link href="/servicos">Serviços</Link>
// </li>
// <li>
// <Link href="/faq">FAQ</Link>
// </li>
// </ul>
// </div>
// </nav>
// );
// }