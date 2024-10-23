export const Footer = () => {
  const footerSections = [
    {
      title: "MYGNV",
      links: ["Premi", "Punti", "Area riservata", "Regolamento"],
    },
    {
      title: "MYGNV",
      links: ["Premi", "Punti", "Area riservata", "Regolamento"],
    },
    {
      title: "MYGNV",
      links: ["Premi", "Punti", "Area riservata", "Regolamento"],
    },
    {
      title: "MYGNV",
      links: ["Premi", "Punti", "Area riservata", "Regolamento"],
    },
    {
      title: "MYGNV",
      links: ["Premi", "Punti", "Area riservata", "Regolamento"],
    },
    {
      title: "MYGNV",
      links: ["Premi", "Punti", "Area riservata", "Regolamento"],
    },
    {
      title: "MYGNV",
      links: ["Premi", "Punti", "Area riservata", "Regolamento"],
    },
  ];

  return (
    <footer className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {footerSections.map((section, index) => (
          <div key={index} className="h-auto">
            <h6 className="font-semibold text-white mb-2">{section.title}</h6>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="text-sm text-white">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};
