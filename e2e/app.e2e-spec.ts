import { Angular2KoulutusPage } from './app.po';

describe('angular2-koulutus App', function() {
  let page: Angular2KoulutusPage;

  beforeEach(() => {
    page = new Angular2KoulutusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
