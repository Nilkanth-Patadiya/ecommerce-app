import { Product } from "@/app/products/productsSlice"
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
const ProductCard = ({
  product,
  disableBtn,
  handleAddCart,
}: {
  product: Product
  disableBtn: boolean
  handleAddCart: () => void
}) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.imageURL}
        alt={product.name}
        sx={{ objectFit: "cover" }}
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
          startIcon={<AddShoppingCartIcon />}
          onClick={() => handleAddCart()}
          disabled={disableBtn}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}

export default ProductCard
