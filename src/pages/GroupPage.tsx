import { memo, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Empty } from "src/components/Empty";
import { ContactCard } from "src/components/ContactCard";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import {
  getContactsActionAsync,
  getCurrentGroupActionAsync,
} from "src/redux/actions/async-actions";
import { GroupContactsCard } from "src/components/GroupContactsCard";

export const GroupPage = memo(() => {
  const dispatch = useAppDispatch();
  const currentGroup = useAppSelector((state) => state.group.currentGroup);
  const contacts = useAppSelector((state) => state.contacts.contactsArr);
  const { groupId } = useParams<{ groupId: string }>();

  useEffect(() => {
    if (groupId) {
      dispatch(getCurrentGroupActionAsync(groupId));
      dispatch(getContactsActionAsync());
    }
  }, [groupId, dispatch]);

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
