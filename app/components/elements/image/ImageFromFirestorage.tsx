import { bucket } from "@/app/lib/firebase/admin";
import { getDownloadURL } from "firebase-admin/storage";
import Image from "next/image"

export const ImageFromFirestorage = async ({
    width,
    height,
    alt = "",
    filePath
}: {
    width: number,
    height: number,
    alt?: string,
    filePath: string
}) => {
    try {
        const fileRef = bucket.file(filePath);
        const downloadUrl = await getDownloadURL(fileRef);
        return (
            <Image
                src={downloadUrl}
                width={width}
                height={height}
                alt={alt}
                priority
            />
        )
    } catch (e) {
        return (
            <Image
                src={"/noimage.png"}
                width={width}
                height={height}
                alt={alt}
                priority
            />
        )
    }
}