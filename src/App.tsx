import * as Dialog from "@radix-ui/react-dialog"
import "./styles/main.css"
import { useEffect, useState } from 'react'
import EsportLogo from "./assets/logo.svg"


import { GameBunner } from './components/GameBunner'
import { CreateAdsBunner } from './components/CreateAdsBunner'
import { GetGames } from './util/uitl'
import { GamesLoadProps } from './util/interfaces'
import { GameController } from 'phosphor-react'
import { Input } from "./Forms/Input"

function App() {

  const [games, setGames] = useState<GamesLoadProps[]>([])

  useEffect(() => {

    // console.log("Teste")

    async function LoadGames() {
      const response = await GetGames()
      console.log("teste resposat")
      setGames(response)
    }


    LoadGames()





  }, [])


  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20' >
      <img src={EsportLogo} />

      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='bg-nlw-gradient text-transparent bg-clip-text' >duo</span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>

        {
          games.map((game) => {
            return (<GameBunner key={game.id} adsCount={game._count.ads} bunnerUrl={game.bannerUrl} title={game.title} />)
          })
        }


      </div>

      <Dialog.Root>

        <CreateAdsBunner />

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

          <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]'>
            <Dialog.Title className='text-3xl text-white font-black'>Publique um anúncio</Dialog.Title>


            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">Qual o game</label>
                <Input type='text' id='game' placeholder="Selecione o game que queria jogar" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome</label>
                <Input type={'text'} id='name' placeholder="Como te chamar dentro do game? " />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap 2">
                  <label htmlFor="yearPlaying">Quantos anos joga?</label>
                  <Input id='yearPlaying' type={'number'} placeholder="tudo bem ser 0" />
                </div>

                <div className="flex flex-col gap 2">
                  <label htmlFor="discord">Discord</label>
                  <Input id='discord' type={'text'} placeholder="usuario000000" />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar</label>
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      title="Domingo"
                      className="w-8 h-8 rounded bg-zinc-900 "

                    >D</button>
                    <button
                      title="Segunda"
                      className="w-8 h-8 rounded bg-zinc-900 "

                    >S</button>
                    <button
                      title="Terça"
                      className="w-8 h-8 rounded bg-zinc-900 "

                    >T</button>
                    <button
                      title="Quarta"
                      className="w-8 h-8 rounded bg-zinc-900 "
                    >Q</button>
                    <button
                      title="Quinta"
                      className="w-8 h-8 rounded bg-zinc-900 "
                    >Q</button>
                    <button
                      title="Sexta"
                      className="w-8 h-8 rounded bg-zinc-900 "
                    >S</button>
                    <button
                      title="Sábado"
                      className="w-8 h-8 rounded bg-zinc-900 "
                    >S</button>
                  </div>
                  {/* <input  id='yearPlaying' type={'number'} placeholder="tudo bem ser 0" /> */}
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="discord">Qual horário do dia</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input type="time" id="hourStart" placeholder='De' />
                    <Input type="time" id="hourEnd" placeholder='ate' />


                  </div>

                </div>

              </div>

              <div className="mt-2 flex gap-2 text-sm ">
                <Input type="checkbox" />
                Costumo me Aconectar ao chat de voz
              </div>

              <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close type="button" 
                  className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                  >
                    
                    Cancelar</Dialog.Close>
                <button 
                  type="button" 
                  className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                 >
                  Encontrar dou <GameController  size={24}/> </button>
              </footer>


            </form>

          </Dialog.Content>



        </Dialog.Portal>

      </Dialog.Root>

    </div>
  )
}

export default App
