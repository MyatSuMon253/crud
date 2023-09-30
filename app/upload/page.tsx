"use client";
import { Button } from "@/components/ui/button";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={300} height={300} alt="nature" />
      )}
      <CldUploadWidget
        uploadPreset="uqeebh12"
        options={{
          sources: ["local", "camera"],
          multiple: false,
          maxFiles: 5,
        }}
        onUpload={(result, widget) => {
          console.log(result, widget);
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => <Button onClick={() => open()}>Upload</Button>}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
