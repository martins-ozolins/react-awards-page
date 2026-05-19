const NAV_COLUMNS = [
  {
    label: "Services",
    links: [
      { title: "Search Engine Optimisation", href: "#" },
      { title: "Paid Search", href: "#" },
      { title: "Paid Social Media & Creative", href: "#" },
      { title: "CRM & Marketing Automation", href: "#" },
      { title: "Data & Analytics", href: "#" },
    ],
  },
  {
    label: "Work",
    links: [
      { title: "Case Studies", href: "#" },
      { title: "Testimonials", href: "#" },
      { title: "Blog & Insights", href: "#" },
      { title: "Awards", href: "#" },
      { title: "Contact", href: "#" },
    ],
  },
  {
    label: "About",
    links: [
      { title: "Our Story", href: "#" },
      { title: "Our Team", href: "#" },
      { title: "Employee Ownership", href: "#" },
      { title: "Wolfgang Reforest", href: "#" },
      { title: "Careers", href: "#" },
    ],
  },
];

export function FooterNav() {
  return (
    <nav className="px-4 md:px-10 xl:px-14">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_1fr] lg:grid-cols-3 lg:w-2/3">
        {NAV_COLUMNS.map((col) => (
          <div key={col.label} className="border-l border-brand-slime pl-6">
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-base text-white">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
