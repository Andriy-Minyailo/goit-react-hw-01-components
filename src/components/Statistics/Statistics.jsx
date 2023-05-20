import PropTypes from 'prop-types';
import {
  Item,
  Label,
  Percentage,
  Section,
  StatList,
  Title,
} from './Statistic.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </Item>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
