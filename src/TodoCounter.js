import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  let finished = false
  let deleteItem = false

  if (total === completed && (total > 0 && completed > 0)) finished = true

  if (total === 0 && completed === 0) deleteItem = true

  return (
    <div>
      <h1 className="TodoCounter">
        {!finished ? (
          <div>
            {deleteItem ? (<div>Haz eliminado todas tus tareas</div>) : (<div>Haz completado <span>{completed}</span> de <span>{total}</span> TODOs </div>)}
          </div>
        ) : (
          <div>
            ¡FELICITACIONES, HAZ COMPLETADO TODAS TUS TAREAS!
          </div>
        )}
      </h1>
    </div>
  );
}

export { TodoCounter };
