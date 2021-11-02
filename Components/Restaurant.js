import Link from 'next/link';
import restaurantStyles from '../styles/Restaurants.module.css';

const Restaurant = ({restaurant}) => {
  return (
    <Link href="restaurant/[id]" as={`/restaurant/${restaurant.id}`} >
      <a className={restaurantStyles.card}>
      <h2>
        {restaurant.title} &rarr;
      </h2>
      <p>
        {restaurant.tagline}
      </p>
      </a>
    </Link>
  )
}

export default Restaurant
