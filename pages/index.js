import { server } from '../config';
import RestaurantList from '../Components/RestaurantList';
import styles from '../styles/Layout.module.css'

export default function Home({ restaurants }) {
  console.log(restaurants);
  return (
    <div className={styles.container}>
        <main className={styles.main}>
        <h1 className={styles.title}>
          {"Welcome to Indy's Indies Restaurant App!"}
        </h1>

        <p className={styles.description}>
          {"Welcome to Indy's Indies. We are passionate about getting the word out about local independently owned and operated restaurants in our community of Indianapolis and nearby areas. We hope to make it easier for you and your family to discover new restaurants that are unique to Indy and eat local!"}
        </p>
        <RestaurantList restaurants={restaurants} />
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/restaurants`);
  const restaurants = await res.json();

  return {
    props: {
      restaurants
    }
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const restaurants = await res.json();

//   return {
//     props: {
//       restaurants
//     }
//   }
// }