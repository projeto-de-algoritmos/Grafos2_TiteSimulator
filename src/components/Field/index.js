import Player from '../Player';
import './index.css';

const Field = (props) => {
    return (
        <div className="field">
            <Player number="1" />
            <Player number="2" />
            <Player number="3" />
            <Player number="4" />
            <Player number="5" />
            <Player number="6" />
            <Player number="7" />
            <Player number="8" />
            <Player number="9" />
            <Player number="10" />
            <Player number="11" />
        </div>
    );
}

export default Field;