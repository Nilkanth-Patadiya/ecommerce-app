import { Product } from "@/app/products/productsSlice"
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material"

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.imageURL}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {product.price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
          })}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}

export default ProductCard
