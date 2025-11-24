// components/Hero.jsx
export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white">
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Logística que conecta seu negócio
          </h1>
          <p className="mt-4 text-indigo-100">
            Soluções completas de transporte e distribuição para empresas que buscam eficiência,
            confiabilidade e crescimento sustentável.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#acesso"
              className="rounded-md bg-white px-5 py-3 font-semibold text-indigo-800 hover:bg-indigo-100"
            >
              Acessar Portal
            </a>
            <a
              href="#servicos"
              className="rounded-md border border-white/60 px-5 py-3 font-semibold text-white hover:bg-white/10"
            >
              Nossos Serviços
            </a>
          </div>

          <div className="mt-6 text-sm text-indigo-200">
            24/7 Suporte • Cobertura nacional • Operação escalável
          </div>
        </div>

        <div className="relative">
          {/* Placeholder de imagem do centro de distribuição */}
          <div className="aspect-video rounded-lg overflow-hidden ring-1 ring-white/20">
            <div className="h-full w-full bg-[url('/imagens/cd.jpg')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  );
}



