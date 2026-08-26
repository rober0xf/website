type SocialIcon = {
  name: string;
  url: string;
  icon: string;
};

export const FooterComponent = () => {
  const icons: SocialIcon[] = [
    {
      name: "Github",
      url: "https://github.com/rober0xf",
      icon: "fa-brands fa-github",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/roberpili",
      icon: "fa-brands fa-x-twitter",
    },
    {
      name: "Linkedin",
      url: "https://linkedin.com/in/rober0xf",
      icon: "fa-brands fa-linkedin",
    },
  ];

  return (
    <footer className="flex w-full items-center justify-between border-t border-stone-200">
      <div className="poppins text-stone-500">
        <p>&copy; {new Date().getFullYear()} Rober</p>
      </div>

      <div className="social-icons flex gap-1">
        {icons.map(({ icon, name, url }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            aria-label={name}
            rel="noopener noreferrer"
          >
            <i className={icon} aria-hidden="true"></i>
          </a>
        ))}
      </div>
    </footer>
  );
};
