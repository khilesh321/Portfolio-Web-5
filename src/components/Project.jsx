import { useState, useRef, useEffect } from "react"
import ProjectDetails from "./ProjectDetails"

function Project({title, description, subDescription, href, image, tags, setPreview}) {
  const [isHidden, setIsHidden] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setPreview(null);
        }
      },
      { threshold: 0 }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, [setPreview]);

  return (<>
    <div ref={projectRef} className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
      onMouseEnter={() => setPreview(image)}
      onMouseLeave={() => setPreview(null)}
    >
      <div>
        <p className="text-2xl">{title}</p>
        <div className="flex flex-wrap gap-4 mt-2 text-sand">
          {tags.map(tag => <span key={tag.id}>{tag.name}</span>)}
        </div>
      </div>
      <button className="flex items-center gap-1 cursor-pointer hover-animation"
        onClick={() => setIsHidden(true)}
      >
        Read More
        <img src="assets/arrow-right.svg" alt="readmore icon" className="w-5" />
      </button>
    </div>
    <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"/>
      {isHidden && <ProjectDetails title={title} description={description} subDescription={subDescription} image={image} tags={tags} href={href} setIsHidden={setIsHidden} />}
    </>
  )
}

export default Project