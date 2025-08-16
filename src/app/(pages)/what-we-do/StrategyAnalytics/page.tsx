import ServicePageTemplate from "@/app/(templates)/ServicePageTemplate";

export default function StrategyAnalyticsPage() {
  return (
    <ServicePageTemplate
      title="Strategy & Analytics"
      subtitle="Data-driven decisions for measurable growth"
      description="We transform complex data into actionable insights that drive your business forward. Our strategic approach combines market intelligence with performance analytics to optimize your marketing efforts."
      keyFeatures={[
        "Marketing strategy development",
        "Competitive analysis",
        "Customer journey mapping",
        "Performance measurement frameworks",
        "ROI analysis and optimization",
        "Predictive analytics"
      ]}
      benefits={[
        "Improved marketing efficiency",
        "Higher ROI on marketing spend",
        "Better understanding of customer behavior",
        "Data-backed decision making",
        "Identification of growth opportunities",
        "Continuous performance improvement"
      ]}
      processSteps={[
        "Assessment: Current performance analysis",
        "Research: Market and audience insights",
        "Planning: Strategy development",
        "Implementation: Action plan execution",
        "Measurement: KPI tracking",
        "Optimization: Strategy refinement"
      ]}
      imageUrl="/images/services/strategy-analytics.jpg"
    />
  );
}