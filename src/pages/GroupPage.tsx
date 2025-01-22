import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Empty } from "src/components/Empty";
import { ContactCard } from "src/components/ContactCard";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { observer } from "mobx-react-lite";
import { groupsStore } from "src/store/groupsStore";
import { contactsStore } from "src/store/contactsStore";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const GroupPage = observer(() => {
  const { groupId } = useParams<{ groupId: string }>();
  const currentGroup = groupsStore.currentGroup;
  const contacts = contactsStore.contacts;

  useEffect(() => {
    groupsStore.getCurrentGroup(groupId || "");
    contactsStore.getContactsArr();
  }, [groupId]);

  return (
    <Row className="g-4">
      {currentGroup ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard
                  groupContacts={currentGroup as GroupContactsDto}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {contacts &&
                contacts
                  .filter(({ id }) => currentGroup.contactIds.includes(id))
                  .map((contact) => (
                    <Col key={contact.id}>
                      <ContactCard contact={contact} withLink />
                    </Col>
                  ))}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  );
});
