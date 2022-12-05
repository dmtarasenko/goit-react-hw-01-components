import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 10px;
  background-color: ${({ isOnline }) => (isOnline ? "green" : "red")};
`;

export const Avatar = styled.img`
  margin-left: 10px;
`;

export const Name = styled.p`
  margin-left: 10px;
`;
