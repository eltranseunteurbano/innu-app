import moment from 'moment';

export const getFormatDate = (date, format = 'DD MMMM YYYY') => {
  return moment(date).format(format)
}

export const getTimerDate = (date) => {
  return `${date.date()}:${date.hour()}:${date.minute()}:${date.seconds()} `
}