import { Link  } from "react-router-dom";


const Nav = () => {
  const handleContextMenu = (e) => {
    e.preventDefault(); // Mencegah konteks menu muncul saat mengklik kanan
  };

  const soon = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fitur Akan Segera Siap!",
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

  return (
    <div className="flex z-50 flex-wrap" onContextMenu={handleContextMenu}>

      <div className="w-full sm:w-1/2 md:w-1/4 p-6 bg-fuchsia-500">
      <Link to="/">
  <h1 className="text-purple-50 font-bold">PetsCat Cute</h1>
</Link>

      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 p-6 bg-teal-500">
      <Link to="/zkoolday">
        <h1 className="text-purple-50 font-bold">Doolay Cute</h1>
        </Link>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 p-6 bg-purple-600">
      <Link to="/prince">
        <h1 className="text-purple-50 font-bold">Prince Cute</h1>
        </Link>
      </div>      

      <div className="w-full sm:w-1/2 md:w-1/4 p-6 bg-emerald-600">
      <Link to="/princess">
        <h1 className="text-purple-50 font-bold">Princess Cute</h1>
        </Link>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 p-6 bg-pink-600">
      <Link to="/Seilors">
        <h1 className="text-purple-50 font-bold">Seilors Soon</h1>
        </Link>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 p-6 bg-sky-600">
      <Link to="/duck">
        <h1 className="text-purple-50 font-bold">Duckclub Soon</h1>
        </Link>
      </div>

      <div onClick={soon} className="w-full sm:w-1/2 md:w-1/4 p-6 bg-orange-600">
        <a href="#" >
        <h1 className="text-purple-50 font-bold">Capy Freens</h1>
        </a>
      </div>

      <div onClick={soon} className="w-full sm:w-1/2 md:w-1/4 p-6 bg-cyan-600">
      <a href="#" >
        <h1 className="text-purple-50 font-bold">Soon</h1>
        </a>
      </div>
    </div>
  );
};

export default Nav;

