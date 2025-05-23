import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';
import Input from './components/Input/Input';
import Button from './components/Button/Button';

function App() {

	return (
		<>
			<Navbar/>
			<Header text="Поиск"/>
			<Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."/>
			<Input img="/search.svg" placeholder="Введите название"/>
			<Button text="Искать"/>
		</>
	);

} 
export default App;
