import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, makeStyles, Button, Divider } from '@material-ui/core';
import Countdown from "react-countdown";
import React from 'react';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    image:{
        height:150
    },
    component:{
        marginTop:12,
        background:"#ffffff"
    },
    dealText:{
        fontSize:22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25
    },
    deal:{
        padding:'15px 20px',
        display: 'flex'
    },
    timer:{
        color: '#7f7f7f',
        marginLeft:10,
        display: 'flex',
        alignItems: 'center'
    },
    button:{
        marginLeft:'auto',
        background: '#2874f0',
        borderRadius: 2,
        fontSize: 13
    },
    text:{
        fontSize:14
    },
    wrapper:{
        padding: '45px 15px'
    }
})

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Slide = ({timer,title,products}) => {
    const classes = useStyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({hours,minutes,seconds}) => {
        return <span className={classes.timer}>{hours} : {minutes} : {seconds} left</span>
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealText}>{title}</Typography>
                {
                    timer &&
                    <React.Fragment>
                        <img src = {timerURL} alt="timer" style={{width:24}} />
                        <Countdown date = {Date.now() + 5.04e+7} renderer={renderer} />
                        <Button variant='contained' color='primary' className={classes.button}>View All</Button>
                    </React.Fragment>
                }
            </Box>
            <Divider />
            <Carousel responsive={responsive} infinite={true} containerClass="carousel-container"
                draggable={false} swipeable={false} centerMode={true}
                autoPlay={true} autoPlaySpeed = {10000} keyBoardControl={true}
                showDots={false} dotListClass="custom-dot-list-style" 
                itemClass="carousel-item-padding-40-px">
                {
                    products.map(product => (
                        <Link to={`product/${product.id}`}>
                            <Box textAlign='center' className={classes.wrapper}>
                                <img src={product.url} className={classes.image} alt="productImage" />
                                <Typography className={classes.text} style={{fontWeight: 600, color: '#212121'}}>{product.title.shortTitle}</Typography>
                                <Typography className={classes.text} style = {{ color: 'green'}}>{product.discount}</Typography>
                                <Typography className={classes.text} style = {{ color: '#212121', opacity:'0.7'}}>{product.tagline}</Typography>
                            </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </Box>
    )
}

export default Slide;