export default function Section({ title, children, id }) {
return (
<section id={id} className="py-20 px-4 max-w-4xl mx-auto">
<h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
<div className="text-lg text-gray-700 leading-relaxed">{children}</div>
</section>
);
}