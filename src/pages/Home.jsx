import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: 20, fontFamily: 'system-ui' }}>
      <h1>🎛️ Lab Records Studio</h1>
      <p>Профессиональная запись и сведение</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Link to="/services" style={{ padding: 16, background: '#2AABEE', color: '#fff', textAlign: 'center', borderRadius: 12, textDecoration: 'none' }}>
          Услуги и цены
        </Link>
        <Link to="/booking" style={{ padding: 16, background: '#2AABEE', color: '#fff', textAlign: 'center', borderRadius: 12, textDecoration: 'none' }}>
          Записаться
        </Link>
      </div>
    </div>
  );
}