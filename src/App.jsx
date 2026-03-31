import { Button } from './components';

function App() {
  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ marginBottom: '24px' }}>Design System</h1>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button variant="primary" intent="regular">Primary</Button>
        <Button variant="secondary" intent="regular">Secondary</Button>
        <Button variant="ghost" intent="regular">Ghost</Button>
        <Button variant="primary" intent="danger">Danger</Button>
      </div>
    </div>
  );
}

export default App;
