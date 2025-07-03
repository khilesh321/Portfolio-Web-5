import { useState } from "react";
import {AnimatePresence, motion} from 'motion/react'

function CopyEmailButton() {
  const [isCopied, setIsCopied] = useState(false);
  function copyToClipboard(){
    navigator.clipboard.writeText('khilujawale321@gmail.com');
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 2000);
  }
  return (
    <motion.button onClick={copyToClipboard} className="relative px-1 py-4 textt-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
      whileHover={{y: -2.5}}
      whileTap={{scale: 1.05}}
    >
      <AnimatePresence mode="wait">
        {isCopied ? 
        <motion.p className="flex items-center justify-center gap-2"
          key={'copied'}
          initial={{opacity: 0, y: -10}}
          animate={{opacity: 1, y: 0}}
        >
          <img className="w-5" src="assets/copy-done.svg" alt="copydone icon" />
          Email has Copied
        </motion.p> :
        <motion.p className="flex items-center justify-center gap-2"
          key={'copy'}
          initial={{opacity: 0, y: -10}}
          animate={{opacity: 1, y: 0}}
        >
          <img className="w-5" src="assets/copy.svg" alt="copy icon" />
          Copy Email Address
        </motion.p>}
      </AnimatePresence>
    </motion.button>
  )
}

export default CopyEmailButton