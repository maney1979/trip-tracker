import { useState } from 'react';

export default function Home() {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [trips, setTrips] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = { destination, date, notes };
    setTrips([...trips, newTrip]);
    setDestination('');
    setDate('');
    setNotes('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>TripTracker</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div>
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <input
            type="text"
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Add Trip</button>
      </form>

      <div>
        <h2>My Trips</h2>
        <ul>
          {trips.map((trip, index) => (
            <li key={index}>
              <strong>{trip.destination}</strong> – {trip.date} – {trip.notes}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

