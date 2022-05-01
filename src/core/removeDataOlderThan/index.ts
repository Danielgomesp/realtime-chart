import { Date } from 'adapters';
import { ChartData } from 'model';

function removeDataOlderThan(
  chartData: ChartData,
  date: Date,
  minutes: number = 5,
) {
  const currentTime = date();

  return chartData.filter((item) => {
    if (!item) return false;
    if (Object.keys(item).length === 0) return false;

    const itemTime = date(item.timestamp);
    const diferenceInMinutes = currentTime.diff(itemTime, 'm');

    return diferenceInMinutes < minutes;
  });
}

export default removeDataOlderThan;
