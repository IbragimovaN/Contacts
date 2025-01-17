import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Empty } from "src/components/Empty";
import { ContactCard } from "src/components/ContactCard";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { useGetCurrentGroupQuery } from "src/ducks/groups";
import { useGetContactsQuery } from "src/ducks/contacts";

export const GroupPage = memo(() => {
  const { groupId } = useParams<{ groupId: string }>();
  const currentGroupData = useGetCurrentGroupQuery(groupId || "");
  const currentGroup = currentGroupData.data;
  const contactsData = useGetContactsQuery();
  const contacts = contactsData.data;

  return (
    <Row className="g-4">
      {currentGroup ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={currentGroup} />
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
