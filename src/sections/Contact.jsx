import { useState, useRef, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Particles } from "../components/Particles";
import { AnimatePresence, motion } from 'motion/react';

const Contact = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const localTimeRef = useRef(null); // React ref for hidden input
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  // Watch for form submission result
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    } else if (state.errors && state.errors.length > 0) {
      setShowError(true);
      const timer = setTimeout(() => setShowError(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, state.errors]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Custom submit function to inject current time then submit
  const handleCustomSubmit = (e) => {
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    let hours = d.getHours();
    const minutes = d.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;

    const formattedTime = `${day}/${month}/${year}, ${hours}:${minutes} ${ampm}`;

    if (localTimeRef.current) {
      localTimeRef.current.value = formattedTime;
    }

    // finally call Formspree's handleSubmit
    handleSubmit(e);
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
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>

        <form className="w-full" onSubmit={handleCustomSubmit} method="POST">
          {/* Hidden field to capture local time */}
          <input type="hidden" name="local_time" ref={localTimeRef} />

          <div className="mb-5">
            <label htmlFor="name" className="field-label">Full Name</label>
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
            <label htmlFor="email" className="field-label">Email</label>
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
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="field-label">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* ✅ Timed success & error messages */}
          {showSuccess && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="m-2 text-md py-1 px-2 text-center bg-green-200 text-green-800 rounded-md"
            >
              Thanks for Submitting!
            </motion.p>
          )}

          {showError && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="m-2 text-md py-1 px-2 text-center bg-red-200 text-red-800 rounded-md"
            >
              *Error while Submitting
            </motion.p>
          )}

          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation flex items-center justify-center gap-2"
            disabled={state.submitting}
          >
            <AnimatePresence>
              {state.submitting ? (
                <motion.p
                  className="flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <span>submitting</span>
                  <span className="inline-block h-5 w-5 border-4 border-white border-t-transparent rounded-full animate-spin align-middle" />
                </motion.p>
              ) : (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  send
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
