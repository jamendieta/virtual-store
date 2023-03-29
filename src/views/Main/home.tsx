import { Card, CardContent, Box, Typography, Button, Grid, CardMedia, Divider, FormControl, InputLabel, OutlinedInput, InputAdornment, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";
import { ProductDto } from "../../models/shopping/product";
import productService from "../../services/shopping/product.service";

const Home = () => {
    const [products, setProducts] = useState<ProductDto[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductDto[]>([]);
    const [minimalPrice, setMinimalPrice] = useState<number>(0);
    const [maximunPrice, setMaximunPrice] = useState<number>(0);
    const [productText, setProductText] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        productService.getProducts()
            .then((p: ProductDto[]) => {
                setProducts(p);
                setFilteredProducts(p);
            })
    }, []);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const filteredByPrice = () => {
        let filteredProducts = products;
        if (productText) {
            filteredProducts = filteredProducts.filter(p => p.title.toLowerCase().includes(productText))
        }
        if (minimalPrice) {
            filteredProducts = filteredProducts.filter(p => p.price >= minimalPrice)
        }
        if (maximunPrice) {
            filteredProducts = filteredProducts.filter(p => p.price <= maximunPrice)
        }
        setFilteredProducts(filteredProducts);
    }

    const seeDetails = (product: ProductDto) => {
        navigate(`/productDetails/${product.id}`);
    }

    return (
        <div>
            <Grid item xs={12} sm={6} md={3} >
                <Card>
                    <Box sx={{ padding: "2%" }}>
                        <Grid container spacing={1}>
                            <Divider />
                            <Grid item sm={4}>
                                <InputLabel htmlFor="outlined-adornment-amount">Product</InputLabel>
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Product</InputLabel>
                                    <OutlinedInput
                                        type='text'
                                        label="productText"
                                        onChange={e => setProductText(e.target.value)}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item sm={4}>
                                <InputLabel htmlFor="outlined-adornment-amount">Minimal</InputLabel>
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Minimal</InputLabel>
                                    <OutlinedInput
                                        type='number'
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        label="Minimal"
                                        onChange={e => setMinimalPrice(Number(e.target.value))}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item sm={4}>
                                <InputLabel htmlFor="outlined-adornment-amount">Maximun</InputLabel>
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Maximun</InputLabel>
                                    <OutlinedInput
                                        type='number'
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        label="Maximun"
                                        onChange={e => setMaximunPrice(Number(e.target.value))}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <Button variant="outlined" color="primary"  onClick={filteredByPrice}>Apply</Button>
                            </FormControl>
                        </Grid>
                    </Box>
                </Card>
            </Grid>
            {
                filteredProducts.length === 0 ?
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box> :
                    <Grid container spacing={2}>
                        {
                            filteredProducts.map((product, index) =>
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Card style={{ cursor: 'pointer' }} onClick={() => seeDetails(product)}>
                                        <Carousel
                                            autoPlay={false}
                                        >
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
            }
        </div>


    )
}

export default Home;