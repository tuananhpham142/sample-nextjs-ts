import moment, { Moment, unitOfTime } from 'moment';
moment.locale('vi');
export type DATE_INPUT_TYPE = 'DD/MM/YYYY' | 'DD-MM-YYYY' | 'MM/DD/YYYY' | 'MM-DD-YYYY' | undefined;

export const YEAR_RANGE_PICKER = () => {
    const START_YEAR = 1900;
    const END_YEAR = moment().year() + 20;
    let listYears = [];
    for (let from = +START_YEAR, to = +END_YEAR; from <= to; from++) listYears.push(from);
    return listYears;
};

export const formatDateTimeString = (value: string | Moment, inputType: DATE_INPUT_TYPE = undefined) => {
    return moment(value, inputType).format('MMMM Do YYYY, hh:mm:ss');
};

export const formatDateAndMonth = (value: string | Moment, inputType: DATE_INPUT_TYPE = undefined) => {
    return moment(value, inputType).format('dddd, DD/MM/YY');
};

export const formatDateString = (value: string | Moment, inputType: DATE_INPUT_TYPE = undefined) => {
    return moment(value, inputType).format('dddd, MMMM D, YYYY');
};

export const formatDateOnly = (value: string | Moment, inputType: DATE_INPUT_TYPE = undefined) => {
    return moment(value, inputType).format('DD/MM/YYYY');
};

export const formatDateTime = (value: string | Moment, inputType: DATE_INPUT_TYPE = undefined) => {
    return moment(value, inputType).format('YYYY-MM-DD hh:mm:ss');
};

export const formatMonthOnly = (value: string | Moment, inputType: DATE_INPUT_TYPE = undefined) => {
    return moment(value, inputType).format('MM/YYYY');
};

export const getStartMonthFromToday = (yearsAgo: number) => {
    return moment()
        .subtract(12 * yearsAgo, 'month')
        .format('MMMM, YYYY');
};

export const getTimeAgo = (date: string | Moment) => {
    return moment(date).fromNow(true);
};

export const timeAgoOrDate = (
    date: string | Moment,
    compare: unitOfTime.Diff = 'minutes',
    maxTimeCompare: number = 1,
    dateOnly: boolean = false,
) => {
    const diffNow = moment().diff(moment(date), compare);
    if (diffNow < maxTimeCompare) {
        return 'Just now';
    } else if (diffNow > maxTimeCompare) {
        return dateOnly ? formatDateString(date) : formatDateTime(date);
    }
    return getTimeAgo(date);
};

export const getArrayDateRange = (startDate: string | Moment, endDate: string | Moment) => {
    const dates = [];

    const fromDate = moment(startDate).startOf('day');
    const toDate = moment(endDate).startOf('day');

    while (fromDate.add(1, 'days').diff(toDate) < 0) {
        dates.push(fromDate.clone());
    }

    return dates;
};

export const dateDiff = (
    startDate: string | Moment,
    endDate: string | Moment,
    format: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond' = 'day',
) => {
    const fromDate = moment(startDate).startOf('day');
    const toDate = moment(endDate).startOf('day');

    const dateDiff = fromDate.diff(toDate, format);

    return ` ${dateDiff} ${getUnitOfTimeText(format)}`;
};

export const getUnitOfTimeText = (
    type: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond',
) => {
    return VietnameseUnitOfTime[type];
};

export const VietnameseUnitOfTime = {
    year: 'Năm',
    month: 'Tháng',
    week: 'Tuần',
    day: 'Ngày',
    hour: 'Giờ',
    minute: 'Phút',
    second: 'Giây',
    millisecond: 'Mili-giây',
};
