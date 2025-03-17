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

export const useResize = () => {

  const _resize = () => {
    const width = Math.max(window.innerWidth, 1440);
    document.documentElement.style.fontSize = `${width / 1920 * 100}px`;
  }

  _resize();

  let timer;
  window.addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      _resize();
    }, 100)
  });
}

export const getScale = () => {
  return Math.min(Math.floor(parseFloat(document.documentElement.style.fontSize) / 15), 5);
}