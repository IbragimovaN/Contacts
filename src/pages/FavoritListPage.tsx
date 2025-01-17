import { memo, useEffect, useState } from "react";

import { Col, Row } from "react-bootstrap";
import { DATA_CONTACT } from "src/__data__";
import { ContactCard } from "src/components/ContactCard";
import { useGetContactsQuery } from "src/ducks/contacts";
import { useAppSelector } from "src/ducks/contacts/hooks";
import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

export const FavoritListPage = memo(() => {
  const [contacts, setContacts] = useState<ContactDto[]>([]);
  const contactsData = useGetContactsQuery();
  const favorites = useAppSelector(
    (state) => state.favorites.favoritesContacts
  );

  useEffect(() => {
    const contactsArr: ContactDto[] = contactsData.isSuccess
      ? contactsData.data
      : [];
    if (contactsArr) {
      setContacts(contactsArr.filter(({ id }) => favorites.includes(id)));
    }
  }, [contactsData, favorites]);
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
