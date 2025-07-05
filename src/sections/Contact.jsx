import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Particles } from "../components/Particles";
import {AnimatePresence, motion} from 'motion/react'

const Contact = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // if (state.succeeded) {
  //     return <p mt-15 textheading>Thanks for joining!</p>;
  // }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're loking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit} method="POST">
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="your name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="you@example.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          {state.succeeded && <motion.p initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} className="m-2 text-md py-1 px-2 text-center bg-green-200 text-green-800 rounded-md ">Thanks for Submitting!</motion.p>}
          {state.errors && <motion.p initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} className="m-2 text-md py-1 px-2 text-center bg-red-200 text-red-800 rounded-md">*Error while Submitting</motion.p>}
          
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation flex items-center justify-center gap-2"
            disabled={state.submitting}
          >
            <AnimatePresence>
            {state.submitting ? (
              <motion.p
                className="flex items-center justify-center gap-2"
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 10}}
              >
                <span>submitting</span>
                <span className="inline-block h-5 w-5 border-4 border-white border-t-transparent rounded-full animate-spin align-middle" />
              </motion.p>
            ) : (
              <motion.span
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                >send
              </motion.span>
            )}
            </AnimatePresence>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
