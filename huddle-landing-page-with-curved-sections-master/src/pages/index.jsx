import Header from '@/components/Header'
import LinkButton from '@/components/LinkButton'

export default function Home () {
  return (
    <>
      <img src="desktop-design.jpg" alt="bg" className='absolute w-screen h-screen object-cover object-top opacity-30 -z-10' />

      <Header />

      <section className='items-center flex flex-col mt-40 gap-11'>
        <h2 className='font-bold font-poppins text-5xl'>Build The Community Your Fans Will Love</h2>
        <p className='text-xl max-w-screen-sm text-center'>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>

        <LinkButton>Get Started For Free</LinkButton>
      </section>
    </>
  )
}
