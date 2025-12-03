// components/Header.jsx
export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-gray-200 backdrop-blur">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/imagens/modelo-inicial-Main-Bridge.png"
            alt="Logo MainBridge"
            className="h-10 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="text-gray-700 hover:text-indigo-700">Home</a>
          <a href="#sobre" className="text-gray-700 hover:text-indigo-700">Sobre Nós</a>
          <a href="#servicos" className="text-gray-700 hover:text-indigo-700">Serviços</a>
          <a href="#faq" className="text-gray-700 hover:text-indigo-700">FAQ</a>
          <a
            href="/portal"
            className="rounded-md bg-indigo-700 px-3 py-2 font-medium text-white hover:bg-indigo-800"
          >
            Acesso
          </a>
        </nav>

        <button
          className="md:hidden rounded-md border border-gray-300 px-3 py-2 text-gray-700"
          aria-label="Abrir menu"
        >
          Menu
        </button>
      </div>
    </header>
  );
}
