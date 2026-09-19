export function FooterDesktop() {
  return (
    <>
      <footer className="hidden lg:flex items-center p-8 col-span-12 row-span-2 bg-snow-storm-nord4 rounded-lg shadow-small border-2 border-solid border-pollar-night-nord3">
        <p className="font-semibold">
          © {new Date().getFullYear()} made with passion
        </p>
      </footer>
      <section></section>
    </>
  );
}
