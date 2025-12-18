import { useProfileQuery } from "../../../querys/profileQuery";
import LoadingOverlay from "../../utils/loadingComponents/loadingDiv";
import Button from "../../utils/buttons/buttonDesign1";
import { useRef, useState, useEffect } from "react";
import { useEditProfileMutation } from "../../../querys/profileQuery";
import ErrorAlert from "../../utils/messages/errorAlert.tsx";
import LoadingButton from "../../utils/buttons/loadingButton.tsx";
import toastr from "toastr";

interface EditAvatarProps {
  setIsOpen: (value: boolean) => void;
}

const EditAvatar = ({ setIsOpen }: EditAvatarProps) => {
  const { data, isLoading } = useProfileQuery();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [newFile, setFile] = useState<File | null>(null);
  const previewUrl = newFile ? URL.createObjectURL(newFile) : undefined;

  const {
    mutate,
    error,
    isError,
    isPending
  } = useEditProfileMutation();

  const [editErr, setEditErr] = useState<string | null>(null);

  useEffect(() => {
    if (isError && error?.message) {
      setEditErr(error.message);

      const timer = setTimeout(() => {
        setEditErr(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isError, error]);

  if (!data?.success || !data?.data) {
    return (
      <div className="w-full flex justify-center items-center text-red-600 text-lg">
        Error al cargar el perfil
      </div>
    );
  }

  const handleOpenGallery = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
      fileInputRef.current.value = "";
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setFile(file);
  };

  const handleConfirm = () => {
    const fields = {
      avatar: newFile
    };

    mutate(fields, {
      onSuccess: () => {
        toastr.success("Avatar actualizado correctamente");
        setFile(null);
        setIsOpen(false);
      }
    });
  };

  const handleCancel = () => {
    setFile(null);
    setEditErr(null);
  };

  const user = data.data;

  return (
    <div className="p-8 flex items-center justify-center flex-col">
      {editErr && (
        <ErrorAlert message={editErr} className="mb-4" />
      )}

      <section className="flex justify-center items-center w-52 h-52">
        {isLoading ? (
          <LoadingOverlay isLoading={true} />
        ) : newFile ? (
          <img
            src={previewUrl}
            alt="Vista previa"
            className="rounded-lg shadow-xl object-cover w-full"
          />
        ) : user?.avatar ? (
          <img
            src={user.avatar}
            alt={`Avatar de: ${user.username}`}
            className="rounded-lg shadow-xl object-cover w-full"
          />
        ) : (
          <div className="w-full h-full rounded-xl bg-pink-200 flex items-center justify-center text-pink-800 ring-2 ring-pink-300 shadow-xl">
            <svg className="w-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z" />
            </svg>
          </div>
        )}
      </section>

      <hr className="bg-gray-300" />

      <section className="flex justify-center items-center gap-2 mt-6 editAvatarButtons">
        {newFile === null ? (
          <>
            <Button textColor="white" size="md" onClick={handleOpenGallery}>
              Seleccionar foto
            </Button>
          </>
        ) : (
          <>
            {isPending ? (
              <LoadingButton textColor="white" size="md" />
            ) : (
              <>
                <Button textColor="white" size="md" onClick={handleConfirm}>
                  Confirmar
                </Button>

                <Button textColor="white" size="md" onClick={handleCancel}>
                  Cancelar
                </Button>
              </>
            )}
          </>
        )}
      </section>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default EditAvatar;
