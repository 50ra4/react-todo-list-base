import format from 'date-fns/format';
import parse from 'date-fns/parse';

const REFERENCE_DATE = new Date();

const DATE_FORMAT = {
  date: 'yyyy-MM-dd',
  dateJP: 'yyyy/MM/dd',
  timestamp: 'yyyy-MM-dd HH:mm:ss.SSS',
} as const;
type DateFormat = (typeof DATE_FORMAT)[keyof typeof DATE_FORMAT];

export const dateStringToDate = (
  dateString: string,
  dateFormat: DateFormat,
): Date => parse(dateString, dateFormat, REFERENCE_DATE);

export const dateToDateString = (date: Date, dateFormat: DateFormat): string =>
  format(date, dateFormat);
