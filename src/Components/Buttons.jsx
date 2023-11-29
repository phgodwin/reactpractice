
function Buttons() {
    function ButtonMessage() {console.log("Button 1 has been pressed! (Names function)")}



return (

    <div>
        <button onClick={ButtonMessage} >Click me 1!</button>
        <button onClick={function() {console.log("Button 2 has been pressed! (Anonymous function)")}}>Click me 2!</button>
        <button onClick={() => console.log("Button 3 has been pressed! (Arrow function)")}>Click me 3!</button>
    </div>
)
}
export default Buttons