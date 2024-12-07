function Footer({ children }) {
  return (
    <div className="max-w-[1440px] flex flex-col justify-center items-center gap-6 mx-auto w-[90%]">
      {children}
    </div>
  );
}

function Logo({ logo }) {
  return <img src={`${logo}`} className="mt-5" alt="footer img" />;
}

function Heads({ children }) {
  return (
    <h1 className="h1-heading text-brown-primary text-2xl sm:text-3xl lg:text-4xl max-w-2xl mx-auto">
      {children}
    </h1>
  );
}

function Para({ children }) {
  return <p className="text-lg sm:text-xl max-w-3xl mx-auto">{children}</p>;
}
function Button({ children }) {
  return (
    <button className="font-[600] text-white rounded-[8px] bg-brown-primary min-h-12 md:min-w-[70%]">
      {children}
    </button>
  );
}

Footer.Logo = Logo;
Footer.Heads = Heads;
Footer.Para = Para;
Footer.Button = Button;

export default Footer;
