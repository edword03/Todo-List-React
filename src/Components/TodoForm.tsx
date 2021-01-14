import React, { useState , useRef } from 'react'

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState<string>('');
  const refTitle = useRef<HTMLInputElement>(null);

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(refTitle.current!.value);
      refTitle.current!.value = '';
      // setTitle('')
    }
  }

  return (
    <div className="input-field mt3">
      <input 
        ref={refTitle}
        // onChange={changeHandler} 
        // value={title} 
        onKeyPress={keyPressHandler} 
        type="text" 
        placeholder="Добавить дело"
        id="title" 
      />
      <label 
        htmlFor="title" 
        className="active" 
      >
        Добавить дело
      </label>
    </div>
  )
}
