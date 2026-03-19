import { supabase } from "../services/supabaseClient";

export default function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <p>AQI Value: 120 (Demo)</p>

      <button onClick={() => supabase.auth.signOut()}>
        Logout
      </button>
    </div>
  );
}
