function Footer({ children }) {
  return (
    <div className="max-w-[1440px] flex flex-col justify-center items-center text-center gap-4 py-6 mx-auto w-[90%]">
      {children}
    </div>
  );
}

function Logo({ logo }) {
  return <img src={`${logo}`} className="mt-3 max-w-[50px]" alt="footer img" />;
}

function Heads({ children }) {
  return (
    // <h1 className="h1-heading text-brown-primary text-2xl sm:text-3xl lg:text-4xl max-w-2xl mx-auto">
    <h1 className="h1-heading  text-brown-primary ">{children}</h1>
  );
}

function Para({ children }) {
  return (
    // <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto">
    <p className="primary-p max-w-3xl mx-auto">{children}</p>
  );
}
function Button({ children }) {
  return (
    <button className="font-[600]  leading-[19.5px] text-white rounded-[8px] bg-brown-primary text-[16px] min-h-12 md:min-w-[70%]">
      {children}
    </button>
  );
}

Footer.Logo = Logo;
Footer.Heads = Heads;
Footer.Para = Para;
Footer.Button = Button;

export default Footer;
