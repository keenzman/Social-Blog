import '../styles/globals.css'

/* This is the main entry point for any page on the app
 * Wrapper that surrounds every other page
 * Use it for shared components, like nav bars, footer, manage auth state on front end, etc.
 */

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
