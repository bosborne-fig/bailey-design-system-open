import figma from "@figma/code-connect";
import { StatsCard } from "./StatsCard";

figma.connect(
  StatsCard,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=2236-15082",
  {
    props: {
      icon: figma.instance("Icon"),
    },
    example: (props) => <StatsCard {...props} value="1,234" label="Users" />,
  },
);
