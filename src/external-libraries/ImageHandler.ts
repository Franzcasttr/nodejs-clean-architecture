import { v2 as cloudinary } from 'cloudinary';
import { ImageUploadResult } from '../types/Image.type';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const ImageUploader = (
  file: string,
  folder: string
): Promise<ImageUploadResult> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file,
      { use_filename: true, folder },
      (error, result) => {
        if (error) {
          return reject(error);
        }
        if (result) {
          const uploadResult: ImageUploadResult = {
            secure_url: result.secure_url,
            public_id: result.public_id,
          };
          resolve(uploadResult);
        }
      }
    );
  });
};

export const DeleteImage = (file: string[]) => {
  file.forEach((ids) => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.destroy(ids, (error, result) => {
        if (error) {
          return reject(error);
        }
        if (result) {
          resolve(result);
        }
      });
    });
  });
};
