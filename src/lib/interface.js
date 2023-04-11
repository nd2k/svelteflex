/**
 * Enum size value
 * @readonly
 * @enum {string}
 */
export const SizeEnum = {
    SMALL: "15%",
    MEDIUM: "50%",
    LARGE: "100%",
    AUTO: "auto"
}

/**
 * Enum input type
 * @readonly
 * @enum {string}
 */
export const InputType = {
    TEXT: "text",
    COLOR: "color",
    PASSWORD: "password",
    RADIO: "radio",
    CHECKBOX: "checkbox"
}

export class Color {
    /**
     * Represents color object
     * @param {string} label 
     * @param {string} value 
     */
    constructor(label, value) {
        this.label = label;
        this.value = value;
    }
}