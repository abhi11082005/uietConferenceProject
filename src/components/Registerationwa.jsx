export default function RegistrationFormwa() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <p className="text-sm text-red-600 mb-4 text-center">
        ⚠️ To upload a photo, you must be signed into a Google account.
        If the upload option doesn't appear, please{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSchJ_BVJiB4YjcCS7nD1hc6ZGUIj0Y09593rDhbmn2bCUZu6A/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          open the form in a new tab
        </a>.
      </p>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSchJ_BVJiB4YjcCS7nD1hc6ZGUIj0Y09593rDhbmn2bCUZu6A/viewform?embedded=true"
        className="w-full max-w-5xl h-[1000px] border rounded-lg shadow-lg"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}
