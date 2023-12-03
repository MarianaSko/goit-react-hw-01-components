import {
  StatisticsWrapper,
  StatisticsTitle,
  StatisticsList,
  StatisticsListItem,
  ItemSpan,
} from './Statistics.styled';
import { getRandomColor } from 'helpers/getRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsListItem $bgColor={getRandomColor()} key={id}>
            <ItemSpan $opacity="0.5" $fontSize="14px">
              {label}
            </ItemSpan>
            <ItemSpan>{percentage}%</ItemSpan>
          </StatisticsListItem>
        ))}
      </StatisticsList>
    </StatisticsWrapper>
  );
};
