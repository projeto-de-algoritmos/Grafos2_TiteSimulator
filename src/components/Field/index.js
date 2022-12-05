import Player from '../Player';
import './index.css';

const Field = (props) => {
    const { formation } = props;

    return (
        <div className={`field-players field${formation}`}>
            <Player number="1" status='normal' />
            <Player number="2" status='normal' />
            <Player number="3" status='normal' />
            <Player number="4" status='normal' />
            <Player number="5" status='normal' />
            <Player number="6" status='normal' />
            <Player number="7" status='normal' />
            <Player number="8" status='normal' />
            <Player number="9" status='normal' />
            <Player number="10" status='normal' />
            <Player number="11" status='normal' />
        </div>
    );
}

export default Field;