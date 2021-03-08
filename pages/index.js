import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Loader from '../components/Loader'

// index is the root url of your site
// When you create hyperlinks to diff pages in your site, you use <Link> instead of <a>

// export default function Home() {
//   return (
//     <div>
//       <Link prefetch={false} href={{
//           pathname: '/[username]',
//           query: { username: 'szaman' },
//         }}>
//         <a>Sakeen's Profile</a>
//       </Link>
//     </div>
//   )
// }

export default function Home() {
    return (
        <div>
            <Loader show />
        </div>
    );
}
