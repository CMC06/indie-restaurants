import { Typography, Card, CardContent } from '@mui/material'; 

const RestaurantPage = ({title, description, location}) => {

  const locationsData = location.map(location => {
    return (
      <Typography variant="body2">
        <li>
          {location.address} <br/> 
          {location.phone}
        </li>
        <br/>
        </Typography>)
  })

  return (
    <Card sx={{minWidth: 275, maxWidth: 850}}>
        <CardContent>
          <Typography variant="h4">
            {title}
          </Typography><br />
          <Typography variant="body2">
            {description}
          </Typography>
          <br/>
          <div>
            <Typography variant="h7">
              Locations:
            </Typography>
            <Typography variant="body2">
              <ul>
              {locationsData}
              </ul>
            </Typography>
          </div>
        </CardContent>
      </Card>
  )
}

export default RestaurantPage
