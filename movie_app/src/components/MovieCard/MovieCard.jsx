import './MovieCard.css';

const MovieCard = ({starSvg, starCounter, moviePoster, movieName, likeSvg, addToFavorites}) => {
	return(
		<div className='movie-card'>
			<div className='movie-poster-block'>
				<div className='star-counter-block'>
					<img src={starSvg} alt="star-svg"/>
					<p className='star-counter'>{starCounter}</p>
				</div>
				<img src={moviePoster} alt="movie-poster"/>
			</div>
			<p className='movie-name'>{movieName}</p>
			<div className='add-to-favorites-block'>
				<img src={likeSvg} alt="favorite-svg" />
				<p className='add-to-favorites-text'>{addToFavorites}</p>
			</div>
		</div>
	);
	
};

export default MovieCard;