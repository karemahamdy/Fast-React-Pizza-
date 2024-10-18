import { useState } from 'react';
import  Button  from "../../ui/Button"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateName } from "./UserSlice.js";


function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateName(username));
    navigate("/menu")
  }

  return (
    <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
      className=" mt-4 w-28 rounded-full bg-white px-4 py-3 text-sm transition-all duration-300 placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
