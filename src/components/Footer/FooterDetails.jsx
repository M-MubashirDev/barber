import FooterText from "./FooterText";

function FooterDetails() {
  return (
    <div className="grid  lg:grid-cols-[16%_1fr] min-w-full ">
      <img
        src="footertextlogo.png"
        alt="logo"
        className="lg:min-w-full lg:min-h-full p-2 justify-self-center"
      />
      <div className="grid grid-cols-2 gap-6 py-4 px-4 lg:pl-8  md:grid-cols-4 bg-brown-primary justify-evenly  items-center ">
        {/* <ul className="flex flex-col text-white gap-2 text-start">
          <h1 className="font-[700] max-w-fit text-2xl  border-b leading-[29.26px]">
            OPEN DAILY
          </h1>
          <li>Mon-Fri - 1:30pm-6:30pm </li>
          <li>Saturday - By Appointment Only</li>
          <li>Sunday - CLOSED</li>
        </ul> */}
        <FooterText>
          <FooterText.Heading>OPEN DAILY</FooterText.Heading>
          <FooterText.ListItem>Mon-Fri - 1:30pm-6:30pm</FooterText.ListItem>
          <FooterText.ListItem>
            Saturday - By Appointment Only
          </FooterText.ListItem>
          <FooterText.ListItem>Sunday - CLOSED</FooterText.ListItem>
        </FooterText>
        <FooterText>
          <FooterText.Heading>ADDRESS</FooterText.Heading>
          <FooterText.ListItem>220 N Walnut St</FooterText.ListItem>
          <FooterText.ListItem>Bloomington</FooterText.ListItem>
          <FooterText.ListItem> IN </FooterText.ListItem>
          <FooterText.ListItem> United States </FooterText.ListItem>
        </FooterText>
        <FooterText>
          {/*  */}
          <FooterText.Heading>QUICK LINKS</FooterText.Heading>
          <FooterText.ListItem>Home</FooterText.ListItem>
          <FooterText.ListItem>About Us</FooterText.ListItem>
          <FooterText.ListItem>Contact Us</FooterText.ListItem>
          <FooterText.ListItem>Book Appointment</FooterText.ListItem>
        </FooterText>
        <FooterText>
          <FooterText.Heading>CONTACT</FooterText.Heading>
          <FooterText.ListItem>+1 812-336-0092</FooterText.ListItem>
          <FooterText.ListItem>hotrodbrbr@yahoo.com</FooterText.ListItem>
          <div className="flex gap-8 my-2 ml-6">
            <FooterText.Logotext src="facebook.png" />
            <FooterText.Logotext src="instagram.png" />
          </div>
        </FooterText>
      </div>
    </div>
  );
}

export default FooterDetails;
