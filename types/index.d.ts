import './styles/base.css';
import './styles/dark.css';
import './styles/light.css';
interface Configuration {
    theme?: String;
    placement?: String;
    uploadLimit?: Number;
    zIndex?: Number;
}
declare const _default: (config?: Configuration | undefined) => void;
/**
 * **Generate the Widget**
 *
 * Generate the Widget
 */
export default _default;
