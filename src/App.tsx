import logo from '@/assets/logo.svg';

export const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a0a',
        color: '#ffffff',
        fontFamily: 'system-ui, sans-serif',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <img src={logo} alt="Silva Automation" style={{ height: '80px', marginBottom: '2rem' }} />
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
        Under Construction
      </h1>
      <p style={{ fontSize: '1.125rem', color: '#888', maxWidth: '400px', lineHeight: 1.6 }}>
        We're working on something great. Check back soon.
      </p>
    </div>
  );
};
