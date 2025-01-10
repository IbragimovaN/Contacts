import { memo, useEffect } from "react";

import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { ContactDto } from "src/types/dto/ContactDto";
import { setContactsAction } from "src/redux/actions/actions";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";

export const FavoritListPage = memo(() => {
  const dispatch = useAppDispatch();
  const favouriteContacts = useAppSelector(
    (state) => state.favouriteContacts.favoriteContactsStateIds
  );
  const contacts: ContactDto[] = useAppSelector(
    (state) => state.contacts.contactsArr
  );
  useEffect(() => {
    dispatch(
      setContactsAction(
        contacts.filter(({ id }) => favouriteContacts.includes(id))
      )
    );
  }, [contacts, favouriteContacts, dispatch]);
  return (
    <Row xxl={4} className="g-4">
      {contacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});
