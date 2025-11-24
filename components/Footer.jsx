// // components/Footer.jsx
// export default function Footer() {
//   return (
//     <footer className="mt-20 border-t border-gray-200 bg-gray-50">
//       <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-6">
//         <div className="flex items-center gap-2">
//           <div className="h-7 w-7 rounded-md bg-indigo-700" />
//           <span className="font-semibold text-indigo-900">MainBridge</span>
//         </div>

//         <div className="text-sm text-gray-600">
//           © {new Date().getFullYear()} MainBridge. Todos os direitos reservados.
//         </div>
//       </div>
//     </footer>
//   );
// }


// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-white-200 bg-gray-200">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            src="/imagens/modelo-inicial-Main-Bridge.png"
            alt="Logo MainBridge"
            className="h-8 w-auto"
          />
          <span className="text-base font-semibold text-indigo-900">MainBridge</span>
        </div>

        <div className="text-sm text-gray-600 text-center md:text-right">
          © {new Date().getFullYear()} MainBridge. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

