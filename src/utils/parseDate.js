import { formatDistance, subSeconds } from 'date-fns';
import { ru } from 'date-fns/locale';

export function parseDate(date) {
  return formatDistance(subSeconds(new Date(date), 0), new Date(), {
    addSuffix: true,
    locale: ru
  });
}
