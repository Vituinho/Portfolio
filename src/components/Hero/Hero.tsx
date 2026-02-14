import './styles.module.css';

export function Hero() {

  return (
    <>
      <section className='d-flex justify-content-center align-items-center pt-5'>
        <div>
          <div className='d-flex flex-row align-items-center gap-2'>
            <div>
              <img src="image.png" alt="Victor Emanuel - Photo" className='rounded-circle border border-black' />
                <h2 className='text-center'>Victor Emanuel</h2>
            </div>
            <div className='text-center'>
              <h1 className='fw-bold mb-5'>
                <span className='text-black'>
                  <span className='d-block'>Software Developer</span>
                </span>
              </h1>
              <div className='d-flex gap-4 justify-content-center mb-5 flex-wrap'>
                <span className='font-monospace px-4 py-2 bg-white rounded border border-black'>Full-Stack Developer</span>
              </div>
              <div className='d-flex gap-4 justify-content-center mb-5 flex-wrap'>
                <a className='btn btn-primary' href='https://github.com/Vituinho'>View my work</a>
                <a className='btn btn-primary' href='resume.pdf' download={true}>Resume</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}