import ServicePageTemplate from "@/app/(templates)/ServicePageTemplate";

export default function BrandingVisualIdentityPage() {
  return (
    <ServicePageTemplate
      title="Branding & Visual Identity"
      subtitle="Creating memorable brand experiences"
      description="We develop distinctive brand identities that resonate with your target audience and stand out in competitive markets. Our comprehensive branding solutions cover everything from strategy to visual implementation."
      keyFeatures={[
        "Brand strategy development",
        "Logo design and visual identity systems",
        "Brand guidelines creation",
        "Typography and color palette selection",
        "Brand collateral design",
        "Brand positioning and messaging"
      ]}
      benefits={[
        "Stronger brand recognition",
        "Increased brand value and equity",
        "Consistent customer experience",
        "Differentiation from competitors",
        "Emotional connection with audience",
        "Clear brand communication"
      ]}
      processSteps={[
        "Discovery: Brand audit and research",
        "Strategy: Positioning and messaging framework",
        "Design: Visual identity development",
        "Implementation: Brand application",
        "Guidelines: Brand standards documentation",
        "Activation: Brand launch strategy"
      ]}
      imageUrl="/images/services/branding-visual-identity.jpg"
    />
  );
}