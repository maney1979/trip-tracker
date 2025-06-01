import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function NewTrip() {
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const { data, error } = await supabase
      .from('trips')
      .insert([{ title }])

    if (error) {
      setMessage(`Error: ${error.message}`)
    } else {
      setMessage('Trip added!')
      setTitle('')
    }

    setLoading(false)
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add a Trip</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border p-2 w-full mb-2"
          type="text"
          placeholder="Trip title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button
          className="bg-blue-500 text-white p-2 w-full"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Add Trip'}
        </button>
      </form>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  )
}

