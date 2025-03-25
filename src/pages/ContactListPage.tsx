import { memo, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { ContactDto } from "src/types/dto/ContactDto";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import {
  getContactsActionAsync,
  getGroupsActionAsync,
} from "src/redux/actions/async-actions";

import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { setContactsAction } from "src/redux/actions/actions";

export const ContactListPage = memo(() => {
  const dispatch = useAppDispatch();
  const contacts: ContactDto[] = useAppSelector(
    (state) => state.contacts.contactsArr
  );
  const groups: GroupContactsDto[] = useAppSelector(
    (state) => state.groups.groupsArr
  );

  useEffect(() => {
    dispatch(getContactsActionAsync());
    dispatch(getGroupsActionAsync());
  }, [dispatch]);

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contacts;

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

    dispatch(setContactsAction(findContacts));
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm
          groupContactsList={groups}
          initialValues={{}}
          onSubmit={onSubmit}
        />
      </Col>
      <Col>
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
