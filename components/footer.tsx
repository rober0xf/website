import "@/app/styles/footer.css";

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
    <footer className="footer-line">
      <div className="footer-text">&copy; {new Date().getFullYear()} Rober</div>

      <nav className="social-icons" aria-label="networks">
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
      </nav>
    </footer>
  );
};
