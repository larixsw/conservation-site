import background from '../assets/images/home.jpg'

export default function Home() {
  return (
    <div
      className="w-full bg-cover bg-center flex flex-col justify-center items-center gap-4"
      style={{backgroundImage: `url(${background})`}}
    >
      <div className="text-4xl text-white font-black text-center px-8">
        Preserving Nova&nbsp;Scotia's
        <br />
        Nature and Heritage
      </div>
    </div>
  )
}
