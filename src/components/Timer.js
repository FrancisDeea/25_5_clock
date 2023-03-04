export const Timer = (props) => (
    <div id="timer">
        <div id="session-container">
            <span id="timer-label">Session</span>
            <span id="timer-left">{`${props.current.minute}:${props.current.second}`}</span>
        </div>
                
        <div id="buttons-container">
            <button id="start_stop"><i class="fa-solid fa-play"></i></button>
            <button id="reset"><i class="fa-solid fa-stop"></i></button>
        </div>
    </div>
)
