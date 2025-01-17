import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactDto } from "src/types/dto/ContactDto";
import { ContactCard } from "src/components/ContactCard";
import { Empty } from "src/components/Empty";
import { useGetCurrentContactQuery } from "src/ducks/contacts";

export const ContactPage = () => {
  const { contactId } = useParams<{ contactId: string }>();

  const currentContactData = useGetCurrentContactQuery(contactId || "");
  const contact = currentContactData.data;

  return (
    <Row xxl={3}>
      <Col className={"mx-auto"}>
        {contact ? <ContactCard contact={contact as ContactDto} /> : <Empty />}
      </Col>
    </Row>
  );
};
