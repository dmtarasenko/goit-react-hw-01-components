import {
  FriendListContainer,
  Item,
  Status,
  Avatar,
  Name,
} from "components/FriendList/FriendList.styled";

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

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
}
