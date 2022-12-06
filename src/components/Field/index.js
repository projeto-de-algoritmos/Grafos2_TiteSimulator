import Player from '../Player';
import fieldSvg from '../../assets/svg/field.svg';
import './index.css';
import TouchLine from '../TouchLine';

const Field = (props) => {
    const { mode, formation, result } = props;

    function getPlayerByNumber(playerNumber) {
        const player = formation.formationPlayers.find(player => player.playerNumber === playerNumber);
        return player;
    }

    const renderAllPossibleTouches = () =>
        formation.formationPlayers.map(playerA =>
            playerA.touchOptions.map(touchOption => {
                const playerB = getPlayerByNumber(touchOption.playerNumber);

                return (
                    <TouchLine
                        key={`line${playerA.playerNumber}-${playerB.playerNumber}`}
                        playerA={playerA}
                        playerB={playerB}
                    />
                );

            }));

    const renderFinalTouches = () => {
        if (result === null) return null;

        let touches = [];
        for (let i = 0; i < result.length - 1; i++) {
            const playerA = getPlayerByNumber(result[i]);
            const playerB = getPlayerByNumber(result[i + 1]);

            touches.push({ playerA: playerA, playerB: playerB });
        }

        return touches.map(touch => {
            return (
                <TouchLine
                    key={`line${touch.playerA.playerNumber}-${touch.playerB.playerNumber}`}
                    playerA={touch.playerA}
                    playerB={touch.playerB}
                />
            )
        });
    }


    const renderPlayers = () => formation.formationPlayers.map(player =>
        <Player
            key={`player${player.playerNumber}`}
            number={player.playerNumber}
            positionX={player.positionX}
            positionY={player.positionY}
            status='normal'
        />
    );

    return (
        <div className='field' style={{ backgroundImage: `url(${fieldSvg})` }}>
            <div className='field-touches'>
                {mode === 'init' ? renderAllPossibleTouches() : renderFinalTouches()}
            </div>
            <div className={`field-players field${formation}`}>
                {renderPlayers()}
            </div>

        </div>

    );
}

export default Field;