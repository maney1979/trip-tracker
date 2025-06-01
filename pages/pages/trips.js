import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function Trips() {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error } = await supabase
      .from('trips')
      .insert([{ title }])

    if (error) {
      setMessage(`Error: ${error.message}`)
    } else {
      setMessage('Trip added successfully!')
      setTitle('')
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Add a New Trip</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Trip title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Add Trip
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  )
}
