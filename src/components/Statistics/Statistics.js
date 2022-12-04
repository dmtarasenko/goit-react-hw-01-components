import PropTypes from "prop-types";
import {
  StatisticsContainer,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from "components/Statistics/Statistics.styled";

export function Statistics({ title, data }) {
  return (
    title && (
      <StatisticsContainer>
        <Title>{title}</Title>
        <StatList>
          {data.map((item) => (
            <StatItem key={item.id}>
              <Label>{item.label}</Label>
              <Percentage>{item.percentage}%</Percentage>
            </StatItem>
          ))}
        </StatList>
      </StatisticsContainer>
    )
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
