import { memo, useEffect } from "react";

import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";

import { getGroupsActionAsync } from "src/redux/actions/async-actions";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const GroupListPage = memo(() => {
  const dispatch = useAppDispatch();

  const groups: GroupContactsDto[] = useAppSelector(
    (state) => state.groups.groupsArr
  );

  useEffect(() => {
    dispatch(getGroupsActionAsync());
  }, [dispatch]);
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
