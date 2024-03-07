(() => {
  const src = chrome.runtime.getURL(`watermelon-cat.png`);
  const selector = `img:not([src="${src}"])`;

  const changeImgs = async () => {
    const imgs = document.querySelectorAll(selector);
    for (let img of imgs) {
      img.src = src;
    }
  };

  setInterval(changeImgs, 1000);
})();
