function Footer() {
  const currentYear: number = new Date().getFullYear()

  return (
    <footer className="m-[14px] flex flex-col items-center justify-center gap-[22px] pt-[8px] md:flex-row">
      <div className="left-[28px] flex justify-center items-center h-[76px] w-[100%] max-w-[1224px] flex-row rounded-[24px] bg-fit-b px-[12px] py-[8px] shadow">
        <p className="text-sm font-archivo font-bold text-fit-w">© {currentYear} Carlos Tornero. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer