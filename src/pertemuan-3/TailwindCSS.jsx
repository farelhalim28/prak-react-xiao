export default function TailwindCSS() {
  return (
    <div>
        <FlexboxGrid/>
      <h1 className="border m-5 p-2">Belajar Tailwind CSS</h1>
      <button className="bg-green-500 text-gray-100 
                        px-10 py-2 m-4 rounded-lg
                        shadow-lg">
        Click Me
      </button>
      <Spacing/>
      <Typography/>
      <BorderRadius/>
      <BackgroundColors/>
      <ShadowEffects/>
    </div>
  );
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-green-700 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

function Spacing(){
    return (
        <div className="bg-green-300 shadow-lg p-5 m-5 rounded-lg">
            <h2 className="text-gray-950 font-semibold">Card Title</h2>
            <p className="mt-2 text-blue-600">Ini adalah contoh penggunaan padding dan margin di Tailwind.</p>
        </div>
    )
}

function Typography(){
    return (
        <div className="bg-amber-50 shadow-lg p-8 m-5 rounded-lg">
            <h1 className="text-3xl font-bold text-blue-800">Tailwind Typography</h1>
            <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}

function BorderRadius(){
    return (
        <button className="border-2 border-blue-400 text-blue-500 px-10 py-2 m-5 rounded-lg"> Klik Saya </button>
    )
}

function BackgroundColors(){
    return(
        <div className="bg-blue-800 text-white p-6 m-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-white shadow-lg p-10 rounded-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-blue-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}
