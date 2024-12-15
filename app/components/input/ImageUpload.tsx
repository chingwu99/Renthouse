'use client'

import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { useCallback } from 'react'
import { TbPhotoPlus } from 'react-icons/tb'

declare global {
  // eslint-disable-next-line no-unused-vars
  var cloudinary: any
}

interface ImageUploadProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void
  value: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpLoad = useCallback(
    (result: any) => {
      onChange(result.info.secure_url)
    },
    [onChange]
  )

  return (
    <CldUploadWidget
      onUpload={handleUpLoad}
      uploadPreset="sp0un1ia"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => (
        <div
          onClick={() => open?.()}
          // eslint-disable-next-line max-len
          className="relative flex cursor-pointer flex-col items-center justify-center gap-4 border-2 border-dashed border-neutral-300 p-20 text-neutral-600 transition hover:opacity-70"
        >
          <TbPhotoPlus size={50} />

          <div className="text-lg font-semibold">Click to uploadPreset</div>

          {value && (
            <div className="absolute inset-0 h-full w-full">
              <Image alt="Upload" fill style={{ objectFit: 'cover' }} src={value} />
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  )
}

export default ImageUpload
