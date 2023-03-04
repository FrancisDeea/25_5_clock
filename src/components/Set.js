export const Set = (props) => (
    <div id="set-container">
        <div className="set-container-in">
            <span id="break-label">Break Length</span>
            <div className="info-container">
                <button id="break-decrement" className="btn-left" value="-" onClick={props.handleBreak}>-</button>
                <span id="break-length">{props.break}</span>
                <button id="break-increment" className="btn-right" value="+" onClick={props.handleBreak}>+</button>
            </div>
        </div>

        <div className="set-container-in">
            <span id="session-label">Session Length</span>
            <div className="info-container">
                <button id="session-decrement" className="btn-left" value="-">-</button>
                <span id="session-length">{props.session}</span>
                <button id="session-increment" className="btn-right" value="+">+</button>
            </div>
        </div>
    </div>
)