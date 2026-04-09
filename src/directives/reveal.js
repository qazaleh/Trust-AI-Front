function resolveDelay(value) {
  if (typeof value === 'number') {
    return value
  }

  if (value && typeof value === 'object' && typeof value.delay === 'number') {
    return value.delay
  }

  return 0
}

function createObserver(el, binding) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }

        el.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -10% 0px',
    },
  )

  const delay = resolveDelay(binding.value)

  el.classList.add('reveal-on-scroll')

  if (delay > 0) {
    el.style.setProperty('--reveal-delay', `${delay}ms`)
  }

  observer.observe(el)
  el.__revealObserver = observer
}

export default {
  mounted(el, binding) {
    createObserver(el, binding)
  },
  updated(el, binding) {
    const delay = resolveDelay(binding.value)

    if (delay > 0) {
      el.style.setProperty('--reveal-delay', `${delay}ms`)
    } else {
      el.style.removeProperty('--reveal-delay')
    }
  },
  unmounted(el) {
    el.__revealObserver?.disconnect()
    delete el.__revealObserver
  },
}
