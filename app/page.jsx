import Hero from "../components/Hero";
import Section from "../components/Section";


export default function Page() {
return (
<>
<Hero />


<Section id="sobre" title="Sobre nós">
<p>
A <strong>MainBridge</strong> é uma startup que conecta fornecedores a motoristas
independentes. Somos o elo que facilita pedidos, entregas e logística.
</p>
</Section>


<Section id="servicos" title="Serviços">
<ul className="list-disc ml-4 space-y-2">
<li>Fornecedor envia pedidos pelo sistema</li>
<li>Motoristas cadastram veículos e aceitam entregas</li>
<li>Dashboard completo com histórico e status</li>
</ul>
</Section>


<Section id="faq" title="FAQ">
<p>Em breve você verá aqui as dúvidas mais frequentes.</p>
</Section>
</>
);
}