import { ContactDto } from "src/types/dto/ContactDto";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { observer } from "mobx-react-lite";
import { contactsStore } from "src/store/contactsStore";

interface ContactCardProps {
  contact: ContactDto;
  withLink?: boolean;
}

export const ContactCard = observer<ContactCardProps>(
  ({ contact: { photo, id, name, phone, birthday, address }, withLink }) => {
    const favorites = contactsStore.favoritesContacts;
    const isFavorite = favorites.includes(id);

    const handleFavoriteToggle = () => {
      if (isFavorite) {
        contactsStore.removeFavorite(id);
      } else {
        contactsStore.addFavorite(id);
      }
    };

    return (
      <Card key={id}>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>
            {withLink ? <Link to={`/contact/${id}`}>{name}</Link> : name}
            {isFavorite ? (
              <HeartFill
                onClick={handleFavoriteToggle}
                color={"red"}
                style={{ cursor: "pointer", marginLeft: "10px" }}
              />
            ) : (
              <Heart
                onClick={handleFavoriteToggle}
                color={"grey"}
                style={{ cursor: "pointer", marginLeft: "10px" }}
              />
            )}
          </Card.Title>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>
                <Link to={`tel:${phone}`} target="_blank">
                  {phone}
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>{birthday}</ListGroup.Item>
              <ListGroup.Item>{address}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card.Body>
      </Card>
    );
  }
);
