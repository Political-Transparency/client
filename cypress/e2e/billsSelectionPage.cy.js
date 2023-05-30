/// <reference types="cypress" />

const {
  billsSelectionHeaders,
  tabHeader2,
  tabHeader1,
  possibleBillsTable,
  table,
  selectedBillsTable,
} = require("../headers/bills_selection_page_headers");

const INPUT_PREFIXES = [
  "dvd",
  "התנתקות",
  "ממשלה",
  "מדינה",
  "משפט",
  "חוק",
  "מס",
];

const MAX_DROPDOWN_SIZE = 30;

describe("bills Selection Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("UI validation", () => {
    // header check
    cy.get("#bills_selection_page-header").should(
      "contain.text",
      billsSelectionHeaders.header
    );
    cy.get("#bills_selection_page-hint").should(
      "contain.text",
      billsSelectionHeaders.hint
    );

    // tabs check
    // tab 1
    cy.get("#tab-2_title").should("contain.text", tabHeader2.title);
    cy.get("#tab_description").should("contain.text", tabHeader2.description);
    cy.get("#autocomplete-input")
      .invoke("attr", "placeholder")
      .should("equal", tabHeader2.inputPlaceholder);
    cy.get("#tab-action_button").should("contain.text", tabHeader2.button);
    //tab 2
    cy.get("#tab-1_title").should("contain.text", tabHeader1.title).click();
    cy.get("#tab_description").should("contain.text", tabHeader1.description);
    cy.get("#knesset_num_select").should("exist");
    cy.get("#tab-action_button").should("contain.text", tabHeader1.button);

    // tables check
    // possible bills
    cy.get("#bills_selection_page-possible_votes").should(
      "contain.text",
      possibleBillsTable.title
    );
    cy.get("#possible_bills-index_header").should("exist");
    cy.get("#possible_bills-identifier_header").should(
      "contain.text",
      table.identifyField
    );
    cy.get("#possible_bills-label_header").should(
      "contain.text",
      table.labelField
    );
    cy.get("#possible_bills-action_header").should("exist");
    // selected bills
    cy.get("#bills_selection_page-selected_votes").should(
      "contain.text",
      selectedBillsTable.title
    );
    cy.get("#selected_bills-index_header").should("exist");
    cy.get("#selected_bills-identifier_header").should(
      "contain.text",
      table.identifyField
    );
    cy.get("#selected_bills-label_header").should(
      "contain.text",
      table.labelField
    );
    cy.get("#selected_bills-action_header").should("exist");

    //action buttons
    cy.get("#bills_selection_page-load_votes_button").should(
      "contain.text",
      billsSelectionHeaders.loadBillsButton
    );
    cy.get("#bills_selection_page-search_button").should(
      "contain.text",
      billsSelectionHeaders.searchButton
    );
    cy.get("#bills_selection_page-left_arrow").should("exist");
  });

  it.only("Autocomplete functionality", () => {
    cy.get("#autocomplete-input").as("BillsInput").should("be.empty");
    cy.wait(3000); //wait for results to load up
    for (const prefix of INPUT_PREFIXES) {
      cy.get("@BillsInput").type(prefix).clear().type(prefix);
      cy.get("#autocomplete-dropdown")
        .children()
        .each(($child, $index, $list) => {
          expect($list.length).to.be.at.most(MAX_DROPDOWN_SIZE);
          const currentElementText = $child.text().toLowerCase();
          expect(currentElementText).to.have.string(`${prefix}`); // validate that the results matches the prefix
        });
      cy.get("@BillsInput").clear();
    }
  });
});
