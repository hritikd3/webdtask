import Header from "./Components/Header";
import ProductImage from "./Components/ProductImage";
import ProductDetails from "./Components/ProductDetails";
import Plans from "./Components/Plans";
import AddCartButton from "./Components/AddCartButton";
import "./css/styles.css";
 
// made Component folder where all components are importing .Components help us to distinguish the
// files easily
function App() {
  return (
    <div>
      <Header />
      <ProductImage />
      <ProductDetails />
      <Plans />
      <AddCartButton />
    </div>
  );
}

export default App;
