(() => {

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { success } = obj;
    if (success === true) {
      changeAllImgs();
    }
  })

  const changeAllImgs = async () => {
    const imgs = document.getElementsByTagName("img");
    const src = chrome.runtime.getURL("assets/watermelon-cat.png");
    for (let img of imgs) {
      img.src = src;
    }
  };

  changeAllImgs();
})();
