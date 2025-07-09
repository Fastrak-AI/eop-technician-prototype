import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IPhoneFrame from "@/polymet/components/iphone-frame";
import JobsScreen from "@/polymet/components/jobs-screen";
import JobDetails from "@/polymet/components/job-details";
import ServiceChecklist from "@/polymet/pages/service-checklist";
import ServiceReport from "@/polymet/pages/service-report";
import EnhancedServiceReport from "@/polymet/pages/enhanced-service-report";
import MessagesList from "@/polymet/pages/messages-list";
import ChatDetail from "@/polymet/pages/chat-detail";
import { PhotoStorageProvider } from "@/polymet/contexts/PhotoStorageContext";

export default function CervAppPrototype() {
  return (
    <PhotoStorageProvider>
      <Router>
        <Routes>
        <Route
          path="/"
          element={
            <IPhoneFrame>
              <JobsScreen />
            </IPhoneFrame>
          }
        />

        <Route
          path="/jobs"
          element={
            <IPhoneFrame>
              <JobsScreen />
            </IPhoneFrame>
          }
        />

        <Route
          path="/jobs/:jobId"
          element={
            <IPhoneFrame>
              <JobDetails />
            </IPhoneFrame>
          }
        />

        <Route
          path="/jobs/:jobId/checklist"
          element={
            <IPhoneFrame>
              <ServiceChecklist />
            </IPhoneFrame>
          }
        />

        <Route
          path="/jobs/:jobId/report"
          element={
            <IPhoneFrame>
              <EnhancedServiceReport />
            </IPhoneFrame>
          }
        />

        {/* Messages routes */}
        <Route
          path="/messages"
          element={
            <IPhoneFrame>
              <MessagesList />
            </IPhoneFrame>
          }
        />

        <Route
          path="/messages/:chatId"
          element={
            <IPhoneFrame>
              <ChatDetail />
            </IPhoneFrame>
          }
        />

        {/* Other tab bar navigation routes */}
        <Route
          path="/performance"
          element={
            <IPhoneFrame>
              <div className="flex items-center justify-center h-full">
                <h1 className="text-xl font-bold text-gray-500">
                  Performance Coming Soon
                </h1>
              </div>
            </IPhoneFrame>
          }
        />

        <Route
          path="/settings"
          element={
            <IPhoneFrame>
              <div className="flex items-center justify-center h-full">
                <h1 className="text-xl font-bold text-gray-500">
                  Settings Coming Soon
                </h1>
              </div>
            </IPhoneFrame>
          }
        />
        </Routes>
      </Router>
    </PhotoStorageProvider>
  );
}
