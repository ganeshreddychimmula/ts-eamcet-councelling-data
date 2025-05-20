   import { UI_MODULE } from "./uiModule.js";
   import { DOM_ELEMENTS } from "./domElements.js";
   import { DATA_STORE } from "../data/dataStore.js";
   // ------------------------------------------------------------------------
    // FILTER LOGIC MODULE
    // Functions related to filtering data.
    // ------------------------------------------------------------------------
   export const FILTER_LOGIC = {
        applyFilters: function() {
            UI_MODULE.showLoader(true);
            DOM_ELEMENTS.resultsTableBody.innerHTML = ''; 
            DOM_ELEMENTS.noResultsMessage.style.display = 'none';
            DOM_ELEMENTS.resultsTableWrapper.style.display = 'none';

            setTimeout(() => { // Simulate processing delay
                const selectedCollege = DOM_ELEMENTS.collegeFilter.value;
                const selectedBranch = DOM_ELEMENTS.branchFilter.value;
                const selectedYear = DOM_ELEMENTS.yearFilter.value;
                const selectedCategory = DOM_ELEMENTS.categoryFilter.value;

                const filteredData = DATA_STORE.finalCutoffData.filter(item => {
                    const collegeMatch = (selectedCollege === 'ALL' || item.collegeAcronym === selectedCollege);
                    const branchMatch = (selectedBranch === 'ALL' || item.branch === selectedBranch);
                    const yearMatch = (selectedYear === 'ALL' || (item.year && item.year.toString() === selectedYear));
                    const categoryMatch = (selectedCategory === 'ALL' || item.category === selectedCategory);
                    return collegeMatch && branchMatch && yearMatch && categoryMatch;
                });
                UI_MODULE.displayResults(filteredData);
                UI_MODULE.showLoader(false);
            }, 200); 
        }
    };