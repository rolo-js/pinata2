import { Pinata2Page } from './app.po';

describe('pinata2 App', () => {
  let page: Pinata2Page;

  beforeEach(() => {
    page = new Pinata2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to pi!!');
  });
});
