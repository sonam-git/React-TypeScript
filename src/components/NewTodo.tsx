import React, {useRef} from 'react'

type NewTodoProps = {
    onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText)
    };
  return (
    <form onSubmit={todoSubmitHandler}>
        <div className='form-control'>
            <label htmlFor='todo-text'>Todo Text</label>
            <input type='text' id='todo-text'/>
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo