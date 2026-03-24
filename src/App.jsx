import { Button } from './components';

function App() {
  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ marginBottom: '24px' }}>Design System</h1>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button type="primary">Primary</Button>
        <Button type="default">Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <Button type="primary" danger>Danger</Button>
      </div>
    </div>
  );
}

export default App;
