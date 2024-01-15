import cv from "./../../assets/images/contacts/cv.jpg";
import email from "./../../assets/images/contacts/gmail.png";
import phone from "./../../assets/images/contacts/phone.png";
import gitHub from "./../../assets/images/contacts/GitHub.png";
import linkedin from "./../../assets/images/contacts/linkedin.png";
import { ContactImg, ContactItem, ContactLink, ContactText, ContactsContainer, PageContainer, Title } from "./Style";



function Contacts() {
  return (
      <PageContainer>
          <ContactsContainer >
            <Title>Mes contacts :</Title>
            <ContactItem><ContactImg src={email} alt="Email" /><ContactText>andreadellabiancia@gmail.com</ContactText></ContactItem>
            <ContactItem><ContactImg src={phone} alt="Téléphone" /><ContactText>07 51 65 02 46</ContactText></ContactItem>
            <ContactItem><ContactLink href="https://www.linkedin.com/in/andrea-della-biancia/" target="__blank"><img src={linkedin} alt="LinkedIn" /><ContactText>Linkedin</ContactText></ContactLink></ContactItem>
            <ContactItem><ContactLink href="https://github.com/AndreaDellaBiancia" target="__blank"><img src={gitHub} alt="GitHub" /><ContactText>GitHub</ContactText></ContactLink></ContactItem>
           
          </ContactsContainer>
          <div style={{width: "50%"}}>
            <img src={cv} alt="Curriculum" style={{width: "100%",  border: "1px solid #27384a"}} />
          </div>
      </PageContainer>
  )
}
  
export default Contacts;