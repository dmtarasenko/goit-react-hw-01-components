import styled from "styled-components";

export const StatisticsContainer = styled.section`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  width: 300px;
  text-align: center;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  margin: 20px;
`;

export const StatList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
`;

export const StatItem = styled.li`
  flex-direction: column;
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: ${() => "#" + Math.random().toString(16).slice(3, 9)};
`;

export const Label = styled.span`
  color: #fff;
`;

export const Percentage = styled.span`
  color: #fff;
  font-size: 20px;
`;
