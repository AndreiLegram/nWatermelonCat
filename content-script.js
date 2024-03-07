(() => {

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { success } = obj;
    if (success === true) {
      //changeAllImgs();
    }
  })

  const changeAllImgs = async () => {
    const imgs = document.getElementsByTagName("img");
    const src = chrome.runtime.getURL("assets/watermelon-cat.png");
    for (let img of imgs) {
      img.src = src;
    }
  };

  //changeAllImgs();
})();

function getAllImages() {
  return Array.from(document.querySelectorAll('img'));
}

function mutationCallback(mutations) {
  for (let mutation of mutations) {
    if (mutation.type === 'childList') {
      const addedNodes = Array.from(mutation.addedNodes);
      addedNodes.forEach(node => {
        if (node.tagName && node.tagName.toLowerCase() === 'img') {
          console.log('Nova imagem adicionada:', node);
        }
      });
    }
  }
}

const observe = () => {
  observer.observe(document.body, { subtree: true, childList: true });
}

const observer = new MutationObserver(mutationCallback);

observe();
