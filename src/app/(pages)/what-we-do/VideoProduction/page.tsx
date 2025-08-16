import ServicePageTemplate from "@/app/(templates)/ServicePageTemplate";

export default function VideoProductionPage() {
  return (
    <ServicePageTemplate
      title="Video Production"
      subtitle="Captivating visual storytelling"
      description="We produce high-impact video content that engages audiences and communicates your brand message effectively. From concept to final delivery, we create videos that inspire action."
      keyFeatures={[
        "Concept development and scripting",
        "Professional filming and production",
        "Motion graphics and animation",
        "Editing and post-production",
        "Voiceover and sound design",
        "Distribution strategy"
      ]}
      benefits={[
        "Increased engagement and retention",
        "Higher conversion rates",
        "Improved brand recall",
        "Enhanced social media performance",
        "Versatile content for multiple platforms",
        "Emotional connection with audience"
      ]}
      processSteps={[
        "Concept: Idea development and scripting",
        "Pre-production: Planning and storyboarding",
        "Production: Filming and recording",
        "Post-production: Editing and effects",
        "Delivery: Final output and formats",
        "Distribution: Platform optimization"
      ]}
      imageUrl="/images/services/video-production.jpg"
    />
  );
}