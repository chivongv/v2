import { format } from 'date-fns';

export const formatDate = (
  dateTime: Date | number | string | null | undefined,
  options?: string,
) => {
  if (!dateTime) {
    return null;
  }

  if (options === 'datetime') format(new Date(dateTime), 'yyyy-MM-dd HH:mm');

  return format(new Date(dateTime), 'yyyy-MM-dd');
};
