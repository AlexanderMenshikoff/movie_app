import './Input.css';

const Input = ({placeholder, img}) => {
	return(
		<div className='input-container'>
			<img src={img} alt="img" className='input-img'/>
			<input className='input' type='text' placeholder={placeholder}></input>
		</div>
	);
};

export default Input;
