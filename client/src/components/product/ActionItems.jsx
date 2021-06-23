import { Box, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { ShoppingCart, FlashOn } from "@material-ui/icons";
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles({
    leftContainer:{
        padding: '40px 0 0 80px'
    },
    image:{
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    button:{
        height: 50,
        width: '46%',
        borderRadius:2
    },
    addtoCart:{
        background: '#ff9f00',
        color: '#ffffff',
        marginRight: 10
    },
    buyNow:{
        background: '#fb641b',
        color:"#ffffff"
    }
})

const ActionItems = ({product}) =>{
    const classes = useStyle();
    const history = useHistory();

    const dispatch = useDispatch();
    const addItemToCart = () => {
        dispatch(addToCart(product.id));
        history.push('/cart');
    }

    return (
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} className={classes.image} alt="detailImage" /><br/>
            <Button onClick={() => addItemToCart()} variant='contained' className={clsx(classes.button,classes.addtoCart)}><ShoppingCart/> Add to Cart</Button>
            <Button variant='contained' className={clsx(classes.button,classes.buyNow)}><FlashOn/> Buy Now</Button>
        </Box>
    )
}

export default ActionItems;