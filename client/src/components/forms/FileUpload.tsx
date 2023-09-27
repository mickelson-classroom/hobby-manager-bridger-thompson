import { ChangeEvent, FC, useRef } from "react";
import { useAppDispatch } from "../../app/hooks";
import { CustomToast } from "../../models/Toasts";
import { show } from "../toast/toast-slice";

interface FileUploadProps {
  label?: string;
  accept?: string;
  onImageSelect: (dataUri: string) => void;
}

export const FileUpload: FC<FileUploadProps> = ({
  label,
  accept = '.png,.jpg',
  onImageSelect
}) => {
  const dispatch = useAppDispatch();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 1024 * 1024) {
        const newToast: CustomToast = {
          id: Math.random(),
          message: "File is too large",
          type: "error"
        };
        dispatch(show(newToast))
      }
      else {
        const reader = new FileReader();
        reader.onload = () => {
          const dataUri = reader.result as string;
          onImageSelect(dataUri);
        };
        reader.readAsDataURL(selectedFile);
      }
    } else {
      const newToast: CustomToast = {
        id: Math.random(),
        message: "Error uploading file",
        type: "error"
      };
      dispatch(show(newToast))
    }
  };

  return (
    <div className="row">
      {label && (
        <div className="col-auto my-auto">
          <div className="form-label">{label}</div>
        </div>
      )}
      <div className="col">
        <input
          type="file"
          className="form-control-file d-none"
          accept={accept}
          onChange={handleFileChange}
          ref={fileInputRef}
        />
        <button className="btn btn-primary"
          type="button"
          onClick={handleButtonClick}>
          <i className="bi bi-camera" />
        </button>
      </div>
    </div>
  );
};