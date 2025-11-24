// components/Section.jsx
export default function Section({ id, title, className = "", children }) {
  return (
    <section id={id} className={`mt-16 ${className}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-indigo-900">{title}</h2>
        <div className="mt-4 rounded-lg border border-gray-200 bg-white p-6">
          {children}
        </div>
      </div>
    </section>
  );
}
