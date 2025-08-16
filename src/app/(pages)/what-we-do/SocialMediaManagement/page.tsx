import ServicePageTemplate from "@/app/(templates)/ServicePageTemplate";

export default function SocialMediaManagementPage() {
  return (
    <ServicePageTemplate
      title="Social Media Management"
      subtitle="Amplify your brand's presence across digital platforms"
      description="Our comprehensive social media management service transforms your digital presence into a powerful engagement tool. We create, curate, and manage content that resonates with your audience while building authentic connections that drive brand loyalty and conversions."
      keyFeatures={[
        "Platform-specific content strategy development",
        "Daily content creation & scheduling",
        "Community engagement & response management",
        "Influencer collaboration programs",
        "Performance analytics & optimization",
        "Crisis management & brand protection"
      ]}
      benefits={[
        "Increased brand awareness and recognition",
        "Higher engagement rates with your target audience",
        "Improved customer loyalty and retention",
        "Enhanced brand reputation management",
        "Valuable audience insights and analytics",
        "Consistent brand voice across all platforms"
      ]}
      processSteps={[
        "Strategy development: Platform selection and content planning",
        "Content creation: Visuals, copy, and campaign development",
        "Community building: Engagement and relationship management",
        "Performance analysis: Metrics tracking and reporting",
        "Optimization: Strategy refinement based on data insights",
        "Growth acceleration: Scaling successful initiatives"
      ]}
      imageUrl="/images/services/social-media-management.jpg"
    />
  );
}