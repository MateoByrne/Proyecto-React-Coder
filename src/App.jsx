import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';

function App() {

  return <div>
      <NavBarComponent />
      <ItemListContainer greeting= "¡Bienvenido a Tech Shop!"/>
      </div>;
}

export default App;
