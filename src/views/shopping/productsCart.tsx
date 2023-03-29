import { Button, Card, CardContent, CardMedia, Divider, FormControl, Grid, InputLabel, Modal, Snackbar, Typography } from "@mui/material";
import Box from "@mui/system/Box";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteAll, deleteItem } from '../../features/productsCartSlice';
import BackButton from "../../components/common/backButton";
import shoppingService from "../../services/shopping/shopping.service";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ProductsCart = () => {
    const productsCart: any = useSelector((state: RootState) => state.productsCart);
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        calculateTotalPrice();
    }, []);

    const calculateTotalPrice = () => {
        const sum = productsCart.items.reduce((sum: any, current: any) => sum + current.totalPrice, 0);
        setTotalPrice(sum);
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const checkout = () => {
        shoppingService.saveShop(productsCart.items)
            .then((result:any) => {
                dispatch(deleteAll());
                setOpen(true);
            })
    }

    const removeItem = (item: any) => {
        dispatch(deleteItem(item));
    }

    return (
        <Box>
            <BackButton />
            <Box style={{ padding: '3%' }}>
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
                            Products Purchased Successfully
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleClose}
                        >Ok</Button>
                    </Box>
                </Modal>
                {
                    productsCart.items.length > 0 ?
                        <Card style={{ padding: "2%" }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                                {
                                    productsCart.items.map((p: any, index: any) =>
                                        <Grid container spacing={2} key={index}>
                                            <Grid item xs={4} sm={4} md={4}>
                                                <CardMedia
                                                    key={index}
                                                    component="img"
                                                    height="150px"
                                                    width="150px"
                                                    image={p.product.thumbnail}
                                                    alt={p.product.title}
                                                />
                                            </Grid>
                                            <Grid item xs={7} sm={7} md={7}>
                                                <CardContent>
                                                    <Typography variant="h5" component="div">
                                                        {p.product.title}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                        {p.product.description}
                                                    </Typography>
                                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                        Units: {p.units}
                                                    </Typography>
                                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                        Price Unit: {formatter.format(p.product.price)}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        Price: {formatter.format(p.totalPrice)}
                                                    </Typography>
                                                </CardContent>
                                                <DeleteIcon style={{ cursor: 'pointer' }} onClick={() => removeItem(p)} />
                                            </Grid>
                                            <Divider />
                                        </Grid>
                                    )
                                }
                                <Grid item xs={3}>
                                    <Typography variant="h4">
                                        Price Total: {formatter.format(totalPrice)}
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl fullWidth sx={{ m: 1 }}>
                                        <Button variant="outlined" color="primary" onClick={checkout}>Checkout</Button>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Card>
                        :
                        <Box sx={{ width: '100%' }}>
                            <Typography variant="h4">
                                Cart Is Empty
                            </Typography>
                        </Box>
                }
            </Box>
        </Box>
    )
}
export default ProductsCart;