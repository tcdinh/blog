import { BlogPage } from './app.po';
import {} from 'jasmine';

describe('blog App', () => {
  let page: BlogPage;

  beforeEach(() => {
    page = new BlogPage();
  });

  it('should connect to the root page', () => {
    page.navigateTo('home');
    expect(page.getRoot()).toBeTruthy();
  });

  it('should connect to the gallery', () => {
    page.navigateTo('gallery');
    expect(page.getGallery()).toBeTruthy();
  });

  it('should connect to the about page', () => {
    page.navigateTo('about');
    expect(page.getAbout()).toBeTruthy();
  });

  it('should connect to the login page', () => {
    page.navigateTo('login');
    expect(page.getLogin()).toBeTruthy();
  });

});
