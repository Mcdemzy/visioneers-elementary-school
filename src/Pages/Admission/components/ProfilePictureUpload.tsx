import { Camera } from "lucide-react";
import { ChangeEvent } from "react";

interface ProfilePictureUploadProps {
  previewUrl: string | null;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function ProfilePictureUpload({
  previewUrl,
  onImageChange,
}: ProfilePictureUploadProps) {
  return (
    <div className="w-full flex justify-end">
      <div className="my-5 flex items-center justify-center w-[220px] md:w-[280px] h-[220px] md:h-[280px] border border-[#6B6B6B] rounded-md relative overflow-hidden">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer hover:bg-gray-100"
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Profile Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <div className="rounded-full border w-[50px] md:w-[100px] h-[50px] md:h-[100px] border-[#333333] flex justify-center items-center">
                <Camera
                  className="w-[30px] md:w-[40px] h-[24px] md:h-[32px]"
                  color="#333333"
                />
              </div>
              <p className="mb-2 text-md md:text-[20px] text-center font-semibold mt-5 text-[#333333]">
                UPLOAD PASSPORT PHOTOGRAPH HERE
              </p>
            </div>
          )}
          <input
            id="dropzone-file"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onImageChange}
          />
        </label>
      </div>
    </div>
  );
}
