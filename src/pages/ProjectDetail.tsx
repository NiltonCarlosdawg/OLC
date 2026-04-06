import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Tag, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { getProjectBySlug } from '@/data/projects';
import { ImageWithLightbox } from '@/components/portfolio/ImageWithLightbox';
import { Lightbox } from '@/components/portfolio/Lightbox';
import { Logo } from '@/components/ui/Logo';
import { COLORS } from '@/constants/colors';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <Navigate to="/404" replace />;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Verifica se existem imagens na galeria
  const hasImages = project.images && project.images.length > 0;

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.description}
        image={project.coverImage}
        type="article"
      />

      {/* Gold hairline */}
      <div className="fixed top-0 inset-x-0 z-50 h-[1.5px]" style={{ background: COLORS.gold }} />

      <div className="min-h-screen" style={{ background: COLORS.lightBg }}>

        {/* Cover */}
        <motion.div
          className="relative w-full h-[70vh] overflow-hidden"
          style={{ background: '#1e1e1c' }}
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
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, #FAFAF8 0%, rgba(250,250,248,0.2) 50%, transparent 100%)' }}
          />
          <div
            className="absolute top-0 right-0 w-[40vw] h-[40vw] pointer-events-none"
            style={{ background: `radial-gradient(ellipse at top right, ${COLORS.gold}10 0%, transparent 65%)` }}
          />
        </motion.div>

        {/* Detalhe */}
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
                  className="font-light tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.02, color: COLORS.textDark }}
                >
                  {project.title}
                </h1>
                {project.badge && (
                  <span
                    className="font-mono text-[9px] tracking-widest uppercase px-3 py-1 mt-3 shrink-0"
                    style={{ background: COLORS.gold, color: COLORS.navy, fontFamily: "'DM Mono', monospace" }}
                  >
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-6 text-sm font-light">
                <div className="flex items-center gap-2 capitalize">
                  <Tag className="size-4" style={{ color: COLORS.gold }} />
                  <span
                    className="text-[10px] tracking-[0.15em] uppercase"
                    style={{ color: '#999', fontFamily: "'DM Mono', monospace" }}
                  >
                    {project.category}
                  </span>
                </div>
                {project.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4" style={{ color: COLORS.gold }} />
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
              className="text-lg md:text-xl font-light leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: '1.8', color: COLORS.textMuted }}
            >
              {project.description}
            </p>

            {/* Especialidades */}
            {project.stack && (
              <div className="space-y-3">
                <div
                  className="flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase"
                  style={{ color: '#bbb', fontFamily: "'DM Mono', monospace" }}
                >
                  <FileText className="size-4" style={{ color: COLORS.gold }} />
                  <span>Especialidades</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.split(' · ').map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs border px-3 py-1.5 transition-colors"
                      style={{ 
                        borderColor: COLORS.border, 
                        color: COLORS.textMuted,
                        fontFamily: "'DM Mono', monospace"
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </section>

        {/* ── Galeria - Só mostra se existirem imagens ── */}
        {hasImages && (
          <>
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
          </>
        )}
      </div>
    </>
  );
}