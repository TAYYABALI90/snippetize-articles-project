// import { logo } from '../assets';

import logo from '../assets/web_logo.png';

const Hero = () => {

  return (

    <header className='w-full flex justify-center items-center flex-col'>

      <nav className='flex justify-between items-center w-full mb-10 pt-3'>

        <img src={logo} alt="sumz_logo" className='w-28 object-contain' />

        <button type='button' className='black_btn' onClick={() => window.open('https://github.com/TAYYABALI90')}>
          GitHub
        </button>

      </nav>

      <h1 className='head_text'>Simplify Your Reading with <br className='max-md:hidden' /> <span className='orange_gradient'>OpenAI GPT-4</span> </h1>

      <h2 className='desc'>Less on time but still want to stay informed? Snippetize what you have covered! Our state-of-the-art tool uses advanced technology to extract the essence of any article and present it in a concise and easily digestible form. With Snippetize, you can keep up with the latest news and trends without wasting time on long articles. Say goodbye to FOMO and hello to Snippetize!</h2>

    </header>

  )

}

export default Hero;