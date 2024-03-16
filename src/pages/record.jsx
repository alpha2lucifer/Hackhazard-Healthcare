import React, { useState } from 'react';

function Record() {
  const [filePreview, setFilePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState();
  const [cid, setCid] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
        setSelectedFile(e.target.files[0]);
      };
      reader.readAsDataURL(file);
    }
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
    <div className="text-center">
      <h2 className="font-bold text-2xl text-indigo-600 mb-4">File Upload & Image Preview</h2>
      <label htmlFor="file-upload" className="uploader block w-full max-w-lg mx-auto rounded-lg border-4 border-gray-200 p-8 hover:border-indigo-600">
        <input id="file-upload" type="file" name="fileUpload" accept="image/*" onChange={handleFileChange} />
        <div className="flex flex-col items-center">
          {filePreview ? (
            <img src={filePreview} alt="Preview" className="block w-64 h-auto mb-4" />
          ) : (
            <div id="start" className="hidden">
              <i className="fa fa-download text-indigo-600 text-4xl mb-4"></i>
              <div>Select a file or drag here</div>
              <div id="notimage" className="hidden">Please select an image</div>
              <span id="file-upload-btn" className="btn btn-primary">Select a file</span>
            </div>
          )}
          <div id="response" className="hidden">
            <div id="messages"></div>
            <progress id="file-progress" className="progress w-full max-w-xs h-4 mt-2" value="0">
              <span>0</span>%
            </progress>
          </div>
        </div>
      </label>
      <button onClick={handleSubmission}>Submit</button>
      {cid && (
       <button onClick={downloadImage}>Download Image</button>
      )}
    </div>
  );
}

export default Record;
