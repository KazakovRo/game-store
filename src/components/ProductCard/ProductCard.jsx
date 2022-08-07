import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import PropTypes from 'prop-types'

const ProductCard = ({ productData: { name, images } }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={images?.card} height="350" alt="game logo" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Btn
        </Button>
      </CardActions>
    </Card>
  )
}

ProductCard.propTypes = {
  productData: PropTypes.shape({
    name: PropTypes.string,
    images: PropTypes.shape({
      card: PropTypes.string
    })
  })
}

ProductCard.defaultProps = {
  productData: {
    name: '',
    images: {
      card: ''
    }
  }
}

export default ProductCard
