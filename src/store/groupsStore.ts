import { makeAutoObservable } from "mobx";
import { BASE_URL } from "src/constants/baseUrl";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const groupsStore = makeAutoObservable({
  groups: [] as GroupContactsDto[],
  currentGroup: null as GroupContactsDto | null,

  *getGroupsArr() {
    const groups: GroupContactsDto[] = yield fetch(`${BASE_URL}/groups`).then(
      (res) => res.json()
    );

    if (groups) {
      groupsStore.groups = groups;
    }
  },
  *getCurrentGroup(id: GroupContactsDto["id"]) {
    const currentGroup: GroupContactsDto = yield fetch(
      `${BASE_URL}/groups/${id}`
    ).then((res) => res.json());

    if (currentGroup) {
      groupsStore.currentGroup = currentGroup;
    }
  },
});
