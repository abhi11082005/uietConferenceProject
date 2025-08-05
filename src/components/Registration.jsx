import { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: "",
    paperId: "",
    paperTitle: "",
    authorName: "",
    authorEmail: "",
    authorMobile: "",
    amountPaid: "",
    transactionId: "",
    modeOfPresentation: "Online",
  });

  const [files, setFiles] = useState({
    idCard: null,
    feeScreenshot: null,
    studentIdProof: null,
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const {
    email,
    paperId,
    paperTitle,
    authorName,
    authorEmail,
    authorMobile,
    amountPaid,
    transactionId,
    modeOfPresentation,
  } = formData;

  const data = [
    {
      Email: email,
      "Paper ID": paperId,
      "Paper Title": paperTitle,
      "Author Name": authorName,
      "Author Email": authorEmail,
      "Author Mobile": authorMobile,
      "Amount Paid": amountPaid,
      "Transaction ID": transactionId,
      "Presentation Mode": modeOfPresentation,
    },
  ];

  // Create a worksheet
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Create a workbook and add the worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Registrations");

  // Write workbook and trigger download
  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });
  const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
  saveAs(dataBlob, "registration_data.xlsx");

  alert("Excel file generated successfully!");
};

  return (
  <div className="mx-auto w-full max-w-7xl">
    <form
      className="bg-white py-10 px-6 text-black shadow-lg rounded-xl w-full"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-6">
  {[
  { label: "Email", name: "email", type: "email", required: true },
  { label: "Paper ID", name: "paperId", type: "text", required: true },
  { label: "Paper Title", name: "paperTitle", type: "text", required: true },
  { label: "Author Name", name: "authorName", type: "text", required: true },
  { label: "Author Email", name: "authorEmail", type: "email", required: true },
  { label: "Author Mobile Number", name: "authorMobile", type: "text", required: true },
  { label: "Amount Paid", name: "amountPaid", type: "number", required: true },
  { label: "Transaction ID", name: "transactionId", type: "text", required: true },
].map((field) => (
  <div key={field.name} className="flex flex-col items-center">
    <label className="text-lg font-semibold text-gray-700 mb-1 w-full max-w-md">
      {field.label}
      {field.required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={field.type}
      name={field.name}
      onChange={handleInput}
      required={field.required}
      className="w-full max-w-md bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />
  </div>
))}


  <div className="flex flex-col items-center">
    <label className="text-lg font-semibold text-gray-700 mb-1 w-full max-w-md">
      Mode of Presentation<span className="text-red-500">*</span>
    </label>
    <select
      name="modeOfPresentation"
      onChange={handleInput}
      className="w-full max-w-md bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    >
      <option>Online</option>
      <option>Offline</option>
    </select>
  </div>

  {[
    { label: "Upload ID Card (Student only)", name: "idCard", required: false },
    { label: "Upload Fee Payment Screenshot*", name: "feeScreenshot", required: true },
    { label: "Upload Student ID Proof (if student)", name: "studentIdProof", required: false },
  ].map((fileField) => (
    <div key={fileField.name} className="flex flex-col items-center">
      <label className="text-lg font-semibold text-gray-700 mb-1 w-full max-w-md">
        {fileField.label}
      </label>
      <input
        type="file"
        name={fileField.name}
        onChange={handleFileChange}
        required={fileField.required}
        className="w-full max-w-md bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600 transition"
      />
    </div>
  ))}

  <button
    type="submit"
    className="bg-blue-600 text-white font-semibold px-6 py-3 mt-2 rounded-lg hover:bg-blue-700 transition w-full max-w-md mx-auto"
  >
    Submit
  </button>
</div>

    </form>
  </div>
);

}
