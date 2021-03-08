/* Pass in the prop 'show'
 * When it is T, it is visible, otherwise it won't be
 */
export default function Loader({ show }) {
    return show ? <div className="loader"></div> : null;
}