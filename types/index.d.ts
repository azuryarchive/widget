interface Theme {
    font: string;
    heading: string;
    text: string;
    textDark: string;
    textLink: string;
    surface: string;
    surfaceSecondary: string;
    surfaceTertiary: string;
    surfaceQuartiary: string;
    gray: string;
    graySecondary: string;
    grayTertiary: string;
    shadowAll: string;
    shadowBottom: string;
    blurple: string;
    blurpleSecondary: string;
    green: string;
    red: string;
}
interface Configuration {
    theme?: 'dark' | 'light' | 'automatic' | Theme;
    placement?: string;
    uploadLimit?: number;
    zIndex?: number;
}
declare const _default: (config?: Configuration) => void;
/**
 * ### Generate Azury's Widget
 *
 * A function that generates Azury's widget and appends it to the DOM.
 */
export default _default;
