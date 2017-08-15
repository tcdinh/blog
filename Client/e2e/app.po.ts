import { browser, by, element } from 'protractor';

export class BlogPage {
  navigateTo(target) {
    return browser.get('/' + target);
  }

  getRoot() {
    return element(by.tagName('app-root')).isPresent();
  }

  getGallery() {
    return element(by.tagName('app-gallery')).isPresent();
  }

  getAbout() {
    return element(by.tagName('app-about-component')).isPresent();
  }

  getLogin() {
    return element(by.tagName('app-login-page')).isPresent();
  }
}
