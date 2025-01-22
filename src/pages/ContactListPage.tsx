import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { contactsStore } from "src/store/contactsStore";
import { observer } from "mobx-react-lite";
import { groupsStore } from "src/store/groupsStore";
import { ContactDto } from "src/types/dto/ContactDto";

export const ContactListPage = observer(() => {
  const [contactsArr, setContactsArr] = useState<ContactDto[]>([]);
  const groups = groupsStore.groups;
  const contacts = contactsStore.contacts;

  useEffect(() => {
    contactsStore.getContactsArr();
    groupsStore.getGroupsArr();
  }, []);

  useEffect(() => {
    setContactsArr(contacts);
  }, [contacts]);

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts = contacts;

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
    setContactsArr(findContacts);
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
          {contactsArr.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
});
