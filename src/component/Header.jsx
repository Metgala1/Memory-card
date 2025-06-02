import '../styles/header.css';

function Header() {
    return (
        <div className="header">
        <div className="header-div">
            <h1 className="header-title">Pokemon Memory Game</h1>
            <div className="score-div">
                <p className="score">Score: </p>
                <p className="best-score">Best Score: </p>
            </div>
        </div>
        <p className="rule">
            Get points by clickin on an image but dont click on any more than once!
        </p>
        </div>
    )
}

export default Header;