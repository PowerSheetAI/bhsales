import { BhSalesPage } from './app.po';

describe('bh-sales App', () => {
  let page: BhSalesPage;

  beforeEach(() => {
    page = new BhSalesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
