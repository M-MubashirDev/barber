import FooterText from "./FooterText";
function FooterDetails() {
  return (
    <div className="grid   lg:grid-cols-[16%_1fr] min-w-full ">
      <img
        src="footertextlogo.webp"
        alt="logo"
        className="lg:min-w-full lg:min-h-full p-2 justify-self-center"
      />
      <div className="grid grid-cols-2 gap-6 py-4 px-4 lg:pl-8 md:grid-cols-4 bg-brown-primary justify-center    place-content-center ">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-4 px-4 bg-brown-primary justify-center place-content-center"> */}
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
          <FooterText.Heading>QUICK LINKS</FooterText.Heading>
          <FooterText.ListItem link="/">Home</FooterText.ListItem>
          <FooterText.ListItem link="/about">About Us</FooterText.ListItem>
          <FooterText.ListItem link="/contact">Contact Us</FooterText.ListItem>
          <FooterText.ListItem link="bookings">
            Book Appointment
          </FooterText.ListItem>
        </FooterText>
        <FooterText>
          <FooterText.Heading>CONTACT</FooterText.Heading>
          <FooterText.ListItem>+1 812-336-0092</FooterText.ListItem>
          <FooterText.ListItem>
            hotrodbrbr<span className="inline-block">@yahoo.com</span>
          </FooterText.ListItem>
          <div className="flex gap-4 sm:gap-8 my-2 ml:4 sm:ml-6">
            <FooterText.Logotext src="fb.png" />
            <FooterText.Logotext src="insta.png" />
          </div>
        </FooterText>
      </div>
    </div>
  );
}

export default FooterDetails;
