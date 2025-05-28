const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-black text-gray-300 hover:none py-3">
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm"
      href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
        © {new Date().getFullYear()} BlogHub. All rights reserved.
    </a>
  </footer>
  )
}

export default Footer;
