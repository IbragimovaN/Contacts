import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { observer } from "mobx-react-lite";
import { groupsStore } from "src/store/groupsStore";

export const GroupListPage = observer(() => {
  const groups = groupsStore.groups;
  useEffect(() => {
    groupsStore.getGroupsArr();
  }, []);
  return (
    <Row xxl={4}>
      {groups.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
