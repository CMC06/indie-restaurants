import restaurantStyles from '../styles/Restaurants.module.css';
import Restaurant from './Restaurant';

const RestaurantList = ({restaurants}) => {
  return (
    <div className={restaurantStyles.grid}>
      {restaurants.map(restaurant => {
        return(
          <Restaurant restaurant={restaurant} key={restaurant.id} />
        )
      })}
    </div>
  )
}

export default RestaurantList
