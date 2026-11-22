
import Navbar from "@/components/layout/Navbar";
import DashboardOverview from "@/components/shared/DashboardOverview";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-2xl font-bold text-gray-900">Recruitment Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">
              AI-powered insights and analytics for your hiring process
            </p>
          </div>
          
          <DashboardOverview />
        </div>
      </div>
    </div>
  );
};

export default Index;
