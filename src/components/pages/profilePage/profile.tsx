
import { useProfileQuery } from "../../../querys/profileQuery";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../../utils/loadingScreen/loadingScreen";


interface ProfileMainProps  {
  setIsOpen?: (value: boolean) => void ;
}
  const ProfileMain = ({ setIsOpen }: ProfileMainProps)=> {
  const { data, isLoading } = useProfileQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!data?.success || !data?.data) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-red-600 text-lg">
        Error al cargar el perfil
      </div>
    );
  }

  const user = data.data;

  return (
    <div className="p-4 w-full profileMain">
      <div className=" mx-auto space-y-8">
        <section className="p-4 flex flex-col md:flex-row items-center gap-8 profileBody ">
          <div className="flex justify-start w-full mb-2 rounded-full profileTitle ">
            <div className="flex items-center gap-2 ">
              <svg
                className="backButton w-10 h-10 text-gray-800 hover:text-gray-600 cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                onClick={() => navigate(-1)}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m15 19-7-7 7-7"
                />
              </svg>
              <h1 className=" font-bold text-gray-700">Perfil</h1>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="profileImage relative group cursor-pointer" onClick={() => setIsOpen(true)}>
              {user?.avatar ? (
                <img
                  className="w-40 h-40 rounded-full object-cover ring-2 ring-pink-300 shadow-lg transition-transform duration-300 hover:scale-105"
                  src={user.avatar}
                  alt={`Avatar de ${user.username}`}
                />
              ) : (
                <div className="w-40 h-40 rounded-full bg-pink-200 flex items-center justify-center text-pink-800 ring-2 ring-pink-300 shadow-lg transition-transform duration-300 hover:scale-105">
                  <svg
                    className="w-2/3 h-2/3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z" />
                  </svg>
                </div>
              )}
              <button className="absolute bottom-0 right-0 bg-pink-600 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity text-sm cursor-pointer">
                Editar
              </button>
            </div>

            <h2 className="nameUser text-3xl  font-bold text-gray-700 mt-4 flex items-center justify-center gap-2">
              <span>{user.name}</span>
              <span>{user.lastname}</span>
            </h2>

            <p className="text-pink-600 font-medium text-m mt-1">
              {user.username}
            </p>
          </div>

          <div className="credentials flex items-center flex-col w-full gap-6">
            <div className="bg-pink-50 p-3 rounded-xl w-full">
              <p className="text-sm font-semibold text-pink-700">Email</p>
              <p className="text-gray-800 mt-1 break-all">{user.email}</p>
            </div>

            <div className="bg-pink-50 p-3 rounded-xl  w-full">
              <p className="text-sm font-semibold text-pink-700">Teléfono</p>
              <p className="text-gray-800 mt-1">
                {user.phone || "Agrega un número de teléfono nuevo"}
              </p>
            </div>
          </div>
        </section>

        <section className="dates bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Citas</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Aquí podrás agregar configuraciones avanzadas de cuenta, actividad
            del perfil, preferencias de notificación o cualquier sección extra
            que necesites más adelante.
          </p>
        </section>

        <section className="actions bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Acciones</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Aquí podrás agregar configuraciones avanzadas de cuenta, actividad
            del perfil, preferencias de notificación o cualquier sección extra
            que necesites más adelante.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProfileMain;
