import { Card, makeStyles ,Box, Typography, Button} from "@material-ui/core";
import clsx from 'clsx';
import GroupButton from "./GroupButton";

const useStyle = makeStyles({
    component:{
        display: 'flex',
        borderRadius: 0,
        borderTop: '1px solid #f0f0f0'
    },
    leftComponent:{
        margin: 20,
        display: 'flex',
        flexDirection: 'column'
    },
    rightComponent:{
        margin: 20
    },
    smallText:{
        fontSize: 14
    },
    greyText:{
        color: '#878787'
    },
    price:{
        fontSize:18,
        fontWeight: 600
    },
    image:{
        height:110,
        width: 110
    },
    button:{
        marginTop:20,
        fontSize: 16
    }
})

const CartItem = ({item, removeItemfromCart}) => {
    const classes = useStyle();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    return (
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img src={item.url} alt="itemImage" className={classes.image}/>
                <GroupButton />
            </Box>
            <Box className={classes.rightComponent}>
                <Typography>{item.title.longTitle}</Typography>
                <Typography className={clsx(classes.smallText,classes.greyText)} style={{marginTop: 10}}>Seller: Super ComNet
                    <span><img src={fassured} alt="flipkartAssured" style={{width: 50, marginLeft: 10}}/></span>
                </Typography>
                <Typography style={{margin: '20px 0'}}>
                    <span className={classes.price}>₹{item.price.cost}</span> &nbsp; &nbsp; &nbsp; 
                    <span className={clsx(classes.smallText,classes.greyText)}><strike>₹{item.price.mrp}</strike></span> &nbsp; &nbsp; &nbsp;
                    <span style={{color: '#388e3c'}}>{item.price.discount} off</span>
                </Typography>
                <Button onClick={() => removeItemfromCart(item.id)} className={classes.button}>Remove</Button>
            </Box>
        </Card>
    )
}

export default CartItem;