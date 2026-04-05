import { useEffect, useState, useRef } from 'react'

const CustomCursor = () => {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Only on pointer-fine (desktop) devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    let ringX = -100, ringY = -100
    let dotX  = -100, dotY  = -100
    let raf

    const moveDot = (e) => {
      dotX = e.clientX
      dotY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`
      }
    }

    const animateRing = () => {
      ringX += (dotX - ringX) * 0.14
      ringY += (dotY - ringY) * 0.14
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`
      }
      raf = requestAnimationFrame(animateRing)
    }

    const onEnter = () => {
      dotRef.current?.classList.add('cursor-hover')
      ringRef.current?.classList.add('cursor-hover')
    }
    const onLeave = () => {
      dotRef.current?.classList.remove('cursor-hover')
      ringRef.current?.classList.remove('cursor-hover')
    }

    const attachHover = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    window.addEventListener('mousemove', moveDot)
    raf = requestAnimationFrame(animateRing)
    attachHover()

    return () => {
      window.removeEventListener('mousemove', moveDot)
      cancelAnimationFrame(raf)
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Dot — instant */}
      <div ref={dotRef} className="cursor-dot" />
      {/* Ring — lagging */}
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}

export default CustomCursor
