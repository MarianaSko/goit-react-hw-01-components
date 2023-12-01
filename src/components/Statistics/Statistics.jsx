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
        {stats.map(item => (
          <StatisticsListItem $bgColor={getRandomColor()} key={item.id}>
            <ItemSpan $opacity="0.5" $fontSize="14px" $weight="500">
              {item.label}
            </ItemSpan>
            <ItemSpan $weight="500">{item.percentage}%</ItemSpan>
          </StatisticsListItem>
        ))}
      </StatisticsList>
    </StatisticsWrapper>
  );
};
