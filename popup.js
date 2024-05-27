if (document.querySelector(".body")) {
    const button = document.querySelector(".button");
    const circle = document.querySelector(".circle");
    // const html = document.querySelector("html");
    // console.log(html.style.filter);
  
    // Load isClicked from storage
    chrome.storage.sync.get(["isClicked"], function (result) {
      let isClicked = result.isClicked;
  
      if (isClicked) {
        circle.style.animation = "moveCircleRight forwards";
        button.style.animation = "transformToBlue forwards";
      } else {
        circle.style.animation = "moveCircleLeft forwards";
        button.style.animation = "transformToYellow forwards";
      }
  
      button.addEventListener("click", () => {
        if (!isClicked) {
          // Save isClicked to storage
          chrome.storage.sync.set({ isClicked: true }, function () {
            console.log("Value is set to " + true);
            circle.style.animation = "moveCircleRight 1s forwards";
            button.style.animation = "transformToBlue 1s forwards";
            isClicked = true;
          });
  
          chrome.tabs.executeScript({
            file: "appOn.js",
          });
        } else {
          // Save isClicked to storage
          chrome.storage.sync.set({ isClicked: false }, function () {
            console.log("Value is set to " + false);
            circle.style.animation = "moveCircleLeft 1s forwards";
            button.style.animation = "transformToYellow 1s forwards";
            isClicked = false;
          });
  
          chrome.tabs.executeScript({
            file: "appOff.js",
          });
        }
      });
    });
  }
  