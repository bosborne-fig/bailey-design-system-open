import figma from "@figma/code-connect";
import { ReviewCard } from "./ReviewCard";

figma.connect(
  ReviewCard,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2236-16106",
  {
    example: () => (
      <ReviewCard
        rating={5}
        title="Fantastic experience"
        body="Would recommend to anyone."
        authorName="Jane"
        authorInitials="J"
      />
    ),
  },
);
