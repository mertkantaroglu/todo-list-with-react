import { FaPlusCircle } from 'react-icons/fa';

import PropTypes from 'prop-types';
import { useState } from 'react';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item');
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
        />
        <button type="button" className="input-submit">
          <FaPlusCircle />
        </button>

      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default InputTodo;
