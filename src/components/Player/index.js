import './index.css';

const Player = (props) => {
    const { number, status } = props;
    return (
        <div className='field-item' style={{ gridArea: `p${number}` }}>
            <div className={`player ${status}`}>
                <p className='mb-0'>{number}</p>
            </div>
        </div>
    );
}

export default Player;