import { useEffect } from "react";

type ToastPropsType = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastPropsType) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const style = type === "SUCCESS" ? "bg-green-600" : "bg-red-600";

  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded-md bg-green-600 text-white max-w-md ${style}`}
    >
      <div className="flex justify-center items-center">
        <span className="text-lg font-semibold">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
