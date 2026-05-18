/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

// Marketing
import { LandingPage } from "./features/marketing/LandingPage";
import { CliniciansPage } from "./features/marketing/CliniciansPage";
import { HealthSystemsPage } from "./features/marketing/HealthSystemsPage";
import { AboutPage } from "./features/marketing/AboutPage";
import { ContactPage } from "./features/marketing/ContactPage";

// UI & Shared
import { cn } from "@lib/utils";

export default function App() {
  return (
    <AppContent />
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="font-sans bg-white min-h-screen relative text-text-primary selection:bg-primary/10">
      <main className={cn("pb-0 mt-0 w-full px-0")}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/clinicians" element={<CliniciansPage />} />
              <Route path="/health-systems" element={<HealthSystemsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Fallback to home */}
              <Route path="*" element={<LandingPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
