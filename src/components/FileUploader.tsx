'use client';

import { useState } from 'react';
import { uploadData } from 'aws-amplify/storage';
import { v4 as uuid } from 'uuid';

interface FileUploaderProps {
  label: string;
  folderPrefix: string;
  onUploadSuccess: (path: string) => void;
  accept?: string;
}

export default function FileUploader({
  label,
  folderPrefix,
  onUploadSuccess,
  accept = '*/*',
}: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setError('');

    try {
      const fileExtension = file.name.split('.').pop();
      const path = `private/${folderPrefix}/${uuid()}.${fileExtension}`;

      const { result } = await uploadData({
        path,
        data: file,
        options: {
          contentType: file.type,
          onProgress: ({ transferredBytes, totalBytes }) => {
            if (totalBytes) {
              setProgress(Math.round((transferredBytes / totalBytes) * 100));
            }
          },
        },
      });

      if ((await result)?.path) {
        onUploadSuccess((await result).path);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Upload failed');
      }
    }

    setUploading(false);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>{label}</label>
      <input
        type="file"
        accept={accept}
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        disabled={uploading}
      />
      {file && (
        <div>
          <p>{file.name}</p>
          <button onClick={handleUpload} disabled={uploading}>Upload</button>
          {uploading && <p>Uploading... {progress}%</p>}
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}