import './Navbar.css';

const Navbar = () => {
	return(
		<div className='navbar'>
			<img src="/logo.svg" alt="img"/>
			<ul className='link-list'>
				<li className='link-item'>Поиск фильмов</li>
				<li className='link-item'>Мои фильмы</li>
				<li className='link-item'>Войти</li>
			</ul>
		</div>
	);
};

export default Navbar;