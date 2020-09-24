import { format } from 'date-fns';

export const formatDate = (
  dateTime: Date | number | string | null | undefined,
) => {
  if (!dateTime) {
    return null;
  }

  return format(new Date(dateTime), 'yyyy-MM-dd');
};
