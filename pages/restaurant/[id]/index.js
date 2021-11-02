import { server } from '../../../config';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Meta from '../../../Components/Meta';

const restaurant = ({ restaurant }) => {

  // const router = useRouter();
  // const {id} = router.query;

  return (
    <div>
      <Meta title={restaurant.title} description={restaurant.tagline} keywords={restaurant.keywords} />
      <h1>{restaurant.title}</h1>
      <p>{restaurant.description}</p>
      <Link href='/'>Go Back</Link>
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
