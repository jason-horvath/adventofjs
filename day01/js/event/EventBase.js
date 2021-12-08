export default class EventBase {
  
  select = (selector) => {
    return document.querySelector(selector);
  }

  listen = (selector, eventName, handler) => {
    this.select(selector).addEventListener(eventName, handler);
  }
}