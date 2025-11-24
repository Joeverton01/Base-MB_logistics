// components/Stats.jsx
export default function Stats() {
  const items = [
    { label: "Clientes Ativos", value: "500+" },
    { label: "Entregas/Mês", value: "50k+" },
    { label: "Satisfação", value: "98%" },
    { label: "Suporte", value: "24/7" },
  ];

  return (
    <section className="-mt-10 md:-mt-12">
      <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4 gap-4 px-6">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="text-2xl font-bold text-indigo-900">{item.value}</div>
            <div className="mt-1 text-sm text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
