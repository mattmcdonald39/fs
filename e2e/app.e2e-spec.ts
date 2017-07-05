import { FsPage } from './app.po';

describe('fs App', () => {
  let page: FsPage;

  beforeEach(() => {
    page = new FsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
