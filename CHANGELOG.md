# Changelog

## [Unreleased] - YYYY-MM-DD

### Changed
- **Font Data Handling:**
    - Modified `_tools/generateFontData.js` to produce a single `src/_data/shared_charset.json` instead of duplicate `charset.json` files for each font variant. This significantly reduces data duplication.
    - Updated `src/_includes/character-grid.html` to use the new `shared_charset.json`.
- **JavaScript (`src/js/main.js`):**
    - Removed unused JavaScript logic related to a `gridtoggle` element.
    - Relocated dark mode toggle event listener from an inline script in `src/_layouts/default.html` to `src/js/main.js` for better code organization.
- **CSS (`src/css/`):**
    - Removed `src/css/animation.css` as the feature was not part of the MVP.
    - Removed the corresponding import for `animation.css` from `src/css/main.css`.
- **Content (`src/_data/content.js`):**
    - Shortened lengthy placeholder text in `setting3`, `setting4`, `setting5`, and `setting6` fields for a leaner default page.
- **Configuration (`src/_data/site.js`):**
    - Made the `about` field more generic.
    - Shortened the `language` field to be a more concise overview.

### Removed
- Individual `charset.json` files from `src/_data/fonts/` subdirectories (achieved by running the modified `generateFontData.js` script).
- `src/css/animation.css` file.

### Fixed
- N/A

### Added
- `PLAN.md`: Detailed step-by-step plan for the streamlining task.
- `TODO.md`: Checklist version of the plan.
- `CHANGELOG.md`: This file, to track changes.
- `src/_data/shared_charset.json`: Consolidated charset data file.
