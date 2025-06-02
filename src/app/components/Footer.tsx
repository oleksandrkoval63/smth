export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} My Shop. Всі права захищені.</p>
      </div>
    </footer>
  );
}
