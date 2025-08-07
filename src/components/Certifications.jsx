const CertificationCard = ({ title, description, organization, href }) => (
  <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-lg p-6 flex flex-col items-center gap-4 transition-transform hover:scale-[1.04] hover:shadow-blue-700/30 w-full group">
    <div className="w-44 h-28 rounded-lg overflow-hidden border-2 border-blue-700/30 group-hover:border-blue-500 transition-all duration-300">
      <img src={href} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-xl font-bold text-white text-center drop-shadow-md">{title}</h3>
    {organization && (
      <p className="text-xs text-blue-400 text-center font-medium mb-1">{organization}</p>
    )}
    <p className="text-sm text-neutral-300 text-center leading-relaxed">{description}</p>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 px-5 py-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-full hover:from-blue-600 hover:to-blue-400 transition-all text-sm font-semibold shadow-lg ring-1 ring-blue-700/40 group-hover:ring-2 group-hover:ring-blue-400"
    >
      View Certificate
    </a>
  </div>
);

const Certifications = ({ certificates }) => (
  <section className="py-20 mt-15 px-4 max-w-6xl mx-auto" id="certifications">
    <h2 className="text-4xl font-extrabold mb-12 text-left text-white tracking-tight drop-shadow-lg">Certifications</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {certificates.map(cert => (
        <CertificationCard key={cert.id} {...cert} />
      ))}
    </div>
  </section>
);

export default Certifications;
