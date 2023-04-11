import { writable } from "svelte/store";

/**
 * Color object
 * @typedef {Object} Color
 * @property {string} label
 * @property {string} value
 */

/**
 * Theme object
 * @typedef {Object} Theme
 * @property {string} projectName
 * @property {Array<Color>} selectedColors
 */


export const theme = writable({
    projectName: "",
    selectedColors: []
});

/**
 * Function to add colors to the theme
 * @param {Color} newColor 
 * @returns {Theme}
 */
export function addColor(newColor) {
    theme.update($theme => {
        $theme.selectedColors = Object.freeze([...$theme.selectedColors, newColor]);
        return $theme;
    })
}
