"use client";
import React, { useRef, useState } from "react";
import 'font-awesome/css/font-awesome.min.css';

const DocChat = () => {
    const fileInputRef = useRef(null);
    const [fileContent, setFileContent] = useState(""); // To store the extracted text content
    const [fileName, setFileName] = useState(""); // To store the uploaded file name
    const [fileSelected, setFileSelected] = useState(false); // To track if a file is selected

    const handleBoxClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            setFileSelected(true);

            const reader = new FileReader();

            // Define what happens when the file is read
            reader.onload = (event) => {
                const text = event.target.result; // Extract the file's text content
                setFileContent(text);
            };

            // Read the file as text
            reader.readAsText(file);
        }
    };

    return (
        <div className="h-screen bg-slate-800 flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl mt-5">
                Welcome! to <span className="font-bold text-green-500">DocChat</span>
            </h1>
            <div className="grid grid-cols-12 w-full px-4 mt-8">
                <div className="col-span-5 col-start-1">
                    <div className="bg-white rounded-3xl p-6 border w-[35vw] h-[75vh] border-white">
                        <div
                            className="bg-white rounded-3xl border-2 border-dashed border-black w-[31vw] h-[66vh] flex flex-col justify-center items-center hover:bg-gray-300 cursor-pointer"
                            onClick={handleBoxClick}
                        >
                            <i className="fa fa-cloud-upload text-green-500" style={{ fontSize: "25vh" }}></i>
                            <p className="text-gray-600 mt-4 text-lg">
                                {fileSelected ? `Selected File: ${fileName}` : "Drag or click to upload file..."}
                            </p>

                            {/* Hidden file input */}
                            <input
                                type="file"
                                accept=".txt,.csv,.json" // Limit file types if needed
                                className="hidden"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Display extracted text content */}
                <div className="col-span-6 col-start-7 bg-gray-200 rounded-3xl p-6 border w-[35vw] h-[75vh] overflow-y-auto">
                    <h2 className="text-black text-2xl font-bold mb-4">File Content:</h2>
                    <pre className="text-gray-800 whitespace-pre-wrap">{fileContent || "No file content to display."}</pre>
                </div>
            </div>
        </div>
    );
};

export default DocChat;
