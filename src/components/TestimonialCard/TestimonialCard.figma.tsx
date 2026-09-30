import figma from "@figma/code-connect";
import { TestimonialCard } from "./TestimonialCard";

figma.connect(
  TestimonialCard,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=7717-3946",
  {
    example: () => (
      <TestimonialCard
        quote="A great tool for our team."
        authorName="Jane Doe"
        authorTitle="Product Lead"
        authorInitials="JD"
      />
    ),
  },
);
