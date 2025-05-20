import { DATA_STORE } from "./data/dataStore.js";
import getUniqueValues from "./utils/getUniqueValues.js";
import { UI_MODULE } from "./utils/uiModule.js";
import { DOM_ELEMENTS } from "./utils/domElements.js";
import { FILTER_LOGIC } from "./utils/filterLogic.js";

// ------------------------------------------------------------------------
// INITIALIZATION MODULE
// Sets up the application.
// ------------------------------------------------------------------------
export function initFiltersAndDisplay() {
  UI_MODULE.showLoader(true);

  const uniqueColleges = [];
  const collegeNameTempMap = new Map();
  DATA_STORE.finalCutoffData.forEach((item) => {
    if (item.collegeAcronym && !collegeNameTempMap.has(item.collegeAcronym)) {
      collegeNameTempMap.set(
        item.collegeAcronym,
        item.collegeName || item.collegeAcronym
      );
    }
  });
  collegeNameTempMap.forEach((name, acronym) => {
    uniqueColleges.push({ acronym: acronym, name: name });
  });
  uniqueColleges.sort((a, b) => a.name.localeCompare(b.name));
  UI_MODULE.populateDropdown(
    DOM_ELEMENTS.collegeFilter,
    uniqueColleges,
    "acronym",
    (item) => `${item.name} (${item.acronym})`
  );

  const uniqueBranches = getUniqueValues(
    DATA_STORE.finalCutoffData,
    "branch"
  );
  UI_MODULE.populateDropdown(DOM_ELEMENTS.branchFilter, uniqueBranches);

  const uniqueYears = getUniqueValues(
    DATA_STORE.finalCutoffData,
    "year"
  ).sort((a, b) => b - a);
  UI_MODULE.populateDropdown(DOM_ELEMENTS.yearFilter, uniqueYears);

  const uniqueCategories = getUniqueValues(
    DATA_STORE.finalCutoffData,
    "category"
  );
  UI_MODULE.populateDropdown(
    DOM_ELEMENTS.categoryFilter,
    uniqueCategories,
    null,
    DATA_STORE.categoryDisplayNames
  );

  UI_MODULE.displayResults(DATA_STORE.finalCutoffData);
  UI_MODULE.showLoader(false);
}

export function setupEventListeners() {
  DOM_ELEMENTS.applyFiltersButton.addEventListener(
    "click",
    FILTER_LOGIC.applyFilters
  );
}
