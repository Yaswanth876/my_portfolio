import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, XCircle, Mail, Github, Linkedin, Download } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

// ─── Replace these with your real EmailJS credentials ───────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
// ────────────────────────────────────────────────────────────────────────────

const contactLinks = [
  {
    href: 'mailto:vsyaswanth008@gmail.com',
    label: 'Email',
    display: 'vsyaswanth008@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    href: 'https://github.com/yaswanth876',
    label: 'GitHub',
    display: 'github.com/yaswanth876',
    icon: Github,
    external: true,
  },
  {
    href: 'https://linkedin.com/in/yaswanthv876',
    label: 'LinkedIn',
    display: 'linkedin.com/in/yaswanthv876',
    icon: Linkedin,
    external: true,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const Contact = () => {
  const formRef = useRef()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  const [focused, setFocused] = useState(null)

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

  const inputClass = (name) => `
    input-glow rounded-xl px-4 py-3 text-sm border focus:outline-none
    transition-all duration-200 w-full
    ${isDark
      ? 'bg-gray-900 border-gray-800 text-white placeholder-gray-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30'
      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20'
    }
    ${focused === name ? 'scale-[1.01]' : 'scale-100'}
  `

  return (
    <section id="contact" className="px-6 pt-10 pb-24 max-w-6xl mx-auto">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
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
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8"
        >
          {/* Availability badge */}
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="inline-flex items-center gap-2.5 text-sm text-emerald-400 font-medium border border-emerald-500/30 bg-emerald-500/5 px-4 py-2 rounded-full w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {contactLinks.map(({ href, label, display, icon: Icon, external }) => (
              <motion.a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="flex items-center gap-4 group"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-colors ${
                    isDark
                      ? 'bg-gray-900 border-gray-800 group-hover:border-sky-500/50 group-hover:bg-sky-500/10'
                      : 'bg-gray-50 border-gray-200 group-hover:border-sky-400/50 group-hover:bg-sky-50'
                  }`}
                >
                  <Icon size={18} className={isDark ? 'text-indigo-400' : 'text-sky-500'} />
                </motion.div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                  <p className={`text-sm transition-colors ${isDark ? 'text-white group-hover:text-sky-400' : 'text-gray-700 group-hover:text-sky-600'}`}>
                    {display}
                  </p>
                </div>
              </motion.a>
            ))}

            <motion.a
              variants={itemVariants}
              href="/Yaswanth Resume.pdf"
              download="Yaswanth_Resume.pdf"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className={`btn-ripple inline-flex items-center gap-2.5 text-sm font-medium px-5 py-3 rounded-xl border transition-colors duration-200 w-fit ${
                isDark
                  ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/20 hover:border-indigo-400'
                  : 'bg-sky-50 border-sky-300 text-sky-600 hover:bg-sky-100 hover:border-sky-400'
              }`}
            >
              <Download size={15} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── Right: form ───────────────────────────────────── */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4"
        >
          {/* Name */}
          <motion.div
            className="flex flex-col gap-1.5"
            animate={{ y: focused === 'name' ? -1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="name" className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
              required
              placeholder="Your name"
              className={inputClass('name')}
            />
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex flex-col gap-1.5"
            animate={{ y: focused === 'email' ? -1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="email" className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
              required
              placeholder="your@email.com"
              className={inputClass('email')}
            />
          </motion.div>

          {/* Message */}
          <motion.div
            className="flex flex-col gap-1.5"
            animate={{ y: focused === 'message' ? -1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="message" className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              required
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              className={`${inputClass('message')} resize-none`}
            />
          </motion.div>

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="btn-ripple flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/30 disabled:opacity-60 disabled:hover:shadow-none disabled:cursor-not-allowed text-white font-medium rounded-xl transition-colors"
          >
            <motion.span
              animate={status === 'sending' ? { rotate: 360 } : { rotate: 0 }}
              transition={status === 'sending' ? { repeat: Infinity, duration: 1, ease: 'linear' } : {}}
            >
              <Send size={16} />
            </motion.span>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </motion.button>

          {/* Success / Error feedback */}
          <AnimatePresence mode="wait">
            {status === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 text-green-400 text-sm"
              >
                <CheckCircle size={16} />
                Message sent! I'll get back to you soon.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 text-red-400 text-sm"
              >
                <XCircle size={16} />
                Something went wrong. Please try again or email me directly.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
