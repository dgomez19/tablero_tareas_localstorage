import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button
        className="CreateTodoButton"
        onClick={ (event) => {
            console.log('Hola Mundo')
            console.log('event', event)}
        }
    >
        +
    </button>
  );
}

export { CreateTodoButton };
