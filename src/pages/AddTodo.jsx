import { useState } from 'react';
import {  ChevronsUpDown } from 'lucide-react'
import { useAddTodoMutation } from '../redux/todosApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTodo = () => {
  const [addTodo, { isLoading, error }] = useAddTodoMutation()
  const [title, setTitle] = useState("");
  const [complete, setComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    try {
        const res = await addTodo({
            todo: title,
            completed: complete === "true",
            userId: userId
        }).unwrap();
        toast.success(" Todo added successfully!");
        console.log("Todo added:", res);
        setTitle("");
        setComplete("");
    } catch (err) {
        toast.error(" Failed to add todo!");
        console.error("Add todo failed:", err);
    }
  };

  return (
      <div className='mt-10 px-4 max-w-md mx-auto text-center '>
        <h2 className="text-2xl font-bold mb-4">Add New Todo</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                <input
                type="text"
                placeholder="Todo Title"
                className="p-2 border w-full"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
                />
                <div className='relative '>
                    <select name="completed" value={complete} onChange={(e)=>{setComplete(e.target.value)}} required className='border outline-none p-2 w-full appearance-none '>
                        <option value="">select</option>
                        <option value="true">true</option>
                        <option value="false">false</option>
                    </select>
                    <ChevronsUpDown className='w-4 h-4 absolute right-0 top-1/2 -translate-1/2 pointer-events-none'/>
                </div>
                
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer ">
                Add Todo
                </button>
            </form>
            <ToastContainer />
      </div>
  );
};

export default AddTodo;
