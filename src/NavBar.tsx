import { useEffect, useState } from "react"

export const NavBar = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (show) {
      return;
    }

    function handleScroll() {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className={`nav ${show && "nav__scroll"}`}>
      Webflik
    </div>
  )
}