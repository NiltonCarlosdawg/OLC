import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Tag, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { getProjectBySlug } from '@/data/projects';
import { ImageWithLightbox } from '@/components/portfolio/ImageWithLightbox';
import { Lightbox } from '@/components/portfolio/Lightbox';

// ── Paleta ibm.tsx ───────────────────────────────────────────────
const GOLD = '#C9A84C';
const NAVY = '#0A0F1E';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [lightboxOpen, setLightboxOpen]     = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return <Navigate to="/404" replace />;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.description}
        image={project.coverImage}
        type="article"
      />

      {/* Gold hairline */}
      <div className="fixed top-0 inset-x-0 z-50 h-[1.5px]" style={{ background: GOLD }} />

      <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#111110]">

        {/* ── Cover — estrutura original h-[70vh] ──────────────────── */}
        <motion.div
          className="relative w-full h-[70vh] overflow-hidden bg-[#1e1e1c]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          {/* Gradient: fundo para bg da página */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, #FAFAF8 0%, rgba(250,250,248,0.2) 50%, transparent 100%)' }}
          />
          {/* Glow dourado */}
          <div
            className="absolute top-0 right-0 w-[40vw] h-[40vw] pointer-events-none"
            style={{ background: `radial-gradient(ellipse at top right, ${GOLD}10 0%, transparent 65%)` }}
          />
        </motion.div>

        {/* ── Detalhe — estrutura original max-w-4xl ───────────────── */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              {/* Título + badge */}
              <div className="flex items-start gap-3 flex-wrap">
                <h1
                  className="font-light tracking-wide text-[#111110] dark:text-[#FAFAF8]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.02 }}
                >
                  {project.title}
                </h1>
                {project.badge && (
                  <span
                    className="font-mono text-[9px] tracking-widest uppercase px-3 py-1 mt-3 shrink-0"
                    style={{ background: GOLD, color: NAVY, fontFamily: "'DM Mono', monospace" }}
                  >
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Meta — estrutura original */}
              <div className="flex flex-wrap gap-6 text-sm font-light">
                <div className="flex items-center gap-2 capitalize">
                  <Tag className="size-4" style={{ color: GOLD }} />
                  <span
                    className="text-[10px] tracking-[0.15em] uppercase"
                    style={{ color: '#999', fontFamily: "'DM Mono', monospace" }}
                  >
                    {project.category}
                  </span>
                </div>
                {project.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4" style={{ color: GOLD }} />
                    <span
                      className="text-[10px] tracking-[0.15em] uppercase"
                      style={{ color: '#999', fontFamily: "'DM Mono', monospace" }}
                    >
                      {project.location}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <Separator className="bg-[#e8e8e6] dark:bg-[#1e1e1c]" />

            {/* Descrição */}
            <p
              className="text-lg md:text-xl font-light leading-relaxed text-[#555] dark:text-[#999]"
              style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: '1.8' }}
            >
              {project.description}
            </p>

            {/* Especialidades (stack) — estrutura original */}
            {project.stack && (
              <div className="space-y-3">
                <div
                  className="flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase"
                  style={{ color: '#bbb', fontFamily: "'DM Mono', monospace" }}
                >
                  <FileText className="size-4" style={{ color: GOLD }} />
                  <span>Especialidades</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.split(' · ').map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs border border-[#e8e8e6] dark:border-[#1e1e1c] px-3 py-1.5 text-[#777] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </section>

        {/* ── Galeria — estrutura original ─────────────────────────── */}
        <section className="py-12 md:py-16">
          <div className="space-y-8 md:space-y-12">
            {project.images.map((image, index) => (
              <ScrollReveal key={image.id} delay={index * 0.1}>
                <ImageWithLightbox
                  image={image}
                  onClick={() => openLightbox(index)}
                  priority={index === 0}
                  index={0}
                  className="w-full"
                />
              </ScrollReveal>
            ))}
          </div>
        </section>

        <Lightbox
          images={project.images}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentImageIndex}
        />
      </div>
    </>
  );
}