const RoadmapDisplay = ({ roadmap }) => {
  if (!roadmap) {
    return (
      <div style={emptyStyle}>
        🚧 Your career roadmap will appear here after submission!
    
      </div>
      
    );
  }

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>📌 Your Personalized Career Roadmap</h2>
      <div style={roadmapStyle}>
        {roadmap.split('\n').map((line, index) => (
          <p key={index} style={lineStyle}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  backgroundColor: '#f9f9f9',
  padding: '2rem',
  margin: '2rem auto',
  maxWidth: '800px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  fontFamily: 'Segoe UI, sans-serif',
};

const titleStyle = {
  marginBottom: '1rem',
  textAlign: 'center',
  color: '#333',
};

const roadmapStyle = {
  backgroundColor: '#ffffff',
  padding: '1rem',
  borderRadius: '8px',
  border: '1px solid #e0e0e0',
  maxHeight: '400px',
  overflowY: 'auto',
};

const lineStyle = {
  margin: '0.5rem 0',
  lineHeight: '1.6',
  color: '#444',
};

const emptyStyle = {
  textAlign: 'center',
  fontSize: '1rem',
  color: '#888',
  marginTop: '2rem',
};

export default RoadmapDisplay;
