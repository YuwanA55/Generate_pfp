import { useState, useEffect } from 'react';

const View5 = () => {
    const [imageSrc, setImageSrc] = useState('');

    // URL tetap untuk menampilkan gambar
    const baseURL = 'https://puasa23.000webhostapp.com/Seilors_avif/';
  
    // Array yang berisi nama-nama file gambar dari '1.png' hingga '53.png'
    const imageNames = Array.from({ length: 502 }, (_, index) => `${index + 1}.avif`);
  
    const generateImage = () => {
      // Pilih secara acak nama file gambar dari array
      const randomImageName = imageNames[Math.floor(Math.random() * imageNames.length)];
      // Gabungkan URL tetap dengan nama file gambar yang dipilih
      setImageSrc(baseURL + randomImageName);
    };
  
    document.addEventListener('keydown', function(event) {
      if (event.key === "PrintScreen" || (event.key === "c" && event.ctrlKey) || (event.key === "Insert" && event.shiftKey)) {
          alert("Tangkapan layar tidak diizinkan pada situs ini.");
          event.preventDefault();
      }
  });
  
    useEffect(() => {
      generateImage(); // Generate gambar saat komponen pertama kali di-render
    }, []); // Kondisi kosong agar hanya terpanggil sekali saat komponen pertama kali di-render
  
    const downloadImage = () => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ciee Pingin Yah :)",
        timer: 2500, // Durasi 5 detik
        showConfirmButton: false, // Tidak ada tombol
        showClass: {
          popup: `
            animate__animated
            animate__tada
            animate__faster
          `
        }
      });
    };
  
    const handleContextMenu = (e) => {
      e.preventDefault(); // Mencegah konteks menu muncul saat mengklik kanan
    };
  
    
  
    return (
      <div className="flex z-100 keydown flex-col lg:flex-row h-screen" onContextMenu={handleContextMenu}>
               <svg x="50%" y={0} className="overflow-visible -z-50 rounded-xl absolute opacity-45 fill-emerald-500">
    <path
      d="M-15.5 0h201v201h-201Z M699.5 0h201v201h-201Z M450.5 400h151v201h-201Z M-9250.5 60h301v201h-201Z M-10.5 600h201v201h-201Z M1210.5 400h101v101h-201Z"
      strokeWidth={0}
      radius={2}
    />
  </svg>
        {/* <span class="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></span> */}
        <div className="lg:w-1/2 p-8 flex items-center justify-center">
          <img
            src={imageSrc}
            alt="Generated"
            className="rounded-lg object-center animate__tada"
            style={{ maxHeight: '60vh', maxWidth: '100%' }} // Menambahkan maksimal lebar agar responsif
            onContextMenu={handleContextMenu} // Memanggil fungsi handleContextMenu saat klik kanan
          />
        </div>
        
        <div className="lg:w-1/2 p-8 flex flex-col items-center justify-center">
          <img src="https://puasa23.000webhostapp.com/info/seilors.png" className="mb-8 w-48 sm:w-auto" alt="" srcset="" /> {/* Menambahkan kelas responsif untuk gambar */}
          <h1 className="mb-12 font-semibold text-3xl lg:text-4xl xl:text-5xl">GET A SEILORS</h1>
          <div className="flex">
  
          <button onClick={generateImage} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group me-10">
  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-fuchsia-600 to-purple-600 group-hover:translate-x-0 ease">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
  </span>
  <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Generate</span>
  <span class="relative invisible"> Generate </span>
  </button>
  
  <button onClick={downloadImage} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-teal-500 rounded-full shadow-md group me-1">
  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:translate-x-0 ease">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
  </svg>
  </span>
  <span class="absolute flex items-center justify-center w-full h-full text-teal-500 transition-all duration-300 transform group-hover:translate-x-full ease">Download</span>
  <span class="relative invisible">Download</span>
  </button>
  
            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={generateImage}>Generate</button> */}
            {/* <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={downloadImage}>Download</button> */}
          </div>
        </div>
        
      </div>
    );
}

export default View5