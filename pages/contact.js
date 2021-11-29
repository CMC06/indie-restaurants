import Meta from "../components/Meta";
import ContactForm from "../components/ContactForm";
import GoBack from "../components/GoBack";

const contact = () => {
  return (
    <div>
      <Meta title="Contact Us" keywords="contact, contact page" description="Contact Indy's Indies restaurant website administrators." />
      <ContactForm /> <br />
      <GoBack />
    </div>
  )
}

export default contact
