export default function ContactFooter() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-20 border-t">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-2">
        <p className="text-lg font-semibold">📍 Taguig, Philippines</p>
        <p>📧 jrabatog@gmail.com | ☎️ +63929-258-7564</p>
        <div className="flex justify-center gap-4 text-purple-600 text-xl mt-2">
          <a href="https://www.linkedin.com/in/jeff-rouzel-bat-og-b866032b1" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> {/* Optional: use react-icons */}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-4">© 2025 Jeff Rouzel Bat-og. All rights reserved.</p>
      </div>
    </footer>
  );
}
