import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, XCircle, Mail, Github, Linkedin, Download } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

// ─── Replace these with your real EmailJS credentials ───────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
// ────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const formRef = useRef()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <section id="contact" className="px-6 pt-10 pb-24 max-w-6xl mx-auto">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className={`text-sm font-medium tracking-widest uppercase mb-3 ${isDark ? 'text-indigo-400' : 'text-sky-600'}`}>
          Get In Touch
        </p>
        <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Me</h2>
        <p className={`max-w-xl ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          I'm open to internships, full-time roles, and freelance projects.
          Have an idea or opportunity? Let's talk.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* ── Left: info + socials ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8"
        >
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2.5 text-sm text-emerald-400 font-medium border border-emerald-500/30 bg-emerald-500/5 px-4 py-2 rounded-full w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for opportunities
          </div>

          <div className="flex flex-col gap-5">
            <a
              href="mailto:vsyaswanth008@gmail.com"
              className="flex items-center gap-4 group"
            >
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center transition ${
                isDark ? 'bg-gray-900 border-gray-800 group-hover:border-sky-500/50 group-hover:bg-sky-500/10' : 'bg-gray-50 border-gray-200 group-hover:border-sky-400/50 group-hover:bg-sky-50'
              }`}>
                <Mail size={18} className={isDark ? 'text-indigo-400' : 'text-sky-500'} />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Email</p>
                <p className={`text-sm transition ${isDark ? 'text-white group-hover:text-sky-400' : 'text-gray-700 group-hover:text-sky-600'}`}>
                  vsyaswanth008@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/yaswanth876"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center transition ${
                isDark ? 'bg-gray-900 border-gray-800 group-hover:border-sky-500/50 group-hover:bg-sky-500/10' : 'bg-gray-50 border-gray-200 group-hover:border-sky-400/50 group-hover:bg-sky-50'
              }`}>
                <Github size={18} className={isDark ? 'text-indigo-400' : 'text-sky-500'} />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">GitHub</p>
                <p className={`text-sm transition ${isDark ? 'text-white group-hover:text-sky-400' : 'text-gray-700 group-hover:text-sky-600'}`}>
                  github.com/yaswanth876
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/yaswanthv876"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center transition ${
                isDark ? 'bg-gray-900 border-gray-800 group-hover:border-sky-500/50 group-hover:bg-sky-500/10' : 'bg-gray-50 border-gray-200 group-hover:border-sky-400/50 group-hover:bg-sky-50'
              }`}>
                <Linkedin size={18} className={isDark ? 'text-indigo-400' : 'text-sky-500'} />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">LinkedIn</p>
                <p className={`text-sm transition ${isDark ? 'text-white group-hover:text-sky-400' : 'text-gray-700 group-hover:text-sky-600'}`}>
                  linkedin.com/in/yaswanthv876
                </p>
              </div>
            </a>

            <a
              href="/Yaswanth Resume.pdf"
              download="Yaswanth_Resume.pdf"
              className={`inline-flex items-center gap-2.5 text-sm font-medium px-5 py-3 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 w-fit ${
                isDark
                  ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/20 hover:border-indigo-400'
                  : 'bg-sky-50 border-sky-300 text-sky-600 hover:bg-sky-100 hover:border-sky-400'
              }`}
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* ── Right: form ───────────────────────────────────── */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className={`rounded-xl px-4 py-3 text-sm border focus:outline-none transition ${
                isDark
                  ? 'bg-gray-900 border-gray-800 text-white placeholder-gray-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20'
              }`}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className={`rounded-xl px-4 py-3 text-sm border focus:outline-none transition ${
                isDark
                  ? 'bg-gray-900 border-gray-800 text-white placeholder-gray-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20'
              }`}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              className={`rounded-xl px-4 py-3 text-sm border focus:outline-none transition resize-none ${
                isDark
                  ? 'bg-gray-900 border-gray-800 text-white placeholder-gray-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20'
              }`}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.97] disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:cursor-not-allowed text-white font-medium rounded-xl transition"
          >
            <Send size={16} />
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {/* Success / Error feedback */}
          {status === 'success' && (
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <CheckCircle size={16} />
              Message sent! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <XCircle size={16} />
              Something went wrong. Please try again or email me directly.
            </div>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
