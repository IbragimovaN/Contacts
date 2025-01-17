import { memo, useEffect, useState } from "react";

import { Col, Row } from "react-bootstrap";
import { DATA_CONTACT } from "src/__data__";
import { ContactCard } from "src/components/ContactCard";
import { useGetContactsQuery } from "src/ducks/contacts";
import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

export const FavoritListPage = memo(() => {
  const [contacts, setContacts] = useState<ContactDto[]>([]);
  const contactsData = useGetContactsQuery();

  const favoriteContacts: FavoriteContactsDto = [
    DATA_CONTACT[0].id,
    DATA_CONTACT[1].id,
    DATA_CONTACT[2].id,
    DATA_CONTACT[3].id,
  ];

  useEffect(() => {
    const contactsArr: ContactDto[] = contactsData.isSuccess
      ? contactsData.data
      : [];
    if (contactsArr) {
      setContacts(
        contactsArr.filter(({ id }) => favoriteContacts.includes(id))
      );
    }
  }, [contactsData]);
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
