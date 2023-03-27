import { Card, CardContent, Box, Typography, Button, CardActions, Grid, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { ProductDto } from "../../models/shopping/product";
import productService from "../../services/shopping/product.service";

const Home = () => {
    const [products, setProducts] = useState<ProductDto[]>([]);

    useEffect(() => {
        productService.getProducts()
            .then((p: ProductDto[]) => {
                setProducts(p);
            })
    }, []);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        products.length === 0 ?
            <Card sx={{ minWidth: 275 }} >
                <CardContent>
                    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
                        <Typography variant="h4" align="center" gutterBottom>
                            No Products Found
                        </Typography>
                    </Box>
                </CardContent>
            </Card> :
            <Grid container spacing={4}>
                {
                    products.map((product, index) =>
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card>
                                <Carousel>
                                    {
                                        product.images.map((image, i) =>
                                            <CardMedia
                                                key={i}
                                                component="img"
                                                height="194"
                                                image={image}
                                                alt={product.title}
                                            />)
                                    }
                                </Carousel>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {product.title}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        {formatter.format(product.price)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
    )
}

export default Home;