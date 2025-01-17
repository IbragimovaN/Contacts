import { memo, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { ContactDto } from "src/types/dto/ContactDto";

import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

import { useGetContactsQuery } from "src/ducks/contacts";
import { useGetGroupsQuery } from "src/ducks/groups";

export const ContactListPage = memo(() => {
  const [contacts, setContacts] = useState<ContactDto[]>([]);

  const groupsData = useGetGroupsQuery();
  const groups: GroupContactsDto[] = groupsData.isSuccess
    ? groupsData.data
    : [];
  const contactsData = useGetContactsQuery();

  useEffect(() => {
    const contactsArr: ContactDto[] = contactsData.isSuccess
      ? contactsData.data
      : [];
    if (contactsData) {
      setContacts(contactsArr);
    }
  }, [contactsData]);

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contactsData.isSuccess
      ? contactsData.data
      : [];

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts.filter(
        ({ name }) => name.toLowerCase().indexOf(fvName) > -1
      );
    }

    if (fv.groupId) {
      const groupContacts = groups.find(({ id }) => id === fv.groupId);

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) =>
          groupContacts.contactIds.includes(id)
        );
      }
    }
    setContacts(findContacts);
  };

  return (
    <Row xxl={1}>
      <Col>
        <Row>
          <FilterForm
            groupContactsList={groups}
            initialValues={{}}
            onSubmit={onSubmit}
          />
        </Row>
        <Row xxl={4} className="g-4">
          {contacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
});
