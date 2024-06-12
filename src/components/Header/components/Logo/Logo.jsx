import { Link } from 'react-router-dom';

import logo from '../../../../assets/images/logo1.svg';

const Logo = () => {
	return (
		<Link to='/'>
			<img src={logo} alt='logo' />
		</Link>
	);
};

export default Logo;
