import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.name.trim() || !values.message.trim()) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const subject = encodeURIComponent(`Message from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name}`);
    
    window.location.href = `mailto:hmishra8840@gmail.com?subject=${subject}&body=${body}`;

    setLoading(false);
    setValues({ name: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <SectionWrapper id="contact" className="mb-16 mx-4 lg:mx-0">
      <h2 className="text-center text-4xl">Contact Me</h2>

      <div className="w-full lg:w-5/6 2xl:w-3/4 mt-10 md:mt-16 mx-auto flex justify-between rounded-xl">
        <Image
          unoptimized
          quality={100}
          alt="contact"
          src="/contact.png"
          className="hidden md:block w-1/2 h-full object-cover"
          width={1000}
          height={1000}
        />
        <div className="flex-1">
          <h3 className="text-2xl">Get in touch</h3>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            My inbox is always open! 💌 Whether you&apos;ve got a burning question or
            want to drop a friendly &quot;hello&quot;, I&apos;m all ears! 👂 Let&apos;s chat! 🎉
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-xl">
            <input
              onChange={handleChange}
              required
              value={values.name}
              name="name"
              type="text"
              placeholder="Full Name *"
              className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4"
            />
            <textarea
              onChange={handleChange}
              required
              value={values.message}
              name="message"
              rows={4}
              placeholder="Message *"
              className="outline-none resize-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4"
            />
            <button
              disabled={loading}
              className="px-4 py-2 bg-violet-600 hover:bg-violet-700 transition-colors text-white rounded-lg disabled:cursor-not-allowed self-end"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  Say Hello <BiLoaderAlt className="animate-spin" />
                </span>
              ) : (
                "Say Hello 👋"
              )}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
