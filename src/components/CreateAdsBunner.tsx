import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog"

export function CreateAdsBunner() {
    return (

        <div className=' self-stretch mt-8 rounded-lg overflow-hidden pt-1 bg-nlw-gradient'>
            <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>

                <div>

                    <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
                    <span className='text-zinc-400'>Publique um anúncio para encontrar novos players</span>
                </div>

                <Dialog.Trigger type='button' className='hover:bg-violet-600 py-3 px-4 bg-violet-500 text-white rounded flex items-center gap-3'>
                    <MagnifyingGlassPlus size={20} />
                        Publicar anuncio
                </Dialog.Trigger>

            </div>
        </div>

    )
}


