import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { observer } from "mobx-react-lite";
import { contactsStore } from "src/store/contactsStore";

export const FavoritListPage = observer(() => {
  const contacts = contactsStore.contacts;
  const favorites = contactsStore.favoritesContacts;

  useEffect(() => {
    contactsStore.getContactsArr();
  }, [favorites]);
  return (
    <Row xxl={4} className="g-4">
      {contacts
        .filter(({ id }) => favorites.includes(id))
        .map((contact) => (
          <Col key={contact.id}>
            <ContactCard contact={contact} withLink />
          </Col>
        ))}
    </Row>
  );
});
