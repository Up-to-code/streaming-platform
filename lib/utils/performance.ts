// Utility functions for performance optimization

/**
 * Debounce function to limit how often a function is called
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function to limit the rate at which a function is executed
 */
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle = false

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

/**
 * Lazy load images when they come into viewport
 */
export function lazyLoadImages() {
  if (typeof window !== "undefined" && "IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement
          const src = image.dataset.src

          if (src) {
            image.src = src
            image.removeAttribute("data-src")
          }

          observer.unobserve(image)
        }
      })
    })

    const images = document.querySelectorAll("img[data-src]")
    images.forEach((img) => imageObserver.observe(img))
  }
}

