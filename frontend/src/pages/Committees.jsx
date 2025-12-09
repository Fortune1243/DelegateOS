import { useEffect, useState } from "react";

function Committees() {
  const [committees, setCommittees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCommittees() {
      try {
        const res = await fetch("http://127.0.0.1:3000/committees");
        if (!res.ok) {
          throw new Error("Failed to fetch committees");
        }
        const data = await res.json();
        setCommittees(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    loadCommittees();
  }, []);

  if (loading) {
    return <p>Loading committees...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  return (
    <div style={{ padding: "1.5rem" }}>
      <h1>Committees</h1>
      {committees.length === 0 ? (
        <p>No committees found.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ marginTop: "1rem", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {committees.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Committees;
