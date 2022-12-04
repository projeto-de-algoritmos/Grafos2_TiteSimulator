import './index.css';

const Player = (props) => {
    const { number } = props;
    return (
        <div className={`field-item player${number}`}>
            <div className='player'>
                <p className='mb-0'>{number}</p>
            </div>
        </div>
    );
}

export default Player;