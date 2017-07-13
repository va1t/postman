import { PostmanPage } from './app.po';

describe('postman App', () => {
  let page: PostmanPage;

  beforeEach(() => {
    page = new PostmanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
