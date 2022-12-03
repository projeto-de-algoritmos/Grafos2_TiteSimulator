import './index.css';

const Board = (props) => {
    return (
        <div className="board">{props.text}</div>
    );
}

export default Board;