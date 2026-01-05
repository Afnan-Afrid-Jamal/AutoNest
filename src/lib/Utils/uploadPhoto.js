export const uploadImage = async (imageFile) => {
  if (!imageFile) return null;

  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_IMGBB_URL}`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.data.url;
  } catch (err) {
    console.error("Image upload failed:", err);
    return null;
  }
};
