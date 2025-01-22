import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactDto } from "src/types/dto/ContactDto";
import { ContactCard } from "src/components/ContactCard";
import { Empty } from "src/components/Empty";
import { contactsStore } from "src/store/contactsStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export const ContactPage = observer(() => {
  const { contactId } = useParams<{ contactId: string }>();

  const contact = contactsStore.currentContact;

  useEffect(() => {
    contactsStore.getCurrentContact(contactId || "");
  }, [contactId]);

  return (
    <Row xxl={3}>
      <Col className={"mx-auto"}>
        {contact ? <ContactCard contact={contact as ContactDto} /> : <Empty />}
      </Col>
    </Row>
  );
});
