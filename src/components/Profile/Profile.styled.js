import styled from "styled-components";

export const ProfileContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  width: 300px;
  text-align: center;
`;

export const Description = styled.div`
  padding: 20px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  margin: 20px auto;
`;

export const UserName = styled.p`
  color: #000000;
  font-size: 24px;
  font-weight: bold;
`;

export const Tag = styled.p`
  color: #656565;
`;

export const Location = styled.p`
  color: #787878;
`;

export const Stats = styled.ul`
  background-color: #c3c3c3;
  color: #787878;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

export const StatsItem = styled.li`
  color: #787878;
  flex-direction: column;
  display: flex;
`;

export const Label = styled.span`
  color: #787878;
`;

export const Quantity = styled.span`
  color: #000000;
  font-size: 20px;
  font-weight: bold;
`;
