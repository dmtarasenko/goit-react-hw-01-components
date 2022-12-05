import PropTypes from "prop-types";

import { FriendListContainer } from "components/FriendList/FriendList.styled";
import { FriendListItem } from "components/FriendList/FriendListItem/FriendListItem";

export function FriendList({ friends }) {
  return (
    <FriendListContainer>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendListContainer>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
