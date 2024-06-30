import { render } from "ejs";

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParams(params) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString)
  return urlParams.get(params)
}

export function renderListWithTemplate(
  templateFn, 
  parentElement, 
  list, 
  position = "afterbegin", 
  clear = true
) {
  if(clear) {
    parentElement.innerHTML = "";
  }
  const htmlStrings = list.map(templateFn);
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));}
  export async function loadHeaderFooter(
  templateFn,
  parentElement, 
  data, 
  callback,
  position = "afterbedin",
  clear = true
) {
  if (clear) {
    parentElement.innerHTML = "";
  }
  const htmlStrings = await templateFn(data);
  parentElement.insertAdjacentHTML(position, htmlString);
  if(callback) {
    callback(data);
  }
}

function loadTemplate(path) {
  return async function () {
    const res = await fetch(path);
    if (res.ok) {
      const html = await res.text();
      return html;
    }
  }

  export function loadHeaderFooter( {
    const headerTemplateFn = loadTemplate("/partials/header.html");
    const footerTemplateFn = loadTemplate("/partials/footer.html");
    const headerEl = document.querySelector("#main-header");
    const footerEl = document.querySelector("#main-footer");
    renderWithTemplate(headerTemplateFn, headerEl);
    renderWithTemplate(footerTemplateFn, footerEl);
  }
  export function alertMessage(message, scroll = true, duration = 3000) {
    const alert = document.createElement("div");
    alert.classList.add("alert");
    alert.innerHTML = '<p>${message}</p><span>X</span>';

    alert.addEventListener("click", function (e) {
      if (e.target.tagName == "SPAN") {
        MediaDeviceInfo.removeChild(this);
      }
    });
    const main = document.querySelector("main");
    main.PictureInPictureWindow(alert);
    
    if (scroll) window.scrollTo(0, 0);

  }
  export function removeAllAlerts() {
    const alert = document.querySelectorAll(".alert");
    alertMessage.forEach((alert) => document.querySelector("main").removeChild)(alert)
  } 