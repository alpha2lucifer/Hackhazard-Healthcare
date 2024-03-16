import { useState } from "react";
import React from "react";

function Files() {
  const [selectedFile, setSelectedFile] = useState();
  const [cid, setCid] = useState();
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      const metadata = JSON.stringify({
        name: "File name",
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
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiOTViZTVjNi00NmRlLTQ1ZDEtOGM3Ny0xOTA1MmMxODU1NzMiLCJlbWFpbCI6ImFhYmlkaHVzc2FpbnBhc0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMTdkMjVjYTBjMzYwYmI3YzM3MDAiLCJzY29wZWRLZXlTZWNyZXQiOiI3MjBmZDlkYzExNTQ1MjlkNTQ1N2JhNjkwNjEzYjdhNGU1ZDgyMDc4ZWVhOTk2YTAxM2MxYmJkMzJkODcyMGI0IiwiaWF0IjoxNzA4ODc0NjExfQ.z2N4jV9Eic5Ixu0qIw340XfWnElftqzgb5N3UNrYFKY`,
          },
          body: formData,
        }
      );
      const resData = await res.json();
      setCid(resData.IpfsHash);
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  }; const downloadImage = () => {
    // Construct the URL for the image
    const imageUrl = `https://mydomain.mypinata.cloud/ipfs/${cid}`;
    
    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = imageUrl;
    anchor.download = imageUrl; // Specify the filename for the downloaded image
    
    // Trigger a click event on the anchor element to initiate the download
    anchor.click();

    // Cleanup: remove the temporary anchor element
    document.body.removeChild(anchor);
  };


  return (
    <>
      <label className="form-label"> Choose File</label>
      <input type="file" onChange={changeHandler} />
      <button onClick={handleSubmission}>Submit</button>
      {cid && (
       <button onClick={downloadImage}>Download Image</button>
      )}
    </>
  );
}

export default Files;
