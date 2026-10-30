export function FooterDesktop() {
  return (
    <>
      <footer className="hidden m-0 lg:flex items-center lg:p-8 lg:col-span-12 lg:row-span-2 bg-snow-storm-nord4 lg:rounded-lg lg:shadow-small lg:border-2 lg:border-solid lg:border-pollar-night-nord3">
        <p className="font-semibold">
          © {new Date().getFullYear()} made with passion
        </p>
      </footer>
    </>
  );
}
