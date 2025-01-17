import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { useGetGroupsQuery } from "src/ducks/groups";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const GroupListPage = memo(() => {
  const groupsData = useGetGroupsQuery();
  const groups: GroupContactsDto[] = groupsData.isSuccess
    ? groupsData.data
    : [];
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
