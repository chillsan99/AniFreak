import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ItemCard = ({data}) => {
    return (
    <div>
        <Card sx={{
                borderRadius: '1rem',
                boxShadow: 'none',
                position: 'relative',
                minWidth: 200,
                minHeight: 560,
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
                    width: '100%',
                    textAlign: "center"}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                    </Typography>
                    <Typography variant="h12" color="white">
                        {data.score}
                    </Typography>
                </CardContent>
        </Card>
    </div>
  )
}

export default ItemCard