import { DOM_ELEMENTS } from "./domElements.js";
import { DATA_STORE } from "../data/dataStore.js";
// ------------------------------------------------------------------------
// UI MODULE / COMPONENT FUNCTIONS
// Functions responsible for updating the UI.
// ------------------------------------------------------------------------
export const UI_MODULE = {
  populateDropdown: function (
    selectElement,
    values,
    valueKeyOrFn,
    displayKeyOrMapOrFn
  ) {
    while (selectElement.options.length > 1) {
      selectElement.remove(1);
    }
    values.forEach((value) => {
      const option = document.createElement("option");
      option.value =
        typeof valueKeyOrFn === "function"
          ? valueKeyOrFn(value)
          : valueKeyOrFn
          ? value[valueKeyOrFn]
          : value;
      if (typeof displayKeyOrMapOrFn === "function") {
        option.textContent = displayKeyOrMapOrFn(value);
      } else if (typeof displayKeyOrMapOrFn === "object") {
        option.textContent = displayKeyOrMapOrFn[option.value] || option.value;
      } else if (displayKeyOrMapOrFn) {
        option.textContent = value[displayKeyOrMapOrFn];
      } else {
        option.textContent = option.value;
      }
      selectElement.appendChild(option);
    });
  },

  displayResults: function (filteredData) {
    DOM_ELEMENTS.resultsTableBody.innerHTML = "";
    if (filteredData.length === 0) {
      DOM_ELEMENTS.noResultsMessage.style.display = "block";
      DOM_ELEMENTS.resultsTableWrapper.style.display = "none";
      return;
    }
    DOM_ELEMENTS.noResultsMessage.style.display = "none";
    DOM_ELEMENTS.resultsTableWrapper.style.display = "block";

    filteredData.sort((a, b) => {
      if (a.collegeName !== b.collegeName)
        return (a.collegeName || "").localeCompare(b.collegeName || "");
      if (a.branch !== b.branch)
        return (a.branch || "").localeCompare(b.branch || "");
      if (a.year !== b.year) return (b.year || 0) - (a.year || 0);
      return (a.closingRank || Infinity) - (b.closingRank || Infinity);
    });

    filteredData.forEach((item, index) => {
      const row = DOM_ELEMENTS.resultsTableBody.insertRow();
      row.className =
        index % 2 === 0
          ? "results-table__row--even bg-slate-700/20"
          : "results-table__row--odd bg-slate-700/40";

      let collegeDisplayName = item.collegeName || item.collegeAcronym;
      if (
        item.collegeAcronym &&
        collegeDisplayName.indexOf(`(${item.collegeAcronym})`) === -1 &&
        collegeDisplayName !== item.collegeAcronym
      ) {
        collegeDisplayName += ` (${item.collegeAcronym})`;
      }

      const cellsData = [
        collegeDisplayName,
        item.branch || "N/A",
        item.year || "N/A",
        DATA_STORE.categoryDisplayNames[item.category] ||
          item.category ||
          "N/A",
        item.openingRank !== null ? item.openingRank : "N/A",
        item.closingRank !== null ? item.closingRank : "N/A",
      ];

      cellsData.forEach((cellData, cellIndex) => {
        const cell = row.insertCell();
        cell.textContent = cellData;
        cell.className =
          "results-table__cell px-4 py-3 text-sm text-slate-200 whitespace-nowrap";
        if (cellIndex === 4)
          cell.classList.add("results-table__cell--rank-or", "font-medium");
        if (cellIndex === 5)
          cell.classList.add(
            "results-table__cell--rank-cr",
            "font-bold",
            "text-cyan-400"
          );
      });
    });
  },

  showLoader: function (show) {
    DOM_ELEMENTS.loader.style.display = show ? "block" : "none";
  },
};
