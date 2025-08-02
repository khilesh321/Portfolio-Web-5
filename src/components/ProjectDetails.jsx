import { easeInOut, motion } from "motion/react"

function ProjectDetails({title, description, subDescription, image, tags, href, setIsHidden}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm" data-lenis-prevent>
      <motion.div className="relative max-w-xl w-full max-h-[95vh] border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 flex flex-col"
        initial={{opacity: 0, scale: .5}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: .35, ease: easeInOut}}
      >
        <button className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
          onClick={() => setIsHidden(false)}
        >
          <img className="w-6 h-6" src="assets/close.svg" alt="close icon" />
        </button>
        <img className="w-full rounded-t-2xl object-cover" src={image} alt={image} />
        <div className="p-4 sm:p-5 overflow-y-auto flex-1">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => <p key={index} className="mb-3 font-normal text-neutral-400">{subDesc}</p>)}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map(tag => <img key={tag.id} src={tag.path} alt={tag.name} className="rounded-lg size-10 hover:animation" />)}
            </div>
            <a href={href} target="_blank" className="inline-flex items-center gap-1 font-medium hover:animation cursor-pointer">
              View Project
              <img src="assets/arrow-up.svg" alt="arrow icon" className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectDetails