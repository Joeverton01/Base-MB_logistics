// app/portal/page.jsx
import Footer from "@/components/Footer";

export default function PortalPage() {
  return (
    <>
      <main className="bg-white pt-20">
        <section className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-900">Portal de Acesso</h1>
          <p className="mt-4 text-gray-700 text-lg">
            Escolha o portal adequado para acessar sua área
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
            {/* Portal do Entregador */}
            <div className="rounded-lg border border-gray-200 p-6 shadow-sm bg-gray-50">
              <h2 className="text-xl font-semibold text-indigo-800">Portal do Entregador</h2>
              <p className="mt-2 text-gray-600">Acesse suas rotas, entregas e histórico</p>
              <ul className="mt-4 list-disc ml-5 space-y-2 text-gray-700 text-sm">
                <li>Visualize suas rotas e entregas do dia</li>
                <li>Atualize status de entregas em tempo real</li>
                <li>Acesse comprovantes e histórico</li>
                <li>Comunique-se com a central</li>
              </ul>
              <a
                href="/portal/entregador"
                className="mt-6 inline-block rounded-md bg-indigo-700 px-5 py-3 text-white font-semibold hover:bg-indigo-800"
              >
                Acessar Portal do Entregador
              </a>
            </div>

            {/* Portal do Fornecedor */}
            <div className="rounded-lg border border-gray-200 p-6 shadow-sm bg-gray-50">
              <h2 className="text-xl font-semibold text-indigo-800">Portal do Fornecedor</h2>
              <p className="mt-2 text-gray-600">Gerencie pedidos, coletas e relatórios</p>
              <ul className="mt-4 list-disc ml-5 space-y-2 text-gray-700 text-sm">
                <li>Gerencie pedidos e agendamentos</li>
                <li>Acompanhe entregas em tempo real</li>
                <li>Acesse relatórios e dashboards</li>
                <li>Integração via API disponível</li>
              </ul>
              <a
                href="/portal/fornecedor"
                className="mt-6 inline-block rounded-md bg-indigo-700 px-5 py-3 text-white font-semibold hover:bg-indigo-800"
              >
                Acessar Portal do Fornecedor
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}