
import RemoteApp from 'todoapp/Application'

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-600">
        This is the Host Application
      </h1>
      <p className="text-lg text-gray-700">
        Below, we will render the remote micro front-end application.
      </p>
      <RemoteApp />
    </div>
  )
}

export default App
