import { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_API_BASE || '';

function Committees() {
  const [committees, setCommittees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCommittees = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await fetch(`${API_BASE}/committees`);
        if (!response.ok) {
          throw new Error('Failed to fetch committees');
        }
        const data = await response.json();
        setCommittees(data);
      } catch (err) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCommittees();
  }, []);

  return (
    <section className="content">
      <h1>Committees</h1>
      {loading && <p>Loading…</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {committees.map((committee) => (
              <tr key={committee.id}>
                <td>{committee.id}</td>
                <td>{committee.name}</td>
                <td>{committee.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default Committees;
