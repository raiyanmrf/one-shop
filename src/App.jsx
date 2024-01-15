import { AnimatePresence } from "framer-motion";
import { ShopcontextProvider } from "./hooks/shop-context";
import Routerr from "./routes/Routerr";

function App() {
  return (
    <ShopcontextProvider>
      <AnimatePresence mode={"wait"}>
        <Routerr />
      </AnimatePresence>
    </ShopcontextProvider>
  );
}

export default App;
