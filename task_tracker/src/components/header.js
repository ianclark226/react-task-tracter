import PropTypes from 'prop-types';
import Button from '../components/button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click');
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

// Header.PropTypes = {
//     title: PropTypes.string.isRequired,
// }


//CSS IN JS

// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }

export default Header;
