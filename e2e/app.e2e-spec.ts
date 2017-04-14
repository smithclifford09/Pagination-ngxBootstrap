import { ModuleGestionDeDonneePage } from './app.po';

describe('module-gestion-de-donnee App', function() {
  let page: ModuleGestionDeDonneePage;

  beforeEach(() => {
    page = new ModuleGestionDeDonneePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
