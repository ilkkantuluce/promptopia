import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover & Share</h1>
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
        <p className="desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere debitis eum doloremque officiis illum non omnis, beatae qui enim architecto.</p>
    
        <Feed />
    </section>
  )
}

export default Home