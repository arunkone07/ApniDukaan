import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { products } from '../../constants/data.js';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Button, Divider } from '@mui/material';
const upStyles = makeStyles({
  image: {
    height: 150,
  },
  component: {
    background: '#FFFFFF',
    marginTop: 12,
  },
  deal: {
    padding: '15px 20px',
    display: 'flex',
  },
  dealText3: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: '32px',
  },

  button: {
    marginLeft: 'auto',
    background: '#2874f0',
    borderRadius: '2px',
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
  wrapper: {
    padding: '35px 13px',
  },
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Slide({ title }) {
  const classes = upStyles();

  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText3}>{title}</Typography>
      </Box>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed="10000"
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={['tablets', 'mobile']}
        dotListClass="custom-dot-list-style"
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px">
        {products.map((product) => (
          <Box className={classes.wrapper} textAlign="center">
            <img className={classes.image} src={product.url} />
            <Typography
              className={classes.text}
              style={{ fontWeight: 600, color: '#212121' }}>
              {product.title.shortTitle}
            </Typography>
            <Typography className={classes.text} style={{ color: 'green' }}>
              {product.discount}
            </Typography>
            <Typography
              className={classes.text}
              style={{ opacity: '.6', color: '#212121' }}>
              {product.tagline}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default Slide;
