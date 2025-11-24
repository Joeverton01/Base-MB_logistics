// components/Benefits.jsx
export default function Benefits() {
  const benefits = [
    {
      title: "Eficiência operacional",
      desc: "Roteirização inteligente e painéis com KPIs para decisões mais rápidas.",
    },
    {
      title: "Confiabilidade",
      desc: "Entregas rastreáveis com notificações e comprovantes digitais.",
    },
    {
      title: "Escalabilidade",
      desc: "Infraestrutura pronta para crescer com picos de demanda.",
    },
    {
      title: "Integração simples",
      desc: "APIs e webhooks para conectar ERP, marketplaces e CRMs.",
    },
  ];

  return (
    <section className="mt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-indigo-900">
          Por que escolher a MainBridge?
        </h2>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-lg border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 rounded-md bg-indigo-700" />
              <h3 className="mt-4 font-semibold text-indigo-900">{b.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
