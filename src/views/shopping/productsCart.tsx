import { Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import Box from "@mui/system/Box";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const ProductsCart = () => {
    const productsCart: any = useSelector((state: RootState) => state.productsCart);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        calculateTotalPrice();
    }, []);

    const calculateTotalPrice = () => {
        const sum = productsCart.reduce((sum: any, current: any) => sum + current.totalPrice, 0);
        setTotalPrice(sum);
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <Box style={{ padding: '3%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                {
                    productsCart.map((p: any, index: any) =>
                        <Grid container spacing={2}>
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
                            <Grid item xs={8} sm={8} md={8}>
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
                                    <Typography variant="body2">
                                        Price: {formatter.format(p.totalPrice)}
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Divider />
                        </Grid>
                    )
                }
                <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4">
                                Price Total: {formatter.format(totalPrice)}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}
export default ProductsCart;