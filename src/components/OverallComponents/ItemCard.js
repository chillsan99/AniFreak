import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './CardStyle.css'

const ItemCard = ({data}) => {
    return (
    <div>
        <Card sx={{
                borderRadius: '1rem',
                boxShadow: 'none',
                position: 'relative',
                minWidth: 350,
                minHeight: 560,
                margin:'20px',
                '&:after': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  width: '100%',
                  height: '64%',
                  bottom: 0,
                  zIndex: 1,
                  background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
                },
              }
        }>
            <CardMedia
                component="img"
                sx={{ height:560,
                    objectFit: 'cover'}}
                    image={data.images.jpg.large_image_url}
                    title={data.title_english}
                />
                <CardContent sx={{ 
                    position: 'absolute',
                    color:'white',
                    zIndex: 2,
                    bottom: 0,
                    width: '93%',
                    textAlign: "center"}}>
                    <Typography gutterBottom component="div">
                        <span className='card-title'>{data.title}</span>
                    </Typography>
                    <Typography>
                        <span className='card-score'>{data.score}</span>
                    </Typography>
                </CardContent>
        </Card>
    </div>
  )
}

export default ItemCard