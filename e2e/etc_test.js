Feature('etc');

Scenario('test something', ({ I }) => {
  I.amOnPage('http://localhost:8080');

  I.see('Today Menu Information');
  I.see('한식');
  I.see('분식');

  I.click('분식');
  I.amOnPage('http://localhost:8080/searchResult=?query=한식');
});
