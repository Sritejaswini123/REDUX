import { Provider} from "react-redux"
import Food from "./Food"
import appStore from "./appStore"
import About from "./About"
import Cart from "./Cart"
const App = () => {
  return(
<div>
  <Provider store  = {appStore} >
  <Food/> 
  <About/>
  <Cart/>
  </Provider>
</div>
  ) 
}
export default App