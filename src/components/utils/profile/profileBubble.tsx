interface BubbleProfileProps {
  avatar?: string;
  isLoading?: boolean;
  className?: string;
}

const BubbleProfile = ({ avatar, isLoading, className }: BubbleProfileProps) => {
  if (isLoading) {
    return (
      <div
        className={`w-11 h-11 rounded-full bg-pink-200 cursor-pointer border border-pink-300 flex items-center justify-center animate-pulse text-pink-600 ${className}`}
      >
        <svg
          aria-hidden="true"
          className="w-4 h-4 animate-spin"
          viewBox="0 0 100 101"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-30"
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="10"
            fill="none"
          />
          <path
            className="opacity-90"
            fill="currentColor"
            d="M93.9676 39.0409C96.393 38.4038 97.8624 
               35.9116 97.0079 33.5539C95.2932 28.8227 
               92.871 24.3692 89.8167 20.348C85.8452 
               15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 
               4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 
               0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 
               1.69328 37.813 4.19778 38.4501 6.62326C39.0873 
               9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 
               9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 
               10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 
               17.9648 79.3347 21.5619 82.5849 25.841C84.9175 
               28.9121 86.7997 32.2913 88.1811 35.8758C89.083 
               38.2158 91.5421 39.6781 93.9676 39.0409Z"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`w-11 h-11 rounded-full cursor-pointer overflow-hidden border border-pink-300 bg-pink-200 hover:opacity-90 transition ${className}`}
    >
      {avatar ? (
        <img
          src={avatar}
          alt="Perfil"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-pink-200 flex items-center justify-center text-pink-600">
          <svg
            className="w-2/3 h-2/3"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default BubbleProfile;
