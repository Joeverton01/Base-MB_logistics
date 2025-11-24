// app/page.jsx (ou src/app/page.jsx, conforme seu setup)
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Benefits from "../components/Benefits";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <Hero />

        <div className="container mx-auto px-6">
          <Stats />

          <Benefits />

          <Section id="sobre" title="Sobre nós">
            <p className="text-gray-700">
              A <strong>MainBridge</strong> é uma startup de logística que conecta empresas a
              motoristas e operadores, oferecendo soluções completas de transporte e distribuição
              com foco em eficiência, confiabilidade e crescimento sustentável.
            </p>
          </Section>

          <Section id="servicos" title="Serviços">
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Envio e gestão de pedidos pelo portal</li>
              <li>Cadastro de veículos e aceite de cargas</li>
              <li>Roteirização e acompanhamento de entregas</li>
              <li>Dashboard com histórico e status em tempo real</li>
            </ul>
          </Section>

          <Section id="faq" title="FAQ" className="pb-20">
            <p className="text-gray-700">
              Em breve você verá aqui as dúvidas mais frequentes sobre cadastro, integração e
              operações diárias.
            </p>
          </Section>
        </div>
      </main>

      {/* <Footer /> */}
    </>
  );
}
