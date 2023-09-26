
const uploadPostFile = async (e) => {
    alert(1)
    const files = e.target.files;

    console.log(files);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "upload_file_to_cloudinary");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/djmmcic9h/image/upload",
      {
        method: "POST",
        body: data
      }
    )
    const data2 = await res.json();
    

    console.log(data2.secure_url);
  }

fileUpload.addEventListener('change', uploadPostFile)

