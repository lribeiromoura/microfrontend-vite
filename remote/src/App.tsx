import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    setTasks((prevTasks) => [...prevTasks, newTask.trim()]);
    setNewTask("");
  };

  return (
    <div className="mx-auto w-full max-w-md border border-gray-300 rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Remote Todo App</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 transition"
        >
          Add
        </button>
      </div>
      <ul className="mt-4 list-disc list-inside">
        {tasks.map((task, index) => (
          <li key={index} className="py-1">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
