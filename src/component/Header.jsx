import '../styles/header.css';

function Header({loading, error,score,bestScore}) {
    return (
        <div className="header">
        <div className="header-div">
            <h1 className="header-title">Pokemon Memory Game</h1>
             <p className="rule">
           {error ? `Error: ${error.message}` : loading ? 'Loading Data' : 'Get points by clicking on an image but dont click on any more than once!'}
        </p>
        </div>
         <div className="score-div">
                <p className="score">Score: {score}</p>
                <p className="best-score">Best Score: {bestScore}</p>
         </div>
        </div>
    )
}

export default Header;