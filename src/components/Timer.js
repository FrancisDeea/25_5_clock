export const Timer = (props) => (
    <div id="timer">
        <div id="session-container">
            <span id="timer-label">Session</span>
            <span id="time-left">{`${props.current.minute}:${props.current.second < 10 ? "0" + props.current.second : props.current.second}`}</span>
        </div>

        <div id="buttons-container">
            <button id="start_stop" onClick={props.play}><i className="fa-solid fa-play"></i></button>
            <button id="reset" onClick={props.reset}><i className="fa-solid fa-stop"></i></button>
            <audio id="beep" src="https://assets.mixkit.co/active_storage/sfx/1084/1084-preview.mp3"></audio>
        </div>
    </div>
)
