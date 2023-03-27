import { Box, Card, CardContent, Typography } from "@mui/material";

const NotFound = () => {
    return (
        <Card sx={{ minWidth: 275 }} >
            <CardContent>
                <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Not Found
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default NotFound;