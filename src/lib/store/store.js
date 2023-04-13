import { writable } from "svelte/store";




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
