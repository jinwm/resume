export const dblClick = (app) => {
  app.directive('dblclick', {
    mounted(el, binding) {
      const handel = (event) => {
        event.stopPropagation();
        const now = new Date().getTime();
        if (now - el._lastClickTime < 300) { // 300毫秒内再次点击
          binding.value(event);
          el._lastClickTime = 0;
        } else {
          el._lastClickTime = now;  // 保存第一次点击的时间戳
        }
      }
      el._handel = handel;
      el.addEventListener('click', handel);
    },
    unmounted(el) {
      el.removeEventListener('click', el._handel);
      delete el._handel;
      delete el._lastClickTime;
    },
  })
}