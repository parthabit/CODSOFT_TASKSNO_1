// Images use picsum.photos (free placeholders). Replace with your own URLs anytime.
const img = (s) => `https://picsum.photos/seed/shopora-${s}/600/600`
const P = (id, name, price, category, description) => ({ id, name, price, category, description, image: img(id) })
export const categories = ['Electronics', 'Fashion', 'Home & Living', 'Accessories']
export const products = [
  P(1, 'Wireless Noise-Cancelling Headphones', 4999, 'Electronics', 'Over-ear headphones with 30-hour battery life, deep bass and active noise cancellation.'),
  P(2, 'Smart Fitness Watch', 3499, 'Electronics', 'Track steps, heart rate and sleep with a bright AMOLED display and 7-day battery.'),
  P(3, 'Portable Bluetooth Speaker', 1999, 'Electronics', 'Waterproof pocket speaker with rich 360° sound and 12 hours of playtime.'),
  P(4, 'Mechanical Gaming Keyboard', 2799, 'Electronics', 'RGB backlit keyboard with tactile switches and a durable aluminium frame.'),
  P(5, 'Classic Denim Jacket', 2499, 'Fashion', 'Timeless medium-wash denim jacket with a comfortable relaxed fit.'),
  P(6, 'Cotton Crew-Neck T-Shirt', 699, 'Fashion', 'Soft 100% organic cotton tee, breathable and perfect for everyday wear.'),
  P(7, 'Running Sneakers', 3299, 'Fashion', 'Lightweight sneakers with cushioned soles and a breathable mesh upper.'),
  P(8, 'Minimal Ceramic Table Lamp', 1599, 'Home & Living', 'Warm-glow table lamp with a matte ceramic base and linen shade.'),
  P(9, 'Scented Soy Candle Set', 899, 'Home & Living', 'Set of three hand-poured soy candles in lavender, vanilla and sandalwood.'),
  P(10, 'Cozy Knit Throw Blanket', 1299, 'Home & Living', 'Chunky knit blanket that adds warmth and texture to any sofa or bed.'),
  P(11, 'Leather Bifold Wallet', 1199, 'Accessories', 'Slim genuine-leather wallet with RFID protection and six card slots.'),
  P(12, 'Polarized Aviator Sunglasses', 1499, 'Accessories', 'UV400 polarized lenses in a lightweight metal frame.'),
  P(13, 'Canvas Backpack', 1899, 'Accessories', 'Water-resistant 20L backpack with a padded laptop compartment.'),
  P(14, 'Stainless Steel Water Bottle', 799, 'Home & Living', 'Insulated 750ml bottle that keeps drinks cold for 24 hours or hot for 12.'),
]
export const money = (n) => '₹' + n.toLocaleString('en-IN')
