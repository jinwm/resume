function useResize() {

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

export {
  useResize
};