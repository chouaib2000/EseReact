export function MouseClicker() {
    function eventButtonClick(event) {
        console.log(event.target.name)
    }
    function eventImageClick(event) {
        event.stopPropagation()
        console.log(event.target.src)
    }

    return (<button name='one' onClick={eventButtonClick}>
        <img src="https://www.google.com" alt="" width={20} height={20} onClick={eventImageClick} />
        Click
    </button>
    )
}