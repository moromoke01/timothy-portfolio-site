export default function Footer() {
  return (
    <footer className="w-full h-32 bg-black text-white py-4 px-6">
    
        <div className="flex justify-end items-center h-full gap-6 md:gap-10">
        <a 
          href="/" 
          className="hover:text-blue-500 transition"
        >
          Back to Homepage
        </a>
        <a 
          href="#portfolio" 
          className="hover:text-blue-500 transition"
        >
          View Portfolio
        </a>
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          Chat on WhatsApp
        </a>
      </div>
    </footer>
  );
}
