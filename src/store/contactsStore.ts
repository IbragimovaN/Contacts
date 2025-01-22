import { ContactDto } from "src/types/dto/ContactDto";
import { makeAutoObservable } from "mobx";
import { BASE_URL } from "src/constants/baseUrl";

export const contactsStore = makeAutoObservable({
  contacts: [] as ContactDto[],
  currentContact: null as ContactDto | null,
  favoritesContacts: JSON.parse(
    localStorage.getItem("favoritesContacts") || "[]"
  ),
  *getContactsArr() {
    const contacts: ContactDto[] = yield fetch(`${BASE_URL}/contacts`).then(
      (res) => res.json()
    );

    if (contacts) {
      contactsStore.contacts = contacts;
    }
  },
  *getCurrentContact(id: ContactDto["id"]) {
    const currentContact: ContactDto = yield fetch(
      `${BASE_URL}/contacts/${id}`
    ).then((res) => res.json());

    if (currentContact) {
      contactsStore.currentContact = currentContact;
    }
  },
  addFavorite(selectedContact: ContactDto["id"]) {
    this.favoritesContacts.push(selectedContact);
    localStorage.setItem(
      "favoritesContacts",
      JSON.stringify(this.favoritesContacts)
    );
  },
  removeFavorite(ContactId: ContactDto["id"]) {
    this.favoritesContacts = this.favoritesContacts.filter(
      (id: ContactDto["id"]) => id !== ContactId
    );
    localStorage.setItem(
      "favoritesContacts",
      JSON.stringify(this.favoritesContacts)
    );
  },
});
