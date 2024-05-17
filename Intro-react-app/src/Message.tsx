//Functional component
//PascalCasing


function Message()
{
    let count = 0;
    count++;
    console.log(count)
    //JSX: Javascript XML
    return <h1>Message: {count}</h1>
}
//export will allow us to use component
export default Message;