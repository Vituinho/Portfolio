import './styles.module.css';

export function Navbar() {

  return (
    <>
      <nav className='d-block fixed-top navbar border-bottom'>
        <div className='d-flex justify-content-between align-items-center px-5'>
          <div>
            <span>&lt;</span>
            <span> Victor </span>
            <span>/&gt;</span>
          </div>
          <div className='d-flex gap-3'>
            <a className='nav-item' href="">About</a>
            <a className='nav-item' href="">Projects</a>
            <a className='nav-item' href="">Skills</a>
            <a className='nav-item' href="">Recomendations</a>
            <a className='nav-item' href="">Contact</a>
          </div>
        </div>
      </nav>
    </>
  )
}