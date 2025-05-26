import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import MovieCard from './components/MovieCard/MovieCard';
import MovieList from './components/MovieList/MovieList';

function App() {

	const data = [
		{
			starSvg:'svg/star.svg',
			starCounter:324,
			moviePoster:'posters/black-widow-poster.png',
			movieName:'Black widow',
			likeSvg:'svg/like.svg',
			addToFavorites:'В избранное',
			id:1
		},
		{
			starSvg:'svg/star.svg',
			starCounter:124,
			moviePoster:'posters/shang-chi-poster.png',
			movieName:'Shang Chi',
			likeSvg:'svg/like.svg',
			addToFavorites:'В избранное',
			id:2
		},
		{
			starSvg:'svg/star.svg',
			starCounter:235,
			moviePoster:'posters/loki-poster.png',
			movieName:'Loki',
			likeSvg:'svg/like.svg',
			addToFavorites:'В избранное',
			id:3
		},
		{
			starSvg:'svg/star.svg',
			starCounter:123,
			moviePoster:'posters/himym-poster.png',
			movieName:'How I Met Your Mother',
			likeSvg:'svg/like.svg',
			addToFavorites:'В избранное',
			id:4
		},
		{
			starSvg:'svg/star.svg',
			starCounter:8125,
			moviePoster:'posters/money-heist-poster.png',
			movieName:'Money Heist',
			likeSvg:'svg/like.svg',
			addToFavorites:'В избранное',
			id:5
		},
		{
			starSvg:'svg/star.svg',
			starCounter:123,
			moviePoster:'posters/friends-poster.png',
			movieName:'Friends',
			likeSvg:'svg/like.svg',
			addToFavorites:'В избранное',
			id:6
		},
		{
			starSvg:'svg/star.svg',
			starCounter:12,
			moviePoster:'posters/big-bang-poster.png',
			movieName:'The Big Bang Theory',
			likeSvg:'svg/like.svg',
			addToFavorites:'В избранное',
			id:7
		},
		{
			starSvg:'svg/star.svg',
			starCounter:456,
			moviePoster:'posters/thm-poster.png',
			movieName:'Two And Half Men',
			likeSvg:'svg/like.svg',
			addToFavorites:'В избранное',
			id:8
		}
		
	];

	return (
		<>
			<Navbar/>
			<Header text="Поиск"/>
			<Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."/>
			<Input img="svg/search.svg" placeholder="Введите название"/>
			<Button text="Искать"/>
			<MovieList>
				{data.map(el => {
					return <MovieCard key={el.id} starSvg={el.starSvg} starCounter={el.starCounter} moviePoster={el.moviePoster} movieName={el.movieName} likeSvg={el.likeSvg} addToFavorites={el.addToFavorites}/>;
				})}
			</MovieList>
		</>
	);

} 
export default App;
