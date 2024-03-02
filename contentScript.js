(() => {

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { success } = obj;
    if (success === true) {
      changeAllImgs();
    }
  })

  const changeAllImgs = async () => {
    var imgs = document.getElementsByTagName("img");
    for (let img of imgs) {
      img.src = chrome.runtime.getURL("assets/watermelon-cat.png");
    }
  };

  changeAllImgs();
})();
