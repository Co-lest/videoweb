import React, { useState, useRef } from 'react';
import Button from './ui/Button';
import Container from './ui/Container';
import { Upload } from 'lucide-react';

interface FormData {
  quote: string;
  author: string;
  position: string;
  imageUrl: string;
}

const TestimonialForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isFormFull, setIsformFull] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    quote: "",
    author: "",
    position: "",
    imageUrl: ""
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setError("No file selected!");
      return;
    }

    if (!file.type.match("image.*")) {
      setError("Please select an image file (png, jpg, jpeg, gif)");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image size should be less than 5MB");
      return;
    }

    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'videoweb');
    formData.append("cloud_name", "djzgpzcio");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/djzgpzcio/image/upload`, {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Image upload failed');
      }

      const data = await response.json();
      setFormData((prev) => ({ ...prev, imageUrl: data.secure_url }));

    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Failed to upload image. Please try again.');
      setPreviewUrl('');
    } finally {
      setUploading(false);
      setPreviewUrl("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.imageUrl && uploading) {
      setError('Image failed to upload! Check your internet connection.');
      return;
    }

    if (!formData.imageUrl) {
        formData.imageUrl = "https://res.cloudinary.com/djzgpzcio/image/upload/v1748431136/m8blfaktwhepdrvk6gnm.png";
    }

    try {
      const response = await fetch("https://elkay-backend.onrender.com/POST/testimony", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Check internet connection!");
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Check internet connection!');
    } finally {
      setUploading(false);
    }

    setFormData({
      quote: '',
      author: '',
      position: '',
      imageUrl: '',
    });
    setPreviewUrl('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (formData.author && formData.position && formData.quote) {
      setIsformFull(true);
    } else {
      setIsformFull(false);
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <Container>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Share Your Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
            We value your feedback! Submit your testimonial below for review.
          </p>

          {error && (
            <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg text-red-700 dark:text-red-100 text-center mb-4">
              {error}
            </div>
          )}

          {submitted ? (
            <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg text-green-700 dark:text-green-100 text-center">
              Thank you for your testimonial! It has been submitted for review.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Your Testimonial
                </label>
                <textarea
                  required
                  name="quote"
                  value={formData.quote}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="author"
                    placeholder='Name'
                    required
                    value={formData.author}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Position
                  </label>
                  <input
                    type="text"
                    name="position"
                    required
                    value={formData.position}
                    placeholder='Client, manager - Company'
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Your Photo{"(not required)"}
                  </label>
                  <div className="mt-1 flex items-center space-x-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading}
                      className="flex items-center space-x-2"
                    >
                      {uploading ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                      ) : (
                        <Upload className="h-5 w-5" />
                      )}
                      <span>{uploading ? 'Uploading...' : 'Upload Photo'}</span>
                    </Button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    {previewUrl && (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <Button type="submit" variant="primary" fullWidth disabled={!isFormFull}> 
                Submit Testimonial
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialForm;  // error when not submitted all things. check.