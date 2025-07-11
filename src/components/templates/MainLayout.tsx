import type { ReactNode } from "react";
import { FiCheckSquare } from "react-icons/fi";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <FiCheckSquare className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Todo App
              </h1>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"></div>
              <p className="text-gray-600 text-lg">
                Stay organized and productive
              </p>
            </div>

            {/* Main Content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
              {children}
            </div>

            {/* Footer */}
            <div className="text-center mt-8">
              <p className="text-gray-400 text-sm">
                Built with React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
