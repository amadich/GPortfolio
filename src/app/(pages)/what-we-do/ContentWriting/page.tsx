import ServicePageTemplate from "@/app/(templates)/ServicePageTemplate";

export default function ContentWritingPage() {
  return (
    <ServicePageTemplate
      title="Content Writing & Copywriting"
      subtitle="Crafting compelling narratives that convert"
      description="Our expert writers create persuasive, SEO-optimized content that engages your audience and drives conversions. From website copy to blog articles and marketing campaigns, we deliver words that work."
      keyFeatures={[
        "SEO-optimized website content",
        "Blog posts and thought leadership articles",
        "Email marketing campaigns",
        "Social media copywriting",
        "Product descriptions and sales copy",
        "White papers and case studies"
      ]}
      benefits={[
        "Improved search engine rankings",
        "Higher conversion rates",
        "Establishment of industry authority",
        "Enhanced brand voice consistency",
        "Increased audience engagement",
        "Better customer understanding"
      ]}
      processSteps={[
        "Discovery: Understanding your brand and audience",
        "Strategy: Content mapping and planning",
        "Creation: Writing and editing process",
        "Optimization: SEO and readability enhancements",
        "Implementation: Content deployment",
        "Analysis: Performance tracking and refinement"
      ]}
      imageUrl="/images/services/content-writing.jpg"
    />
  );
}