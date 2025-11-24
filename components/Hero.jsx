export default function Hero() {
return (
<section className="h-[80vh] flex flex-col justify-center items-center text-center px-4">
<h1 className="text-4xl md:text-6xl font-bold mb-4">
Conectando Fornecedores e Motoristas
</h1>
<p className="text-lg md:text-xl text-gray-600 max-w-2xl">
A MainBridge facilita o envio e a entrega de pedidos por meio de uma
plataforma simples e eficiente.
</p>
<a
href="/servicos"
className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
>
Conhecer Serviços
</a>
</section>
);
}