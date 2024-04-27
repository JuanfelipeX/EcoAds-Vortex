import { useState } from "react";

function App() {
  const [selectedFile, setSelectedFile] = useState();
  const [fileName, setFileName] = useState(""); // Nuevo estado para guardar el nombre del archivo

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setFileName(event.target.files[0].name); // Guardar el nombre del archivo
  };

  const handleSubmission = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      
      const metadata = JSON.stringify({
        name: fileName, // Usar el nombre del archivo para la metadata
      });
      formData.append("pinataMetadata", metadata);

      const options = JSON.stringify({
        cidVersion: 0,
      });
      formData.append("pinataOptions", options);

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
          },
          body: formData,
        }
      );
      const resData = await res.json();
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <label className="form-label"> Choose File</label>
      <input type="file" onChange={changeHandler} />
      <button onClick={handleSubmission}>Submit</button>
    </>
  );
}

export default App;
