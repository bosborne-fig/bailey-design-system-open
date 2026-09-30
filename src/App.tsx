import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";

export function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <header>
          <h1 className="text-3xl font-semibold text-gray-900">
            Bailey Design System
          </h1>
          <p className="mt-2 text-gray-600">
            React + TypeScript components mapped to Figma via Code Connect.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-gray-900">Button</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-gray-900">Input</h2>
          <Input label="Email" placeholder="you@example.com" />
          <Input label="Password" type="password" placeholder="••••••••" />
        </section>
      </div>
    </div>
  );
}
