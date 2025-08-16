import ServicePageTemplate from "@/app/(templates)/ServicePageTemplate";

export default function PaidAdsPerformancePage() {
  return (
    <ServicePageTemplate
      title="Paid Ads & Performance"
      subtitle="Maximizing ROI through targeted advertising"
      description="We design and execute high-performance paid advertising campaigns that deliver measurable results. Our data-driven approach ensures optimal budget allocation and maximum return on ad spend."
      keyFeatures={[
        "Campaign strategy development",
        "Platform-specific ad creation",
        "Audience targeting and segmentation",
        "A/B testing and optimization",
        "Conversion tracking setup",
        "ROI analysis and reporting"
      ]}
      benefits={[
        "Immediate traffic and lead generation",
        "Precise audience targeting",
        "Measurable campaign performance",
        "Cost-effective customer acquisition",
        "Scalable growth opportunities",
        "Competitive market positioning"
      ]}
      processSteps={[
        "Strategy: Goal setting and planning",
        "Setup: Campaign creation and targeting",
        "Launch: Campaign activation",
        "Monitor: Performance tracking",
        "Optimize: Continuous improvement",
        "Scale: Expanding successful campaigns"
      ]}
      imageUrl="/images/services/paid-ads-performance.jpg"
    />
  );
}