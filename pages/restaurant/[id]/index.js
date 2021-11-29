import { server } from '../../../config';
import {useRouter} from 'next/router';
import Meta from '../../../components/Meta';
import GoBack from '../../../components/GoBack';
import RestaurantPage from '../../../components/RestaurantPage';

const restaurant = ({ restaurant }) => {

  // const router = useRouter();
  // const {id} = router.query;

  return (
    <div>
      <Meta title={restaurant.title} description={restaurant.tagline} keywords={restaurant.keywords} />
      <RestaurantPage title={restaurant.title} description={restaurant.description} location={restaurant.locations} />
      <GoBack />
    </div>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/restaurants/${context.params.id}`)
  const restaurant = await res.json();

  return {
    props: {
      restaurant,
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/restaurants`)
  const restaurants = await res.json();

  const ids = restaurants.map(restaurant => restaurant.id);
  const paths = ids.map(id => ({params: {id: id.toString()}}))

  return {
    paths, 
    fallback: false,
  }
}

export default restaurant
