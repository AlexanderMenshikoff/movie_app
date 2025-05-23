import './Button.css';

const Button = ({text}) => {

	const handleClick = () => {
		return console.log('click');
	};
	
	return (
		<button className='button' onClick={handleClick}>{text}</button>
	);
};

export default Button;