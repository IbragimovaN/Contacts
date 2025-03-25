import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactDto } from "src/types/dto/ContactDto";
import { ContactCard } from "src/components/ContactCard";
import { Empty } from "src/components/Empty";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { getCurrentContactActionAsync } from "src/redux/actions/async-actions";

export const ContactPage = () => {
  const dispatch = useAppDispatch();
  const { contactId } = useParams<{ contactId: string }>();
  const contact = useAppSelector((state) => state.contact.currentContact);

  useEffect(() => {
    if (contactId) {
      dispatch(getCurrentContactActionAsync(contactId));
    }
  }, [contactId, dispatch]);

  return (
    <Row xxl={3}>
      <Col className={"mx-auto"}>
        {contact ? <ContactCard contact={contact as ContactDto} /> : <Empty />}
      </Col>
    </Row>
  );
};
