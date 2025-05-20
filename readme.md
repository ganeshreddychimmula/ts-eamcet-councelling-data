# 📊 TS EAPCET (EAMCET) Counselling Data Explorer

An interactive web application designed to help aspiring engineering students in Telangana navigate and explore TS EAPCET (formerly EAMCET) counselling cutoff data for the years 2022, 2023, and 2024. This tool aims to provide insights into admission probabilities by presenting past cutoff ranks for various colleges and branches.

## visit live site at: https://ganeshreddychimmula.github.io/ts-eamcet-councelling-data/

![](./screenshots/Screenshot%20(119).png)

## ✨ Features

* **Interactive Data Display:** View opening and closing ranks in a user-friendly tabular format.
* **Comprehensive Filters:** Filter data by:
    * College (Top institutions in Telangana)
    * Branch (CSE, ECE, IT, EEE, MEC, CIV, and specializations like AI&ML, Data Science)
    * Year (2022, 2023, 2024)
    * Category (OC Male/Female, EWS Male/Female, General, etc.)
* **College Ranking List:** Displays a list of top engineering colleges based on EAPCET performance.
* **Multi-Year Data:** Includes cutoff information from 2022, 2023 (Final Phase where available), and 2024 (primarily Round 1 OC General).
* **Category-Specific Cutoffs:** Provides detailed cutoffs for different reservation categories, including male/female distinctions.
* **Responsive Design:** Accessible on various devices (desktop, tablet, mobile).
* **Organized Code Structure:** (Conceptual) JavaScript organized into modules for data, DOM manipulation, UI updates, and logic. CSS organized with CUBE CSS principles in mind.

## 📈 Data Source & Disclaimer

The data presented in this application has been collated from:
* The "TS Eamcet councelling data" document provided (presumably based on official TSCHE releases and reputable educational portals).
* Information regarding 2022 and 2023 cutoffs from "TS EAMCET 2022 & 2023 Engineering Counselling Data (Telangana)" (likely derived from official last-rank statements).

**Important Disclaimer:**
* The data is for informational and reference purposes only.
* 2024 data is largely based on Round 1 Closing Ranks for OC General. 2022 & 2023 data is collated from multiple sources, prioritizing final phase information where available.
* While efforts have been made to ensure accuracy, this tool may not be exhaustive or reflect the absolute latest official figures for all categories/colleges/branches.
* **Always refer to the official Telangana State Council of Higher Education (TSCHE) websites (eapcet.tsche.ac.in and tgeapcet.nic.in) for the most definitive and up-to-date information.**

## 🛠️ Technology Stack

* **HTML5:** For structuring the web page.
* **CSS3:**
    * **Tailwind CSS:** For utility-first styling and responsive design.
    * Custom CSS organized with **CUBE CSS** (Composition, Utility, Block, Exception) principles in mind within the `<style>` tags.
* **JavaScript (ES6+):** For interactivity, data manipulation, and DOM updates.
    * Conceptually organized into modules for better structure (Data Store, DOM Elements, UI Module, Filter Logic, Initialization).

## 🚀 How to Use / Run

This is a static web application.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/ganeshreddychimmula/ts-eamcet-councelling-data.git](https://github.com/ganeshreddychimmula/ts-eamcet-councelling-data.git)
    ```
2.  **Navigate to the directory:**
    ```bash
    cd ts-eamcet-councelling-data
    ```
3.  **Open the `index.html` file:**
    * Simply open the `index.html` (or the main HTML file in the repository) in your preferred web browser.
    * **Note:** If you encounter issues with JavaScript modules (due to CORS policy) when opening directly via `file:///`, it's recommended to serve the files using a local development server. Many simple servers are available (e.g., `Live Server` extension in VS Code, Python's `http.server`, or `npx serve`).

Once loaded, you can use the dropdown filters to select College, Branch, Year, and Category, then click "Apply Filters" to view the relevant cutoff data in the table.

## 📁 File Structure (Conceptual)

While the application might be delivered as a single `index.html` file with embedded CSS and JavaScript for simplicity in this context, the internal code organization follows these conceptual separations:

* **`index.html`**: Main application file containing HTML structure, CSS styles (within `<style>`), and JavaScript logic (within `<script>`).
* **CSS (within `index.html` `<style>` tags):**
    * **Composition Layer:** Global styles, resets (handled by Tailwind preflight), layout primitives.
    * **Block Layer:** Styles for specific UI components (e.g., `.filter-controls`, `.results-table`).
    * **Utility Layer:** Primarily handled by Tailwind CSS.
* **JavaScript (within `index.html` `<script>` tags):**
    * **`DATA_STORE` module:** Holds all raw cutoff data, college name mappings, and category display names.
    * **`DOM_ELEMENTS` module:** Centralizes references to DOM elements.
    * **`UTILS` module:** General helper functions.
    * **`UI_MODULE`:** Functions for populating dropdowns, displaying results in the table, managing loader visibility.
    * **`FILTER_LOGIC` module:** Handles the filtering of data based on user selections.
    * **`APP_INIT` module:** Initializes the application, sets up filters, and attaches event listeners.
    * *(If you were to separate files, you might have `js/main.js`, `js/data.js`, `js/ui.js`, `js/util/domUtils.js`, etc.)*

## 🤝 Contributing

Contributions are welcome! If you have suggestions, find bugs, or want to add more data (with proper sourcing), please feel free to:
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some amazing feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

Please ensure to update tests as appropriate (if any are added in the future).

## 📜 License

Consider adding a license file to your repository (e.g., `LICENSE.md`). The [MIT License](https://opensource.org/licenses/MIT) is a popular choice for open-source projects.

Example:
This project is licensed under the MIT License - see the `LICENSE.md` file for details (if you add one).

## 🙏 Acknowledgements

* Data is based on information from the Telangana State Council of Higher Education (TSCHE) and other educational resources.
* Thanks to the developers of Tailwind CSS for the utility-first CSS framework.

---

