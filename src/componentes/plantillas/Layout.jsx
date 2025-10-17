export default function Layout({ children }) {
  return (
    <div className="container p-4">
      <header className="mb-4 text-center">
        <h1> Lugares Bonitos</h1>
      </header>
      <main>{children}</main>
      <footer className="mt-4 text-center text-muted">Este es footer</footer>
    </div>
  );
}
