import figma from "@figma/code-connect";
import { Notification } from "./Notification";

figma.connect(
  Notification,
  "https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System?node-id=124-8256",
  {
    props: {
      title: figma.string("Title"),
      body: figma.string("Body"),
      icon: figma.instance("Icon"),
      dismissible: figma.boolean("Dismissible"),
      hasIcon: figma.boolean("Has Icon"),
      hasButton: figma.boolean("Has Button"),
      variant: figma.enum("Variant", {
        Message: "message",
        Alert: "alert",
      }),
    },
    example: (props) => <Notification {...props} />,
  },
);
