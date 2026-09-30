import figma from "@figma/code-connect";
import { Tab } from "../Tab";
import { Tabs } from "./Tabs";

figma.connect(
  Tabs,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=3729-13362",
  {
    example: () => (
      <Tabs>
        <Tab label="Tab 1" active="on" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
    ),
  },
);
