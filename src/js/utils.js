export const formatDate = (date, format = 'yyyy-mm-dd hh:mm:ss') => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  function startPad(str) {
    return str.toString().padStart(2, '0');
  }

  return format.replaceAll('yyyy', year)
    .replaceAll('mm', startPad(month))
    .replaceAll('dd', startPad(day))
    .replaceAll('hh', startPad(hour))
    .replaceAll('mm', startPad(minute))
    .replaceAll('ss', startPad(second));
}