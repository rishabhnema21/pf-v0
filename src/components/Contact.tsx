"use client";

import axios from "axios";
import { FormEvent, useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError(null);

    const formData = new FormData(formRef.current!);
    formData.append("access_key", "d1e11ee3-e407-4322-8b50-98627b3652d3");

    try {
      const { data } = await axios.post(
        "https://api.web3forms.com/submit",
        formData,
      );

      if (data.success) {
        setSuccess(true);
        formRef.current?.reset();
        setTimeout(() => {
          setSuccess(false);
        }, 1000);
      } else {
        setError(data.message || "Fail to Send");
      }
    } catch {
      setError("Network Error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="connect" className="w-full">
      <div className="flex flex-col tracking-wider">
        <div className="mb-5">
          <h2 className="text-zinc-600 dark:text-zinc-200 text-2xl font-ubuntu">
            Connect
          </h2>
          <p className="text-sm opacity-40 text-zinc-700 dark:text-zinc-300">
            Drop a message anytime
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleFormSubmission}
          className="flex flex-col w-full gap-4 px-2"
        >
          <div className="flex flex-col gap-1">
            <label className="text-zinc-600 dark:text-zinc-200">Name</label>
            <input
              name="name"
              type="text"
              className="bg-zinc-300/60 dark:bg-zinc-950/50 p-2 rounded-sm text-sm outline-none"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-zinc-600 dark:text-zinc-200">Email</label>
            <input
              name="email"
              type="email"
              className="bg-zinc-300/60 dark:bg-zinc-950/50 p-2 rounded-sm text-sm outline-none"
              placeholder="Your Email ID"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-zinc-600 dark:text-zinc-200">Message</label>
            <textarea
              name="message"
              className="resize-none h-28 rounded-sm p-2 text-sm outline-none bg-zinc-300/60 dark:bg-zinc-950/50"
              placeholder="Start Your Message here..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-zinc-700 dark:bg-zinc-300 font-semibold text-sm text-zinc-300 dark:text-zinc-800 px-3 py-1 rounded-sm inline-flex justify-center items-center gap-2 w-28 transition-all duration-200 ease-in ${loading ? "opacity-70" : "hover:bg-zinc-800 dark:hover:bg-zinc-400"}`}
          >
            {loading ? "Sending..." : success ? "Sent ✓" : "Drop it"}
          </button>

          {error && (
            <p className="text-red-500 text-sm mt-2 animate-fade-in">
              ❌ {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
