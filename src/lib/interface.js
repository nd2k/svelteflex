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

/**
 * Enum flex align
 * @readonly
 * @enum {string}
 */
export const alignFlexMap = {
    START: 'flex-start',
    CENTER: 'center',
    END: 'flex-end',
    STRETCH: 'stretch',
  };
  
  /**
   * Enum flex justify
   * @readonly
   * @enum {string}
   */
  export const justifyFlexMap = {
    START: 'flex-start',
    CENTER: 'center',
    END: 'flex-end',
    AROUND: 'space-around',
    BETWEEN: 'space-between',
    EVENLY: 'space-evenly',
  };

  /**
   * Enum flex direction
   * @readonly
   * @enum {string}
   */
  export const directionFlexMap = {
    ROW: "row",
    COLUMN: "column"
  };