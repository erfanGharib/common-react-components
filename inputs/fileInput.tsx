import IcoUpload from "@/assets/icons/upload";
import { useState } from "react";
import Err from "../err";

export type T_FileMaxSize = {
    width: number;
    height: number;
}
interface T_FileInputProps {
    accept: string,
    id?: string,
    name: string,
    required?: boolean,
    className?: string,
    maxSize: T_FileMaxSize,
    showFilePreview?: boolean;
}

const FileInput = (
    { accept, id, name, className, maxSize, showFilePreview = false }: T_FileInputProps
) => {
    const [imgPreview, setImgPreview] = useState(null);
    const readURL = (input: any) => {
        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setImgPreview(e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    return (
        <div className="f-center-between w-full">
            <label htmlFor={id} className={`${className} p-3 f-center relative flex-col w-1/2 border-2 border-black-300 border-dashed rounded-md cursor-pointer bg-black-200 hoverOpacity`}>
                <div className="!ltr flex flex-col items-center justify-center pt-5 pb-6">
                    <IcoUpload />
                    <p className="mt-2 text-sm text-center">
                        <span className="font-semibold">Click to upload</span>
                        or drag and drop
                    </p>
                    <p className="text-sm text-center">
                        <strong>Accepted Formats:</strong> {accept.replace(/[,]/g, ' ').toUpperCase()}<br />
                        <strong>Max Size:</strong> {`${maxSize.width}px x ${maxSize.height}px`}
                    </p>
                </div>
                
                {
                    (showFilePreview && imgPreview) &&
                    <div className={`${className} w-full overflow-hidden f-center rounded-md shadow-[0_0_5px_#00000033]`}>
                        <img
                            src={imgPreview}
                            className='w-full'
                        />
                    </div>
                }

                <input
                    name={name}
                    id={id}
                    type="file"
                    className="opacity-0 -z-10 absolute top-0 left-0"
                    accept={accept}
                    onChange={function (e) {
                        console.log(e.target);

                        if (showFilePreview) readURL(e.target)
                    }}
                />
                <Err />
            </label>
        </div>
    )
}

export default FileInput;