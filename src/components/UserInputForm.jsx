import { useState } from 'react';

const UserInputForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    skills: '',
    experience: '',
    goal: '',
    duration: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={submit}
      style={{
        backgroundColor: '#ffffff',
        padding: '2rem',
        margin: '2rem auto',
        maxWidth: '600px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>🎯 Career Roadmap Generator</h2>

      <input
        name="name"
        placeholder="👤 Your Name"
        value={form.name}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <input
        name="skills"
        placeholder="💼 Your Skills (comma separated)"
        value={form.skills}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <input
        name="experience"
        type="number"
        placeholder="🧠 Years of Experience"
        value={form.experience}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <input
        name="goal"
        placeholder="🚀 Career Goal (e.g., Data Scientist)"
        value={form.goal}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <input
        name="duration"
        type="number"
        placeholder="📅 Duration in Months"
        value={form.duration}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <button
        type="submit"
        style={{
          padding: '12px 24px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: '0.2s ease',
        }}
      >
        🧠 Generate Career Roadmap
      </button>
    </form>
  );
};

const inputStyle = {
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '16px',
  outlineColor: '#4CAF50',
};

export default UserInputForm;
