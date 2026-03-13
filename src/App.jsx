import { useState } from 'react'
import './App.css'

// --- 1. KOMPONEN NAVBAR ---
function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', background: '#1a1a1a', color: 'white', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid #333' }}>
      <h2 style={{ margin: 0, color: '#646cff', fontSize: '1.5rem' }}>GeoNature</h2>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <span style={{ cursor: 'pointer' }}>Beranda</span>
        <span style={{ cursor: 'pointer' }}>Galeri</span>
        <span style={{ cursor: 'pointer', background: '#646cff', padding: '5px 15px', borderRadius: '5px' }}>Join</span>
      </div>
    </nav>
  )
}

// --- 2. KOMPONEN SLIDE SHOW ---
function SlideShow() {
  const images = [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
  ];
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % images.length);
  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '20px', margin: '20px 0', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
      <img src={images[index]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Slide" />
      <button onClick={prevSlide} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer' }}>◀</button>
      <button onClick={nextSlide} style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer' }}>▶</button>
      <div style={{ position: 'absolute', bottom: '15px', width: '100%', textAlign: 'center', color: 'white', textShadow: '1px 1px 5px black' }}>
        <strong>Explore {index + 1} / {images.length}</strong>
      </div>
    </div>
  )
}

// --- 3. KOMPONEN CHIP (Props) ---
function Chip({ label }) {
  return (
    <span style={{ padding: '6px 18px', border: '1px solid #646cff', borderRadius: '20px', margin: '5px', display: 'inline-block', fontSize: '0.85rem', color: '#646cff', fontWeight: 'bold' }}>
      #{label}
    </span>
  )
}

// --- 4. KOMPONEN REKOMENDASI (Filter Data) ---
function Recommendations() {
  const destinations = [
    { country: "Indonesia", spot: "Raja Ampat - Surga bawah laut di Papua." },
    { country: "Swiss", spot: "Lauterbrunnen - Desa dengan 72 air terjun." },
    { country: "Jepang", spot: "Gunung Fuji - Simbol keindahan abadi." },
    { country: "Islandia", spot: "Skógafoss - Keajaiban pelangi di atas air terjun." }
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div style={{ marginTop: '40px', padding: '25px', backgroundColor: '#1e1e1e', borderRadius: '15px', border: '1px solid #333' }}>
      <h3 style={{ color: '#ffbd2e', marginTop: 0 }}>🌍 Rekomendasi Dunia</h3>
      <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Klik negara untuk melihat tempat terbaik:</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', margin: '15px 0' }}>
        {destinations.map((item, i) => (
          <button 
            key={i} 
            onClick={() => setSelected(item)}
            style={{ 
              backgroundColor: selected?.country === item.country ? '#646cff' : '#2a2a2a',
              transition: '0.3s'
            }}
          >
            {item.country}
          </button>
        ))}
      </div>

      {selected && (
        <div style={{ padding: '15px', background: '#252525', borderRadius: '10px', borderLeft: '5px solid #646cff', animation: 'fadeIn 0.5s' }}>
          <h4 style={{ margin: '0 0 5px 0' }}>{selected.country}</h4>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>{selected.spot}</p>
        </div>
      )}
    </div>
  )
}

// --- 5. KOMPONEN CONTACT FORM ---
function ContactForm() {
  const [pesan, setPesan] = useState("");
  
  return (
    <div style={{ background: '#1a1a1a', padding: '25px', borderRadius: '15px', marginTop: '40px', border: '1px solid #333' }}>
      <h3 style={{ marginTop: 0 }}>Hubungi Petualang Kami</h3>
      <input 
        type="text" 
        placeholder="Masukkan nama Anda..." 
        style={{ width: '100%', padding: '12px', marginBottom: '15px', boxSizing: 'border-box', borderRadius: '8px', border: '1px solid #444', background: '#000', color: 'white' }}
        onChange={(e) => setPesan(e.target.value)}
      />
      <button 
        style={{ width: '100%', fontWeight: 'bold' }} 
        onClick={() => alert(`Terima kasih ${pesan}! Tim kami akan segera menghubungimu.`)}
      >
        Kirim Pesan
      </button>
    </div>
  )
}

// --- 6. KOMPONEN FOOTER ---
function Footer() {
  return (
    <footer style={{ marginTop: '60px', padding: '30px', borderTop: '1px solid #333', textAlign: 'center', color: '#555' }}>
      <p style={{ margin: 0 }}>© 2026 GeoNature Explorer | Created with React 18</p>
      <small>Latihan Pertemuan 1 - Semangat Belajarnya!</small>
    </footer>
  )
}

// --- KOMPONEN UTAMA ---
function App() {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#0f0f0f', color: '#e0e0e0', minHeight: '100vh' }}>
      <Navbar />
      
      <main style={{ padding: '20px' }}>
        <SlideShow />
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Jelajahi Dunia</h1>
          <div style={{ marginBottom: '20px' }}>
            <Chip label="Pegunungan" />
            <Chip label="Danau" />
            <Chip label="Hutan" />
            <Chip label="Lautan" />
          </div>
          <button 
            style={{ fontSize: '1.1rem', padding: '10px 25px', borderRadius: '30px', cursor: 'pointer' }} 
            onClick={() => setLikes(likes + 1)}
          >
            ❤️ Suka Halaman Ini: {likes}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ border: '1px solid #333', padding: '20px', borderRadius: '15px', background: 'linear-gradient(145deg, #1a1a1a, #111)' }}>
            <h4 style={{ color: '#646cff' }}>Visi Kami</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>Membawa keindahan sudut bumi yang tak terjangkau ke depan layar Anda dengan kualitas visual terbaik.</p>
          </div>
          <div style={{ border: '1px solid #333', padding: '20px', borderRadius: '15px', background: 'linear-gradient(145deg, #1a1a1a, #111)' }}>
            <h4 style={{ color: '#646cff' }}>Misi Kami</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>Membangun kesadaran lingkungan melalui edukasi fotografi dan pengalaman digital yang imersif.</p>
          </div>
        </div>

        <Recommendations />

        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

export default App