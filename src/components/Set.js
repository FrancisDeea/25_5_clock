export const Set = (props) => (
    <div id="set-container">
        <div class="set-container-in">
            <span id="break-label">Break Length</span>
            <div class="info-container">
                <button id="break-decrement" class="btn-left">-</button>
                <span id="break-length">{props.break}</span>
                <button id="break-increment" class="btn-right">+</button>
            </div>
        </div>

        <div class="set-container-in">
            <span id="session-label">Session Length</span>
            <div class="info-container">
                <button id="session-decrement" class="btn-left">-</button>
                <span id="session-length">{props.session}</span>
                <button id="session-increment" class="btn-right">+</button>
            </div>
        </div>
    </div>
)