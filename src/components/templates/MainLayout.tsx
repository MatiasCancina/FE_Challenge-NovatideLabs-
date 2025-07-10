import type { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 Todo App</h1>
        {children}
      </div>
    </div>
  );
};
