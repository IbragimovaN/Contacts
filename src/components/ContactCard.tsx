import React, { memo } from "react";
import { ContactDto } from "src/types/dto/ContactDto";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "src/ducks/contacts";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useAppSelector } from "src/ducks/contacts/hooks";

interface ContactCardProps {
  contact: ContactDto;
  withLink?: boolean;
}

export const ContactCard = memo<ContactCardProps>(
  ({ contact: { photo, id, name, phone, birthday, address }, withLink }) => {
    const dispatch = useDispatch();
    const favorites = useAppSelector(
      (state) => state.favorites.favoritesContacts
    );
    const isFavorite = favorites.includes(id);

    const handleFavoriteToggle = () => {
      if (isFavorite) {
        dispatch(removeFavorite(id));
      } else {
        dispatch(addFavorite(id));
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
