import { Button } from "./components/Button";
import { ButtonDanger } from "./components/ButtonDanger";
import { ButtonGroup } from "./components/ButtonGroup";
import { InputField } from "./components/InputField";
import { Tag } from "./components/Tag";
import { Avatar } from "./components/Avatar";
import { NavigationButton } from "./components/NavigationButton";
import { NavigationPill } from "./components/NavigationPill";
import { NavigationPillList } from "./components/NavigationPillList";

export function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <header>
          <h1 className="text-3xl font-semibold text-gray-900">
            Bailey Design System
          </h1>
          <p className="mt-2 text-gray-600">
            React + TypeScript components mapped to Figma via Code Connect.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-gray-900">Buttons</h2>
          <ButtonGroup>
            <Button label="Primary" />
            <Button label="Neutral" variant="neutral" />
            <Button label="Subtle" variant="subtle" />
            <ButtonDanger label="Delete" />
          </ButtonGroup>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-gray-900">Input</h2>
          <InputField label="Email" placeholder="you@example.com" />
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-gray-900">Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Tag label="Brand" scheme="brand" />
            <Tag label="Positive" scheme="positive" />
            <Tag label="Danger" scheme="danger" />
            <Tag label="Warning" scheme="warning" />
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-gray-900">Avatars</h2>
          <div className="flex items-center gap-3">
            <Avatar initials="AB" size="small" />
            <Avatar initials="CD" size="medium" />
            <Avatar initials="EF" size="large" />
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-gray-900">Navigation</h2>
          <NavigationPillList>
            <NavigationPill label="All" state="active" />
            <NavigationPill label="Active" />
            <NavigationPill label="Archived" />
          </NavigationPillList>
          <div className="flex gap-2">
            <NavigationButton label="Home" state="active" />
            <NavigationButton label="Search" />
            <NavigationButton label="Profile" />
          </div>
        </section>
      </div>
    </div>
  );
}
