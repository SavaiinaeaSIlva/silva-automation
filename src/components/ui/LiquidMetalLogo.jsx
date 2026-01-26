import React, { useEffect, useState, useRef } from 'react';
import { LiquidMetal } from '@paper-design/shaders-react';
import defaultImage from '../../assets/logo/liquid-metal.svg';
import iconPng from '../../assets/logo/icon.png';

// Simple error boundary to catch render-time errors from the shader
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Could log to an external service here
    console.error('LiquidMetalLogo error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

/**
 * LiquidMetalLogo
 * - imageSrc?: string - override image used for mask & shader
 * - ariaLabel?: string - meaningful label; omit to mark decorative
 * - className?: string - wrapper class
 * - variant?: 'foreground' | 'background'
 * - accepts shader props: repetition, softness, distortion, contour, angle, speed, scale, colorBack, colorTint
 */
export default function LiquidMetalLogo({
  imageSrc,
  ariaLabel,
  className = '',
  variant = 'foreground',
  // new options: sticky (fixed centered on viewport) and glass (glassmorphism card)
  sticky = false,
  glass = false,
  repetition = 2,
  softness = 0.1,
  distortion = 0.07,
  contour = 0.4,
  angle = 70,
  speed = 1,
  scale = 0.6,
  colorBack = 'rgba(0,0,0,0)',
  colorTint = '#ffffff',
  fit = 'contain'
}) {
  // helper classes applied when sticky/glass are enabled
  const stickyClass = sticky
    ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none w-40 h-40 md:w-56 md:h-56 rounded-full p-2'
    : ''; 
  const glassClass = glass
    ? 'backdrop-blur-md bg-white/10 border border-white/20 shadow-lg'
    : '';
  const src = imageSrc || defaultImage;
  const [loaded, setLoaded] = useState(false);
  const [shaderSupported, setShaderSupported] = useState(true);
  const [hasShaderError, setHasShaderError] = useState(false);
  // shaderImageSrc: what we pass to the shader. May fall back to PNG if SVG taints canvas.
  const [shaderImageSrc, setShaderImageSrc] = useState(src);
  // Whether the shader canvas has mounted and is ready to show
  const [shaderMounted, setShaderMounted] = useState(false);
  const containerRef = useRef(null);

  // Preload the mask image and verify shader-safe (detect canvas tainting).
  // If the SVG (or image) causes canvas tainting (external fonts/resources),
  // we'll fall back to a local PNG for the shader while keeping the SVG mask.
  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      if (cancelled) return;
      setLoaded(true);

      // Quick taint test: draw to offscreen canvas and call getImageData
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || 2;
        canvas.height = img.naturalHeight || 2;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        // If this throws a SecurityError, the image is tainted
        ctx.getImageData(0, 0, 1, 1);
        // safe to use original source for shader
        setShaderImageSrc(src);
      } catch (e) {
        console.warn('Mask image taint detected, falling back to PNG for shader', e);
        // Use local PNG (same-origin) for shader to avoid canvas taint
        setShaderImageSrc(iconPng);
      }
    };
    img.onerror = () => {
      if (cancelled) return;
      setLoaded(true);
      // on error, fallback to PNG for shader
      setShaderImageSrc(iconPng);
    };
    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  // Detect WebGL support
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      // defer setState to avoid synchronous state update during render
      Promise.resolve().then(() => setShaderSupported(!!gl));
    } catch {
      Promise.resolve().then(() => setShaderSupported(false));
    }
  }, []);

  // Poll for shader canvas to appear; show fallback immediately and swap when ready.
  useEffect(() => {
    if (!loaded || !shaderSupported) return;
    let elapsed = 0;
    let found = false;
    const interval = setInterval(() => {
      if (!containerRef.current) return;
      const hasCanvas = !!containerRef.current.querySelector('canvas');
      if (hasCanvas) {
        found = true;
        setShaderMounted(true);
        clearInterval(interval);
        return;
      }
      elapsed += 100;
      if (elapsed >= 600) {
        clearInterval(interval);
        if (!found) setHasShaderError(true);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [loaded, shaderSupported]);

  const isDecorative = !ariaLabel || variant === 'background';

  const maskStyle = loaded
    ? {
        // ensure transparent background behind shader and center content to avoid cropping
        backgroundColor: 'transparent',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
        padding: 0,
        width: '100%',
        height: '100%',
        WebkitMaskImage: `url(${src})`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        WebkitMaskPosition: 'center',
        WebkitMaskMode: 'alpha',
        WebkitMaskComposite: 'source-in',
        maskImage: `url(${src})`,
        maskRepeat: 'no-repeat',
        maskSize: 'contain',
        maskPosition: 'center',
        maskMode: 'alpha',
        maskComposite: 'intersect',
        transition: 'opacity 150ms ease',
        opacity: 1,
      }
    : {
        transition: 'opacity 150ms ease',
        opacity: 0,
      };

  // Fallback element (static image) used when WebGL unavailable or shader errors
  const fallback = (
    <img
      src={src}
      alt={isDecorative ? '' : ariaLabel || 'logo'}
      aria-hidden={isDecorative}
      className="w-full h-full object-contain mx-auto"
      style={{ backgroundColor: 'transparent' }}
    />
  );

  return (
    <div className={`${stickyClass} ${glassClass} ${className}`} aria-hidden={isDecorative} aria-label={ariaLabel}>
      <div ref={containerRef} style={maskStyle}>
        {/* Show fallback PNG immediately to avoid delay */}
        <div style={{ width: '100%', height: '100%' }}>
          {fallback}
        </div>

        {/* Shader overlay (absolute); becomes visible when mounted */}
        {shaderSupported && !hasShaderError && (
          <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: shaderMounted ? 1 : 0, transition: 'opacity 250ms ease', pointerEvents: 'none' }}>
            <ErrorBoundary fallback={null}>
              <LiquidMetal
                width={640}
                height={360}
                image={shaderImageSrc}
                colorBack={colorBack}
                colorTint={colorTint}
                repetition={repetition}
                softness={softness}
                shiftRed={0.3}
                shiftBlue={0.3}
                distortion={distortion}
                contour={contour}
                angle={angle}
                speed={speed}
                scale={scale}
                fit={fit}
              />
            </ErrorBoundary>
          </div>
        )}
      </div>
    </div>
  );
}
