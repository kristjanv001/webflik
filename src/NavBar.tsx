import { useEffect, useState } from "react"

export const NavBar = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {

    function handleScroll() {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);


  return (
    <div className={`nav ${show && "nav__scroll"}`}>
      Webflik
    </div>
  )
}