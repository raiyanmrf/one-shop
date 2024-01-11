import { ShopcontextProvider } from "./hooks/shop-context";
import Routerr from "./routes/Routerr";

function App() {
  return (
    <ShopcontextProvider>
      <Routerr />
    </ShopcontextProvider>
  );
}

export default App;
