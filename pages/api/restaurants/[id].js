import { restaurants } from '../../../data'

export default function handler({query:{id}}, res){
  const filtered = restaurants.filter(restaurant => restaurant.id === id);

  if(filtered.length > 0){
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({message: `Restaurant with the id of ${id} not found.`})
  }
  
}