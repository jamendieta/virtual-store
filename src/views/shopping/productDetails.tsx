import { Card, CardMedia, CardContent, Typography, CardActions, Button, CircularProgress, Box, Modal, InputLabel, TextField, Snackbar, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useParams } from "react-router-dom";
import BackButton from "../../components/common/backButton";
import { ProductDto } from "../../models/shopping/product";
import productService from "../../services/shopping/product.service";
import { addItem } from '../../features/productsCartSlice';
import { useDispatch } from "react-redux";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState<ProductDto>();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [units, setUnits] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();
    const [openNotification, setOpenNotification] = useState(false);

    const handleCloseNotification = () => {
        setOpenNotification(false);
    };

    useEffect(() => {
        if (product) {
            const total = units * Number(product.price);
            setTotalPrice(total);
            console.log(product.stock)
        }
    }, [units]);

    const handleAddToCart = () => {
        const obj = { id: '', units, totalPrice, product };
        dispatch(addItem(obj));
        setOpenNotification(true);
        handleClose();
        setUnits(0);
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    useEffect(() => {
        productService.getProduct(String(params.id))
            .then((result: ProductDto) => {
                setProduct(result);
            })
    }, [])

    return (
        <Box>
            <BackButton />
            <Snackbar open={openNotification} autoHideDuration={6000} onClose={handleCloseNotification}>
                <Alert onClose={handleCloseNotification} severity="success">
                    Product Added Successfully!
                </Alert>
            </Snackbar>
            {
                product ?
                    <Card>
                        <Carousel>
                            {
                                product.images.map((image, i) =>
                                    <CardMedia
                                        key={i}
                                        component="img"
                                        height="400"
                                        image={image}
                                        alt={product.title}
                                    />)
                            }
                        </Carousel>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {product.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                            <Typography variant="h6" component="p">
                                {formatter.format(product.price)}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={handleOpen}>Add To Cart</Button>
                        </CardActions>
                    </Card> :
                    <CircularProgress color="secondary" size={60} />
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button onClick={handleClose}>X</Button>
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add To Cart
                    </Typography>
                    {
                        Number(product?.stock) < units &&
                        <Typography id="modal-modal-title" variant="h4" component="h2">
                            <InputLabel htmlFor="outlined-adornment-amount">Out stock</InputLabel>
                        </Typography>
                    }
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField
                            type='number'
                            label='Units'
                            disabled={product?.stock === 0}
                            defaultValue={0}
                            inputProps={{ max: product?.stock, min: 0 }}
                            onChange={e => setUnits(Number(e.target.value))}
                        />
                    </Typography>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        <InputLabel htmlFor="outlined-adornment-amount">Total: {formatter.format(totalPrice)}</InputLabel>
                    </Typography>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        <InputLabel htmlFor="outlined-adornment-amount">Stock: {product?.stock}</InputLabel>
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddToCart}
                        value={units}
                        disabled={Number(product?.stock) < units || units === 0}
                    >Add to Cart</Button>
                </Box>
            </Modal>
        </Box>

    )
}

export default ProductDetails;